// components/PopularQueriesSection.js
import styles from './PopularQueriesSection.module.css';

const queries = {
  Apartments: {
    Dubai: [
      { text: 'Apartments — Jumeirah Village Circle, Dubai, UAE', href: '#' },
    ],
    'Abu Dhabi': [
      { text: 'Apartments for sale in Saadiyat Island, Abu-dhabi, UAE', href: '#' },
    ],
    'Other emirates': [
      { text: 'Apartments in Ras-al-khaimah, UAE', href: '#' },
    ],
  },
  Houses: {
    Dubai: [
      { text: 'Houses for sale — Dubailand, Dubai, UAE', href: '#' },
    ],
    'Abu Dhabi': [
      { text: 'Houses in Yas Island, Abu-dhabi, UAE', href: '#' },
    ],
    'Other emirates': [
      { text: 'Houses — Ras-al-khaimah, UAE', href: '#' },
    ],
  },
};

export default function PopularQueriesSection() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h2 className={styles.title}>Popular queries</h2>

        {Object.entries(queries).map(([category, locations]) => (
          <div key={category} className={styles.block}>
            <h3 className={styles.category}>{category}</h3>
            <div className={styles.columns}>
              {Object.entries(locations).map(([city, links]) => (
                <div key={city} className={styles.column}>
                  <h4 className={styles.city}>{city}</h4>
                  {links.map((item, idx) => (
                    <a key={idx} href={item.href} className={styles.link}>{item.text}</a>
                  ))}
                  <button className={styles.showMore}>Show more ▼</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
