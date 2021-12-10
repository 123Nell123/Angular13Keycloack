import { RouterModule, Routes } from '@angular/router';

//guards
import { AuthGuardService } from '../services/auth/guards/auth-guard.service';

//component
import { ContentComponent } from './content/content.component';
import { FormexampleComponent } from './content/formexample/formexample.component';

const pagesRoutes: Routes = [
  {
    path: 'home',
    component: ContentComponent,
    canActivate: [AuthGuardService],
    children : [{
      path: '',
      component: FormexampleComponent,
      canActivate: [AuthGuardService]
    }]
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
