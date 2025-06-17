import React from 'react';
import styles from './ListingCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ListingCard({ listing }) {
  return (
    <Link href={listing.href} className={styles.card} target="_blank" rel="noreferrer">
      <Image src={listing.image} alt={listing.title} className={styles.image} width={300} height={320} />
      <div className={styles.info}>
        <div className={styles.price}>from ${listing.price.toLocaleString()}</div>
        <div className={styles.title}>{listing.title}</div>
        <div className={styles.location}>{listing.location}</div>
        <div className={styles.description}>{listing.description}</div>
        <div className={styles.developer}>By {listing.developer}</div>
      </div>
    </Link>
  );
}
