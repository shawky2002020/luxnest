import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../../../shared/components/search-bar/search-bar.component';
import { PropertyCardComponent } from '../../../shared/components/property-card/property-card.component';
import { Property, PropertyType } from '../../../models/property.model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchBarComponent, PropertyCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  // Mock data for featured properties
  featuredProperties: Property[] = [
    {
      id: '1',
      title: 'Seaside Retreat',
      description: 'A beautiful beachfront villa with panoramic ocean views.',
      location: {   
        address: '123 Coastal Drive',
        city: 'Malibu',
        state: 'California',
        country: 'USA',
        zipCode: '90265',
        coordinates: {
          latitude: 33.7701,
          longitude: -118.1937
        }
      },
      price: 350,
      images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'],
      amenities: ['Pool', 'Spa', 'Beach Access', 'Wifi'],
      type: PropertyType.VILLA,
      bedrooms: 4,
      bathrooms: 3,
      maxGuests: 8,
      rating: 4.9
    },
    {
      id: '2',
      title: 'Mountain Escape',
      description: 'A cozy cabin nestled in the mountains, perfect for a peaceful getaway.',
      location: {   
        address: '456 Alpine Road',
        city: 'Aspen',
        state: 'Colorado',
        country: 'USA',
        zipCode: '81611',
        coordinates: {
          latitude: 39.1911,
          longitude: -106.8175
        }
      },
      price: 280,
      images: ['https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'],
      amenities: ['Fireplace', 'Mountain View', 'Hiking Trails', 'Wifi'],
      type: PropertyType.CABIN,
      bedrooms: 3,
      bathrooms: 2,
      maxGuests: 6,
      rating: 4.8
    },
    {
      id: '3',
      title: 'Urban Loft',
      description: 'A stylish loft in the heart of the city, close to all attractions.',
      location: {   
        address: '789 Downtown Ave',
        city: 'New York',
        state: 'New York',
        country: 'USA',
        zipCode: '10001',
        coordinates: {
          latitude: 40.7128,
          longitude: -74.0060
        }
      },
      price: 400,
      images: ['https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'],
      amenities: ['City View', 'Gym', 'Wifi', 'Rooftop Access'],
      type: PropertyType.APARTMENT,
      bedrooms: 2,
      bathrooms: 2,
      maxGuests: 4,
      rating: 4.7
    },
  ];

  // Handle search submission
  onSearch(searchData: any): void {
    console.log('Search submitted:', searchData);
    // Will be integrated with backend later
  }
}