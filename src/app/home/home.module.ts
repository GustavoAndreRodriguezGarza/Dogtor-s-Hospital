import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { SideBarPage } from '../side-bar/side-bar.page';
import { SideBarPageModule } from '../side-bar/side-bar.module';

@NgModule({
  entryComponents: [
    SideBarPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SideBarPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
