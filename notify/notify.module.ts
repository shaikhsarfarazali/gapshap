import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifyPageRoutingModule } from './notify-routing.module';

import { NotifyPage } from './notify.page';
import { FooterTabsComponent } from '../components/footer-tabs/footer-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifyPageRoutingModule
  ],
  declarations: [NotifyPage, FooterTabsComponent]
})
export class NotifyPageModule {}
