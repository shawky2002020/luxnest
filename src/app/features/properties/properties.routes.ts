import { Routes } from '@angular/router';

export const PROPERTIES_ROUTES: Routes = [
  {
    path: '',
    // loadComponent: () => import('./pages/property-listing/property-listing.component')
    //   .then(m => m.PropertyListingComponent)
  },
  {
    path: ':id',
    // loadComponent: () => import('./pages/property-details/property-details.component')
    //   .then(m => m.PropertyDetailsComponent)
  }
];