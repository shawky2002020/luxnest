import { Routes } from '@angular/router';
import { authGuard } from '../../guards/auth.guard';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: 'profile',
    // loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
    canActivate: [authGuard]
  },
  {
    path: 'bookings',
    // loadComponent: () => import('./pages/bookings/bookings.component').then(m => m.BookingsComponent),
    canActivate: [authGuard]
  },
  {
    path: 'bookings/:id',
    // loadComponent: () => import('./pages/booking-details/booking-details.component')
    //   .then(m => m.BookingDetailsComponent),
    canActivate: [authGuard]
  }
];