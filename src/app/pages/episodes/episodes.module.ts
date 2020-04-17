import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodesPageRoutingModule } from './episodes-routing.module';

import { EpisodesPage } from './episodes.page';
import { MyFilterPipePipe } from '../../pipes/my-filter-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodesPageRoutingModule
  ],
  declarations: [
      EpisodesPage,
      MyFilterPipePipe
    ]
})
export class EpisodesPageModule {}
