import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { AuthGuardService } from './auth/guards/auth-guard.service';


@NgModule({
  declarations: [],
  providers: [
   // GUARDS
   AuthGuardService
  ],
  imports: [HttpClientModule, CommonModule],
})
export class ServicesModule { }
