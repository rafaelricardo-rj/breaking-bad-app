import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodesDetailsPageRoutingModule } from './episodes-details-routing.module';

import { EpisodesDetailsPage } from './episodes-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodesDetailsPageRoutingModule
  ],
  declarations: [EpisodesDetailsPage]
})
export class EpisodesDetailsPageModule {}
