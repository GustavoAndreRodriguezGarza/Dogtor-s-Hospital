import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResumenPage } from './resumen.page';

import { SideBarPage } from '../side-bar/side-bar.page';
import { SideBarPageModule } from '../side-bar/side-bar.module';


const routes: Routes = [
  {
    path: '',
    component: ResumenPage
  }
];

@NgModule({

  entryComponents: [
    SideBarPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    SideBarPageModule,

    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResumenPage]
})
export class ResumenPageModule {}
