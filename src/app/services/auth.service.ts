import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AuthUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<AuthUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  
  // Mock data for development
  private mockUsers: { [email: string]: { user: User, password: string } } = {
    'test@example.com': {
      user: {
        id: '1',
        email: 'test@example.com',
        firstName: 'Test',
        lastName: 'User',
        phoneNumber: '+1234567890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      password: 'password123'
    }
  };

  constructor() {
    // Check if user is stored in localStorage on init
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  public get currentUserValue(): AuthUser | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<AuthUser> {
    // In a real app, this would be an HTTP request to your backend
    const mockUser = this.mockUsers[email];
    
    if (mockUser && mockUser.password === password) {
      const authUser: AuthUser = {
        ...mockUser.user,
        token: 'mock-jwt-token'
      };
      
      // Store user in localStorage
      localStorage.setItem('currentUser', JSON.stringify(authUser));
      this.currentUserSubject.next(authUser);
      
      return of(authUser).pipe(delay(500)); // Simulate API delay
    }
    
    return throwError(() => new Error('Invalid email or password'));
  }

  register(user: Partial<User>, password: string): Observable<AuthUser> {
    // In a real app, this would be an HTTP request to your backend
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 15),
      email: user.email!,
      firstName: user.firstName!,
      lastName: user.lastName!,
      phoneNumber: user.phoneNumber,
      profileImage: user.profileImage,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.mockUsers[newUser.email] = {
      user: newUser,
      password
    };
    
    const authUser: AuthUser = {
      ...newUser,
      token: 'mock-jwt-token'
    };
    
    // Store user in localStorage
    localStorage.setItem('currentUser', JSON.stringify(authUser));
    this.currentUserSubject.next(authUser);
    
    return of(authUser).pipe(delay(500)); // Simulate API delay
  }

  logout(): void {
    // Remove user from localStorage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }
}