export interface Property {
  id: string;
  title: string;
  description: string;
  location: Location;
  price: number;
  priceUnit?: 'night' | 'week' | 'month';
  images: string[];
  amenities: string[];
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  rating?: number;
  reviewCount?: number;
  hostId?: string;
  hostName?: string;
  hostImage?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export enum PropertyType {
  APARTMENT = 'apartment',
  HOUSE = 'house',
  VILLA = 'villa',
  CABIN = 'cabin',
  COTTAGE = 'cottage',
  UNIQUE = 'unique'
}
