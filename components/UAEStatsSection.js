// components/UAEStatsSection.js
import styles from './UAEStatsSection.module.css';

export default function UAEStatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <h2 className={styles.heading}>What makes property in the UAE such a great deal?</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <div className={styles.value}>5%</div>
            <div className={styles.label}>Down payment</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.value}>0%</div>
            <div className={styles.label}>Installments from the developer</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.value}>$102K</div>
            <div className={styles.label}>Minimum apartment price</div>
          </div>
        </div>
      </div>
    </section>
  );
}
