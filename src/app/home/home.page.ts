import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { SideBarPage } from '../side-bar/side-bar.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [Flashlight]
})
export class HomePage {

  constructor(private flashlight: Flashlight, private modalController: ModalController) {
  }
  Animales=[
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

  switchFlashlight(evento) {

    let power: boolean = evento.target.checked;


    if (power == true) {
      this.flashlight.switchOn();
    }
    else {
      this.flashlight.switchOff();
    }
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
