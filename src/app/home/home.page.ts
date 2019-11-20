import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [Flashlight]
})
export class HomePage {
  currentImage: any;
  /*constructor(private flashlight: Flashlight) { }*/
  constructor(private camera: Camera) { }

  Animales = [
    {
      audio:'/assets/Tigre.mp3',
      imagen:'/assets/Tigre.png',
      nombre:'Tigre',
      especie:'Felino',
      alimentacion:'Carnivoro',
      ecosistema:'Sabana',
      peso:'Pesado',
      genero:'Macho',
      raza:'Tigre de Bengala',
    },
    {
      audio:'/assets/Sapo.mp3',
      imagen:'/assets/Sapo.png',
      nombre:'Sapo',
      especie:'Anfibio',
      alimentacion:'Carnivoro',
      ecosistema:'Selva',
      peso:'Ligero',
      genero:'Hembra',
      raza:'Sapo Europeo',
    },
    {
      audio:'/assets/Perro.mp3',
      imagen:'/assets/Perro.png',
      nombre:'Perro',
      especie:'Canino',
      alimentacion:'Croquetas',
      ecosistema:'Domestico',
      peso:'Ligero',
      genero:'Macho',
      raza:'Chihuahua',
    }
  ]

  reproducirAnimal(animal){
    let sonido = new Audio();
    sonido.src = animal.audio;
    sonido.load();
    sonido.play();
  }
  
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log('Camera issue:' + err);
    });
  }

  /*switchFlashlight(evento) {

    let power: boolean = evento.target.checked;


    if (power == true) {
      this.flashlight.switchOn();
    }
    else {
      this.flashlight.switchOff();
    }
  }*/

}
