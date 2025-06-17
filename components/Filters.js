'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LocationDropdown from './LocationDropdown';
import BedroomDropdown from './BedroomDropdown';
import PriceDropdown from './PriceDropdown';
import MoreFiltersDropdown from './MoreFiltersDropdown';
import styles from './Filters.module.css';

export default function Filters({ onFilterChange }) {
  const router = useRouter();

  const [filters, setFilters] = useState({
    location: [],
    bedrooms: [],
    priceMin: '',
    priceMax: '',
    types: [],
  });

  const handleFilterChange = (field, value) => {
    const updated = { ...filters, [field]: value };
    setFilters(updated);

    if (onFilterChange) {
      onFilterChange(updated);
    }
  };

  const handleSearch = () => {
    const query = new URLSearchParams();

    if (filters.location.length) query.append('location', filters.location.join(','));
    if (filters.bedrooms.length) query.append('bedrooms', filters.bedrooms.join(','));
    if (filters.priceMin) query.append('priceMin', filters.priceMin);
    if (filters.priceMax) query.append('priceMax', filters.priceMax);
    if (filters.types.length) query.append('types', filters.types.join(','));

    router.push(`/results?${query.toString()}`);
  };

  return (
    <div className={`container filters ${styles.filtersWrapper || ''}`}>
      <LocationDropdown
        selected={filters.location}
        onChange={(newLocations) => handleFilterChange('location', newLocations)}
      />

      <BedroomDropdown
        selected={filters.bedrooms}
        onChange={(newBedrooms) => handleFilterChange('bedrooms', newBedrooms)}
      />

      <PriceDropdown
        min={filters.priceMin}
        max={filters.priceMax}
        onChange={({ priceMin, priceMax }) => {
          handleFilterChange('priceMin', priceMin);
          handleFilterChange('priceMax', priceMax);
        }}
      />

      <MoreFiltersDropdown
        selectedTypes={filters.types}
        onChange={(types) => handleFilterChange('types', types)}
      />

      <button className="filter-button primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
