import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Property, PropertyType } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  // Mock data for development
  private mockProperties: Property[] = [
    {
      id: '1',
      title: 'Luxury Beachfront Villa',
      description: 'Stunning beachfront villa with panoramic ocean views and private pool.',
      location: {
        address: '123 Beach Road',
        city: 'Malibu',
        state: 'California',
        country: 'USA',
        zipCode: '90265',
        coordinates: {
          latitude: 34.025922,
          longitude: -118.779757
        }
      },
      price: 750,
      priceUnit: 'night',
      images: [
        'https://example.com/property1-image1.jpg',
        'https://example.com/property1-image2.jpg'
      ],
      amenities: ['Pool', 'Beach Access', 'WiFi', 'Kitchen', 'Air Conditioning'],
      type: PropertyType.VILLA,
      bedrooms: 4,
      bathrooms: 3,
      maxGuests: 8,
      rating: 4.9,
      reviewCount: 124,
      hostId: '101',
      hostName: 'Sarah Johnson',
      hostImage: 'https://example.com/host1.jpg',
      createdAt: new Date('2023-01-15'),
      updatedAt: new Date('2023-06-20')
    },
    {
      id: '2',
      title: 'Modern Downtown Apartment',
      description: 'Stylish apartment in the heart of downtown with city views.',
      location: {
        address: '456 Main Street',
        city: 'New York',
        state: 'New York',
        country: 'USA',
        zipCode: '10001',
        coordinates: {
          latitude: 40.7128,
          longitude: -74.006
        }
      },
      price: 250,
      priceUnit: 'night',
      images: [
        'https://example.com/property2-image1.jpg',
        'https://example.com/property2-image2.jpg'
      ],
      amenities: ['WiFi', 'Kitchen', 'Air Conditioning', 'Gym Access'],
      type: PropertyType.APARTMENT,
      bedrooms: 2,
      bathrooms: 2,
      maxGuests: 4,
      rating: 4.7,
      reviewCount: 89,
      hostId: '102',
      hostName: 'Michael Brown',
      hostImage: 'https://example.com/host2.jpg',
      createdAt: new Date('2023-02-10'),
      updatedAt: new Date('2023-07-05')
    },
    {
      id: '3',
      title: 'Mountain Retreat Cabin',
      description: 'Cozy cabin nestled in the mountains with breathtaking views.',
      location: {
        address: '789 Forest Lane',
        city: 'Aspen',
        state: 'Colorado',
        country: 'USA',
        zipCode: '81611',
        coordinates: {
          latitude: 39.1911,
          longitude: -106.8175
        }
      },
      price: 350,
      priceUnit: 'night',
      images: [
        'https://example.com/property3-image1.jpg',
        'https://example.com/property3-image2.jpg'
      ],
      amenities: ['Fireplace', 'Hot Tub', 'WiFi', 'Kitchen', 'Heating'],
      type: PropertyType.CABIN,
      bedrooms: 3,
      bathrooms: 2,
      maxGuests: 6,
      rating: 4.8,
      reviewCount: 65,
      hostId: '103',
      hostName: 'Emily Wilson',
      hostImage: 'https://example.com/host3.jpg',
      createdAt: new Date('2023-03-20'),
      updatedAt: new Date('2023-08-15')
    }
  ];

  constructor() { }

  getProperties(filters?: {
    location?: string;
    type?: PropertyType;
    minPrice?: number;
    maxPrice?: number;
    dates?: { start: Date; end: Date };
    guests?: number;
  }): Observable<Property[]> {
    // In a real app, this would be an HTTP request with query params
    let filteredProperties = [...this.mockProperties];
    
    if (filters) {
      if (filters.location) {
        const locationLower = filters.location.toLowerCase();
        filteredProperties = filteredProperties.filter(p => 
          p.location.city.toLowerCase().includes(locationLower) ||
          p.location.state.toLowerCase().includes(locationLower) ||
          p.location.country.toLowerCase().includes(locationLower)
        );
      }
      
      if (filters.type) {
        filteredProperties = filteredProperties.filter(p => p.type === filters.type);
      }
      
      if (filters.minPrice !== undefined) {
        filteredProperties = filteredProperties.filter(p => p.price >= filters.minPrice!);
      }
      
      if (filters.maxPrice !== undefined) {
        filteredProperties = filteredProperties.filter(p => p.price <= filters.maxPrice!);
      }
      
      if (filters.guests !== undefined) {
        filteredProperties = filteredProperties.filter(p => p.maxGuests >= filters.guests!);
      }
      
      // Date filtering would require booking data in a real app
    }
    
    return of(filteredProperties).pipe(delay(500)); // Simulate API delay
  }

  getPropertyById(id: string): Observable<Property | undefined> {
    // In a real app, this would be an HTTP request to your backend
    const property = this.mockProperties.find(p => p.id === id);
    return of(property).pipe(delay(300)); // Simulate API delay
  }

  getFeaturedProperties(limit: number = 6): Observable<Property[]> {
    // In a real app, this might have different criteria for "featured"
    const featured = this.mockProperties
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, limit);
    
    return of(featured).pipe(delay(500)); // Simulate API delay
  }
}