/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  iconName: string; // Lucide icon identifier
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'groundworks' | 'landscaping' | 'extensions' | 'paving';
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  service: string;
  area: string;
  details: string;
}

export interface ContactMessage {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
