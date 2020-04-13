import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CastDetailsPage } from './cast-details.page';

const routes: Routes = [
  {
    path: '',
    component: CastDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastDetailsPageRoutingModule {}
