// components/Header.js
'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header-wrapper">
      {/* Top Bar - Row 1 */}
      <div className="topbar">
        <div className="container">
          <Link href="/partner/join-us" className="header-link">For Business</Link>
          <div className="header-actions">
            <button type="button" className="header-btn">🌐 English ▼</button>
            <button type="button" className="header-btn">⚙ Settings ▼</button>
          </div>
        </div>
      </div>

      {/* Main Header - Row 2 */}
      <div className="main-header">
        <div className="container">
          <Link href="/" className="logo">
            <strong>HOUSEARCH</strong>
          </Link>

          <div className="country">Country</div>
          <button className="country-btn" type="button">
            UAE ▼
          </button>

          <nav className="main-menu">
            <Link href="/uae/residential-complexes/">New buildings</Link>
            <Link href="/uae/property-for-sale/">Buy</Link>
            <Link href="/uae/property-for-rent/">Rent</Link>
            <Link href="/en/blog/">Blog</Link>
            <Link href="/markets/">Markets</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
