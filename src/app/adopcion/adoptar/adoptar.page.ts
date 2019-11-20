import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdopcionPage } from '../adopcion.page';

@Component({
  selector: 'app-adoptar',
  templateUrl: './adoptar.page.html',
  styleUrls: ['./adoptar.page.scss'],
})
export class AdoptarPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  Nombre: string;
  Telefono: number;
  masMascotas: boolean;
  Patio: boolean;

  async Adoptar() {
    var data: any = [];
    data = { Nombre: this.Nombre, Telefono: this.Telefono, masMascotas: this.masMascotas, Patio: this.Patio};
    this.modalController.dismiss(data);
  }

  async salirModal() {
    this.modalController.dismiss();
  }

}
