import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CastDetailsPageRoutingModule } from './cast-details-routing.module';

import { CastDetailsPage } from './cast-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CastDetailsPageRoutingModule
  ],
  declarations: [CastDetailsPage]
})
export class CastDetailsPageModule {}
