import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'cast',
        children: [
          {
            path: '',
            loadChildren: () => import('../cast/cast.module').then( m => m.CastPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../cast-details/cast-details.module').then( m => m.CastDetailsPageModule)
          }
        ]
      },
      {
        path: 'episodes',
        children: [
          {
            path: '',
            loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../episodes-details/episodes-details.module').then( m => m.EpisodesDetailsPageModule)
          }
        ]
      },
      {
        path: 'quotes',
        children: [
          {
            path: '',
            loadChildren: () => import('../quotes/quotes.module').then( m => m.QuotesPageModule)
          }
        ]
      },
      {
        path: 'death',
        children: [
          {
            path: '',
            loadChildren: () => import('../death/death.module').then( m => m.DeathPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cast',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRouterModule {}