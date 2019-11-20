import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdoptarPage } from './adoptar/adoptar.page';
import { OverlayEventDetail } from '@ionic/core';
import { SideBarPage } from '../side-bar/side-bar.page';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.page.html',
  styleUrls: ['./adopcion.page.scss'],
})
export class AdopcionPage implements OnInit {

  public movimientos;
  mascotas: { imagen: string; nombre: string; especie: string; alimentacion: string; peso: string; genero: string; raza: string; }[];



  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.mascotas =[
      {
        imagen:'/assets/Tigre.png',
        nombre:'Tigre',
        especie:'Felino',
        alimentacion:'Carnivoro',
        peso:'Pesado',
        genero:'Macho',
        raza:'Tigre de Bengala',
      },
      {
        imagen:'/assets/Sapo.png',
        nombre:'Sapo',
        especie:'Anfibio',
        alimentacion:'Carnivoro',
        peso:'Ligero',
        genero:'Hembra',
        raza:'Sapo Europeo',
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
    console.log(this.movimientos);
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
    console.log(this.movimientos);
    const modal = await this.modalController.create({
      component: SideBarPage,
      cssClass: 'my-custom-modal-css'
    });

    modal.onDidDismiss().then((data) => {
    });
    return await modal.present();
  }
}
