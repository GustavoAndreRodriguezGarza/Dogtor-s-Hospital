import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import * as watermark from 'watermarkjs';
import { SideBarPage } from '../side-bar/side-bar.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage {

  @ViewChild('waterMarkedImage', {static: false}) waterMarkImage: ElementRef;
 
  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy: number;
  geoAddress: string;
  Address: string;
 
  watchLocationUpdates: any; 
  loading: any;
  isWatching: boolean;

  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  originalImage = null;
  blobImage = null;
  locationCordinates: any;
  loadingLocation: boolean;
 
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA
  };
 
 
  constructor(
    private camera: Camera,
    private modalController: ModalController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {
    this.getLatLong();
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude; 
      this.geoAccuracy = resp.coords.accuracy; 
      this.getGeoencoder(this.geoLatitude,this.geoLongitude);
     }).catch((error) => {
       alert('Error getting location'+ JSON.stringify(error));
     });
  }

  getGeoencoder(latitude,longitude){
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
    .then((result: NativeGeocoderResult[]) => {
      this.geoAddress = this.generateAddress(result[0]);
    })
    .catch((error: any) => {
      alert('Error getting location'+ JSON.stringify(error));
    });
  }

  generateAddress(addressObj){
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if(obj[val].length)
      address += obj[val]+', ';
    }
  return address.slice(0, -2);
}

watchLocation(){
  this.isWatching = true;
  this.watchLocationUpdates = this.geolocation.watchPosition();
  this.watchLocationUpdates.subscribe((resp) => {
    this.geoLatitude = resp.coords.latitude;
    this.geoLongitude = resp.coords.longitude; 
    this.getGeoencoder(this.geoLatitude,this.geoLongitude);
  });
}

stopLocationWatch(){
  this.isWatching = false;
  this.watchLocationUpdates.unsubscribe();
}
 
  takeSnap() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      this.originalImage = 'data:image/jpeg;base64,' + imageData;
 
      fetch(this.originalImage)
        .then(res => res.blob())
        .then(blob => {
          this.blobImage = blob;
          this.watermarkImage();
        });
    }, (error) => {
       console.log(error);
    });
    this.getGeolocation();
  }

  getLatLong() {
    this.loadingLocation = true;
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.locationCordinates = resp.coords;
      this.loadingLocation = false;
    }).catch((error) => {
      this.loadingLocation = false;
      console.log('Error getting location', error);
    });
  }

  watermarkImage() {
    this.Address = this.geoAddress;
    watermark([this.blobImage])
    .image(watermark.text.lowerLeft(this.Address, '200px Arial', '#F5A905', 0.8))
      .then(img => {
        this.waterMarkImage.nativeElement.src = img.src;
      });
  }

  async SideBar() {
    const modal = await this.modalController.create({
      component: SideBarPage,
      cssClass: 'my-custom-modal-css'
    });

    modal.onDidDismiss().then((data) => {
    });
    return await modal.present();
  }
}
