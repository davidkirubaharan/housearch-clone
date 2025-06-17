'use client';

import { useSearchParams } from 'next/navigation';
import ListingCard from './ListingCard';
import styles from '../app/results/results.module.css';

const mockListings = [
  {
    title: 'Blue Bay Walk',
    price: 102000,
    location: 'Sharjah, Al Hamriyah, Hamriya West',
    description: '600 smart apartments with beach views, pools, shops, restaurants.',
    developer: 'AJMAL MAKAN',
    image: 'https://avatars.housearch.com/get-verba/997355/2a0000018bae5b4aaf0650a2db734856cce6/housearch_app_0x560',
    href: '/uae/residential-complexes/blue-bay-walk-3728151/',
  },
  {
    title: 'Palm Towers',
    price: 130000,
    location: 'Abu Dhabi, Marina, West Bay',
    description: 'Luxury high-rise with modern amenities, beachfront, and concierge.',
    developer: 'Emaar Properties',
    image: 'https://avatars.housearch.com/get-verba/997355/2a0000018baecbf2ff1cb16cc354c92ba0f8/housearch_app_0x560',
    href: '/uae/residential-complexes/palm-towers-123456/',
  },
  {
    title: 'Sunrise Residency',
    price: 89000,
    location: 'Dubai Hills, Dubai',
    description: 'Affordable housing with schools, parks and gym access.',
    developer: 'Nakheel',
    image: 'https://avatars.housearch.com/get-verba/997355/2a0000018baecbd420831ec247ad8f74d9ac/housearch_app_0x560',
    href: '/uae/residential-complexes/sunrise-residency-789456/',
  },
];

export default function ResultsClientPage() {
  const params = useSearchParams();

  const locationParams = params.get('location')?.split(',') || [];
  const bedrooms = params.get('bedrooms')?.split(',') || [];
  const priceMin = parseInt(params.get('priceMin')) || 0;
  const priceMax = parseInt(params.get('priceMax')) || Infinity;
  const types = params.get('types')?.split(',') || [];

  const filteredListings = mockListings.filter((listing) => {
    const matchLocation =
      locationParams.length === 0 ||
      locationParams.some((loc) =>
        listing.location.toLowerCase().includes(loc.toLowerCase())
      );

    const matchPrice =
      listing.price >= priceMin && listing.price <= priceMax;

    return matchLocation && matchPrice;
  });

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h2>Search Results</h2>
      <div>
        <strong>Location:</strong> {locationParams.join(', ') || 'Any'} <br />
        <strong>Bedrooms:</strong> {bedrooms.join(', ') || 'Any'} <br />
        <strong>Price:</strong> ${priceMin || 'Any'} - ${priceMax !== Infinity ? priceMax : 'Any'} <br />
        <strong>Property Types:</strong> {types.join(', ') || 'Any'}
      </div>

      <div style={{ marginTop: '2rem' }}>
        {filteredListings.length === 0 ? (
          <p>No matching results found.</p>
        ) : (
          <div className={styles.grid}>
            {filteredListings.map((listing, idx) => (
              <ListingCard key={idx} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
