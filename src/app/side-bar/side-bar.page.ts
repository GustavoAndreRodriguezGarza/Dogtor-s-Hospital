import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.page.html',
  styleUrls: ['./side-bar.page.scss'],
})
export class SideBarPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

}
