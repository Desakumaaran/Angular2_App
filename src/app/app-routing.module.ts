import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Home/app-home.component';

//import { ComposeMessageComponent }  from './compose-message.component';
//import { PageNotFoundComponent }    from './not-found.component';

//import { CanDeactivateGuard }       from './can-deactivate-guard.service';
//import { AuthGuard }                from './auth-guard.service';
//import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  //{
   // path: 'Home2',
   // component: ComposeMessageComponent,
   // outlet: 'popup'
 // },
  //{
   // path: 'Login',
   // loadChildren: 'app/admin/admin.module#AdminModule',
    //canLoad: [AuthGuard]
  //},
  {
    path: 'ShowDetails',
    loadChildren: 'app/Productlists/app-productlist.module#ProductlistModule',
    data: { preload: true }
  },
  //{ path: '',   redirectTo: '/heroes', pathMatch: 'full' },
     { path: '',   redirectTo: '/Home', component: HomeComponent },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      //{ preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  //providers: [
    //CanDeactivateGuard,
    //SelectivePreloadingStrategy
  //]
})
export class AppRoutingModule { }
