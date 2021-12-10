import { NgModule } from '@angular/core';


// LIBRERIAS 

// Modulos
import { SharedModule } from "../shared/shared.module";

//components
import { ContentComponent } from './content/content.component';

// ROUTES
import { PAGES_ROUTES } from "./pages.routes";
import { FormexampleComponent } from './content/formexample/formexample.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContentComponent, FormexampleComponent],
  exports: [],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
