import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AccessdeniedComponent } from './shared/accessdenied/accessdenied.component';

const routes: Routes = [
  {path: 'login',  component: LoginComponent,  data: { titulo: 'Login'}},
  {path: 'login/:error',  component: LoginComponent,  data: { titulo: 'Login'}},
  {path: 'no-authorized',  component: AccessdeniedComponent, data: { titulo: 'Access denied'}},
  {path: '',  component: RedirectComponent  },
  {path: '**',  component: NopagefoundComponent, data: { titulo: 'Page not found'}},
];

export const APP_ROUTES = RouterModule.forRoot( routes, {useHash: true} );
