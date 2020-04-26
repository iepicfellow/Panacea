import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountdPageRoutingModule } from './accountd-routing.module';

import { AccountdPage } from './accountd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountdPageRoutingModule
  ],
  declarations: [AccountdPage]
})
export class AccountdPageModule {}
