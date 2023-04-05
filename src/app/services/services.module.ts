import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { AuthGuardService } from './auth/guards/auth-guard.service';
import { KeycloakService } from 'keycloak-angular';


@NgModule({
  declarations: [],
  providers: [
   // GUARDS
   AuthGuardService,
   KeycloakService
  ],
  imports: [HttpClientModule, CommonModule],
})
export class ServicesModule { }
