import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Booking, BookingStatus } from '../models/booking.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  // Mock data for development
  private mockBookings: Booking[] = [
    {
      id: '1',
      propertyId: '1',
      userId: '1',
      checkInDate: new Date('2023-12-15'),
      checkOutDate: new Date('2023-12-20'),
      guests: {
        adults: 2,
        children: 1,
        infants: 0
      },
      totalPrice: 3750,
      status: 'confirmed',
      paymentStatus: 'paid',
      createdAt: new Date('2023-11-01'),
      updatedAt: new Date('2023-11-01')
    },
    {
      id: '2',
      propertyId: '2',
      userId: '1',
      checkInDate: new Date('2024-01-10'),
      checkOutDate: new Date('2024-01-15'),
      guests: {
        adults: 2,
        children: 0,
        infants: 0
      },
      totalPrice: 1250,
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: new Date('2023-11-05'),
      updatedAt: new Date('2023-11-05')
    }
  ];

  constructor(private authService: AuthService) { }

  getUserBookings(): Observable<Booking[]> {
    // In a real app, this would be an HTTP request to your backend
    const currentUser = this.authService.currentUserValue;
    
    if (!currentUser) {
      return throwError(() => new Error('User not authenticated'));
    }
    
    const userBookings = this.mockBookings.filter(booking => booking.userId === currentUser.id);
    return of(userBookings).pipe(delay(500)); // Simulate API delay
  }

  getBookingById(id: string): Observable<Booking | undefined> {
    // In a real app, this would be an HTTP request to your backend
    const currentUser = this.authService.currentUserValue;
    
    if (!currentUser) {
      return throwError(() => new Error('User not authenticated'));
    }
    
    const booking = this.mockBookings.find(b => b.id === id && b.userId === currentUser.id);
    return of(booking).pipe(delay(300)); // Simulate API delay
  }

  createBooking(booking: Omit<Booking, 'id' | 'status' | 'paymentStatus' | 'createdAt' | 'updatedAt'>): Observable<Booking> {
    // In a real app, this would be an HTTP request to your backend
    const currentUser = this.authService.currentUserValue;
    
    if (!currentUser) {
      return throwError(() => new Error('User not authenticated'));
    }
    
    const newBooking: Booking = {
      ...booking,
      id: Math.random().toString(36).substring(2, 15),
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.mockBookings.push(newBooking);
    return of(newBooking).pipe(delay(700)); // Simulate API delay
  }

  updateBookingStatus(id: string, status: BookingStatus): Observable<Booking> {
    // In a real app, this would be an HTTP request to your backend
    const currentUser = this.authService.currentUserValue;
    
    if (!currentUser) {
      return throwError(() => new Error('User not authenticated'));
    }
    
    const bookingIndex = this.mockBookings.findIndex(b => b.id === id && b.userId === currentUser.id);
    
    if (bookingIndex === -1) {
      return throwError(() => new Error('Booking not found'));
    }
    
    this.mockBookings[bookingIndex] = {
      ...this.mockBookings[bookingIndex],
      status,
      updatedAt: new Date()
    };
    
    return of(this.mockBookings[bookingIndex]).pipe(delay(500)); // Simulate API delay
  }

  checkAvailability(propertyId: string, checkIn: Date, checkOut: Date): Observable<boolean> {
    // In a real app, this would check against actual bookings in the database
    // For mock purposes, we'll just return true most of the time
    const isAvailable = Math.random() > 0.2; // 80% chance of availability
    return of(isAvailable).pipe(delay(300)); // Simulate API delay
  }
}