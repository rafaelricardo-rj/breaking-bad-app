import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathPageRoutingModule } from './death-routing.module';

import { DeathPage } from './death.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathPageRoutingModule
  ],
  declarations: [DeathPage]
})
export class DeathPageModule {}
