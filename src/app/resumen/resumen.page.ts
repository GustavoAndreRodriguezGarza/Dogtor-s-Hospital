import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import * as watermark from 'watermarkjs';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage {

  @ViewChild('waterMarkedImage', {static: false}) waterMarkImage: ElementRef;
 
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
    private geolocation: Geolocation
  ) {
    this.getLatLong();
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
    watermark([this.blobImage])
    .image(watermark.text.lowerLeft(this.getLatLong(), '200px Arial', '#F5A905', 0.8))
      .then(img => {
        this.waterMarkImage.nativeElement.src = img.src;
      });
  }
}
