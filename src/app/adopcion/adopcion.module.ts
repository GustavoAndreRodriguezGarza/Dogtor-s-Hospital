import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdopcionPage } from './adopcion.page';
import { AdoptarPage } from './adoptar/adoptar.page';
import { AdoptarPageModule } from './adoptar/adoptar.module';
import { SideBarPage } from '../side-bar/side-bar.page';
import { SideBarPageModule } from '../side-bar/side-bar.module';

const routes: Routes = [
  {
    path: '',
    component: AdopcionPage
  }
];

@NgModule({
  entryComponents: [
    AdoptarPage,
    SideBarPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AdoptarPageModule,
    SideBarPageModule
  ],
  declarations: [AdopcionPage]
})
export class AdopcionPageModule { }
