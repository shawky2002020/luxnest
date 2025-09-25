import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/home/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component:LandingPageComponent
  },
  {
    path: 'properties',
    loadChildren: () => import('./features/properties/properties.routes').then(m => m.PROPERTIES_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'booking',
    loadChildren: () => import('./features/booking/booking.routes').then(m => m.BOOKING_ROUTES)
  },
  {
    path: 'account',
    loadChildren: () => import('./features/account/account.routes').then(m => m.ACCOUNT_ROUTES)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
