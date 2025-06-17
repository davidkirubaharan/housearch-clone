// components/BreadcrumbHeading.js
import styles from './BreadcrumbHeading.module.css';
import Link from 'next/link';

export default function BreadcrumbHeading() {
  return (
    <div className={`_DfWR ${styles.wrapper}`}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
        <ol className={styles.breadcrumbList}>
          <li>
            <Link href="/" className={styles.breadcrumbLink}>
              Find properties
              <svg className={styles.icon}>
                <use xlinkHref="#arrow-right-16" />
              </svg>
            </Link>
          </li>
          <li>
            <span className={`${styles.breadcrumbLink} ${styles.disabled}`}>
              UAE
            </span>
          </li>
        </ol>
      </nav>

      <h2 className={styles.pageHeading}>
        <span className={styles.subtext}>buy or rent</span><br />
        apartments in the UAE
      </h2>
    </div>
  );
}
