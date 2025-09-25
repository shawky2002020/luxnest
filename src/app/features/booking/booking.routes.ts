import { Routes } from '@angular/router';

export const BOOKING_ROUTES: Routes = [
  {
    path: ':propertyId',
    // loadComponent: () => import('./pages/booking-form/booking-form.component')
    //   .then(m => m.BookingFormComponent)
  },
  {
    path: 'confirmation/:bookingId',
    // loadComponent: () => import('./pages/booking-confirmation/booking-confirmation.component')
    //   .then(m => m.BookingConfirmationComponent)
  },
  {
    path: 'payment/:bookingId',
    // loadComponent: () => import('./pages/booking-payment/booking-payment.component')
    //   .then(m => m.BookingPaymentComponent)
  }
];