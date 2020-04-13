import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodesDetailsPage } from './episodes-details.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesDetailsPageRoutingModule {}
