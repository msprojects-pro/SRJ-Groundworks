/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, GalleryItem, TestimonialItem } from './types';

// High-resolution premium images from Unsplash to ensure absolute reliability in any hosting environment (Cloudflare, Vercel, etc.)
export const ASSETS = {
  heroBg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop', // Luxury home patio / extension design
  excavationBg: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop', // Neat excavation and groundwork
  patioPavingBg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop', // Exquisite garden tiling and patios
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'groundworks',
    title: 'Groundworks & Excavation',
    description: 'Expert excavation, site preparation, and earthmoving services with modern machinery for domestic and commercial projects.',
    longDescription: 'We offer professional excavation, site levelling, trenching, and soil disposal. Utilizing a range of precision mini diggers and larger plant machinery, we ensure your site is perfectly prepared to meet exact specifications, whether for a small extension or a large-scale development.',
    iconName: 'Wrench',
  },
  {
    id: 'foundations',
    title: 'Foundations & Footings',
    description: 'Precision engineered foundations, footings, and concrete pouring to secure structural integrity from the ground up.',
    longDescription: 'Strong foundations are critical. We specialize in strip foundations, trench-fill footings, raft foundations, and bespoke concrete pouring. Our experienced team works meticulously with building control inspectors to guarantee absolute compliance and solid structural security.',
    iconName: 'Layers',
  },
  {
    id: 'extensions',
    title: 'House Extensions Prep',
    description: 'Comprehensive groundwork prep for house extensions, including blockwork, structural slab preparation, and utility links.',
    longDescription: 'Planning a house extension? We handle the entire below-ground preparation phase. From initial site excavation, pouring concrete footings, and installing sub-base blockwork, to laydown slabs, insulation, and running critical gas, water, and power utility ducts.',
    iconName: 'Home',
  },
  {
    id: 'patios',
    title: 'Hard Landscaping & Patios',
    description: 'Bespoke patio installations using premium natural stone, porcelain, or traditional slabs, meticulously laid for longevity.',
    longDescription: 'Transform your outdoor living space with a high-end patio. We source premium porcelain, Indian sandstone, slate, and limestone. Each stone is laid on a complete mortar bed with adequate drainage and elegant jointing compound, ensuring a flawless finish that withstands the elements.',
    iconName: 'Grid',
  },
  {
    id: 'driveways',
    title: 'Driveways & Paving',
    description: 'Exquisite driveways designed with block paving, gravel, or stone, finished with robust borders and proper sub-bases.',
    longDescription: 'Boost your property\'s curb appeal with a durable, stunning driveway. We install block paving, resin-bound aggregates, and clean gravel drives. Every driveway we build is backed by a substantial MOT Type 1 aggregate sub-base, weed barriers, and robust block edging to prevent shifting.',
    iconName: 'Milestone',
  },
  {
    id: 'clearance',
    title: 'Garden Clearances & Levelling',
    description: 'Complete removal of overgrown vegetation, trees, and debris, followed by heavy land grading and topsoil application.',
    longDescription: 'We clear wild, overgrown plots of land, removing dense shrubs, tree stumps, and unwanted concrete slabs or old garden walls. After clearance, we perform detailed grading, ground levelling, and apply premium screened topsoil, prepping the land for turf or landscaping.',
    iconName: 'Trees',
  },
  {
    id: 'drainage',
    title: 'Drainage Systems',
    description: 'Comprehensive drainage work including soakaways, French drains, surface water redirection, and foul water pipework.',
    longDescription: 'Prevent pooling water and structural damp with professional drainage. We install efficient land drainage systems, modern crate-based soakaways, linear aco drains, French drains, and lay durable underground PVC pipework for sewage and rainwater runoff.',
    iconName: 'Droplet',
  },
  {
    id: 'retaining-walls',
    title: 'Retaining Walls',
    description: 'Structural retaining walls built from sleeper timber, brick, or reinforced concrete blocks to hold soil and level sloped gardens.',
    longDescription: 'Sloped gardens can be beautiful and functional. We construct heavy-duty retaining walls using pressure-treated oak or softwood sleepers, engineered blockwork, and traditional stone walls. Every retaining wall includes dedicated back-fill drainage to relieve water pressure.',
    iconName: 'SquareStack',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Premium Indian Sandstone Patio',
    category: 'landscaping',
    imageUrl: ASSETS.patioPavingBg,
    description: 'Newly completed natural sandstone patio with raised brick planting beds in Bath, Somerset.',
  },
  {
    id: 'gal-2',
    title: 'Extension Footings & Concrete Pour',
    category: 'groundworks',
    imageUrl: ASSETS.excavationBg,
    description: 'Precision trenches and structural concrete footings poured for a double-storey rear extension.',
  },
  {
    id: 'gal-3',
    title: 'Block Paving Driveway',
    category: 'paving',
    imageUrl: 'https://images.unsplash.com/photo-1595841696662-5b8c4d7521c7?q=80&w=800&auto=format&fit=crop',
    description: 'Charcoal gray block paved driveway with integrated linear drainage, durable MOT sub-base.',
  },
  {
    id: 'gal-4',
    title: 'Garden Clearance & Tiered Sleeper Walls',
    category: 'landscaping',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=800&auto=format&fit=crop',
    description: 'Sloped garden cleared, graded, and terraced with rustic oak timber retaining sleeper walls.',
  },
  {
    id: 'gal-5',
    title: 'Excavation & Foundations Preparation',
    category: 'groundworks',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop',
    description: 'Heavy site clearance and initial grading using 3-tonne micro digger for new build development.',
  },
  {
    id: 'gal-6',
    title: 'Porcelain Tile Outdoor Dining Area',
    category: 'landscaping',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    description: 'Luxury light gray porcelain outdoor tiling, clean grout lines, and minimalist design in Wiltshire.',
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    location: 'Lansdown, Bath',
    text: 'SRJ Groundworks did an incredible job clearing our overgrown sloped garden and laying a beautiful porcelain patio. The team was extremely polite, tidy, and finished the work ahead of schedule. Highly recommended!',
    rating: 5,
    date: 'May 2026'
  },
  {
    id: 't-2',
    name: 'David Thorne',
    location: 'Bradford-on-Avon, Wiltshire',
    text: 'Very professional outfit. They dug out and poured the foundations for our house extension. Building control passed the footings with zero issues. Clean cuts, punctual, and highly skilled operators.',
    rating: 5,
    date: 'April 2026'
  },
  {
    id: 't-3',
    name: 'Robert and Mary',
    location: 'Bear Flat, Bath',
    text: 'We had our entire block-paving driveway replaced by SRJ. The attention to detail in laying the sub-base and alignment of the blocks was first-rate. Our driveway looks fantastic and drains perfectly.',
    rating: 5,
    date: 'June 2026'
  },
  {
    id: 't-4',
    name: 'James L.',
    location: 'Chippenham, Wiltshire',
    text: 'Incredibly reliable service. They sorted out our severe garden drainage issues by installing a French drain and soakaway crates, then re-turfed the lawn. No more standing water! Excellent workmanship.',
    rating: 5,
    date: 'March 2026'
  }
];

export const BUSINESS_INFO = {
  name: 'SRJ Groundworks',
  tagline: 'Professional Groundworks, Extensions, Footings, Hard Landscaping & Garden Clearances.',
  phone: '+44 7835 996839',
  phoneFormatted: '07835 996839',
  email: 'srjgroundworks@gmail.com',
  areasCovered: 'Bath, Wiltshire & Surrounding Areas',
  location: 'Walcot, Bath, United Kingdom',
  address: 'Walcot, Bath, Somerset, UK',
  workingHours: 'Mon - Fri: 8:00 AM - 5:30 PM, Sat: 8:00 AM - 1:00 PM'
};
