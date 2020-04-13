import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathPage } from './death.page';

const routes: Routes = [
  {
    path: '',
    component: DeathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathPageRoutingModule {}
