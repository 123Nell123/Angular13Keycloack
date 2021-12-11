import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//sidenab
import { MaterialModule } from "../material.module";

// pages
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NopagefoundComponent,
    AccessdeniedComponent,
    LoadingComponent,
  ],
  imports: [
    // children
    RouterModule,
    CommonModule,
    MaterialModule,
   
  ],
  exports: [
    HeaderComponent,
    NopagefoundComponent,
    AccessdeniedComponent,
    LoadingComponent,
    MaterialModule
  ],
})
export class SharedModule {}
