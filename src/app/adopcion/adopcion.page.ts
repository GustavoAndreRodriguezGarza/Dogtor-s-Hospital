import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdoptarPage } from './adoptar/adoptar.page';
import { OverlayEventDetail } from '@ionic/core';
import { SideBarPage } from '../side-bar/side-bar.page';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.page.html',
  styleUrls: ['./adopcion.page.scss'],
  providers: [Flashlight]
})
export class AdopcionPage implements OnInit {

  mascotas: { imagen: string; nombre: string; especie: string; alimentacion: string; peso: string; genero: string; raza: string; }[];
  visible: boolean = false;
  power: boolean = false;



  constructor(private modalController: ModalController, private flashlight: Flashlight) { }

  ngOnInit() {
    this.mascotas =[
      {
        imagen:'/assets/GermanShepherd.png',
        nombre:'Perro',
        especie:'Canino',
        alimentacion:'Croquetas',
        peso:'Medio',
        genero:'Hembra',
        raza:'Pastor Aleman',
      },
      {
        imagen:'/assets/GatoSiames.png',
        nombre:'Gato',
        especie:'Felino',
        alimentacion:'Carnivoro',
        peso:'Ligero',
        genero:'Hembra',
        raza:'Gato Siames',
      },
      {
        imagen:'/assets/Perro.png',
        nombre:'Perro',
        especie:'Canino',
        alimentacion:'Croquetas',
        peso:'Ligero',
        genero:'Macho',
        raza:'Chihuahua',
      }
    ];
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: AdoptarPage
    });

    modal.onDidDismiss().then((data) => {
      if (data['data'] != null) {
        console.log(data);
      }
    });
    return await modal.present();
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

  toggle(event) {
    this.visible = !this.visible;
    this.switchFlashlight(event);
   }

  switchFlashlight(evento) {

    if(this.power == false)
      this.power = true;
    else
      this.power = false;

    if (this.power == true) {
      this.flashlight.switchOn();
    }
    else {
      this.flashlight.switchOff();
    }
  }
}
