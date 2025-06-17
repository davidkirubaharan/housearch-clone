import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './CityCarousel.module.css';
import Link from 'next/link';
import Image from 'next/image';


const cities = [
  {
    name: 'Dubai',
    price: '$90K',
    buildings: '807 new buildings',
    img: 'https://static.housearch.com/s3/realty-front-deploy/build-static/realty-front-global/_/23da039d2eb8c12c3d11def7b2c14240.webp',
    href: '/uae/residential-complexes/?regions=4',
  },
  {
    name: 'Abu Dhabi',
    price: '$99K',
    buildings: '53 new buildings',
    img: 'https://static.housearch.com/s3/realty-front-deploy/build-static/realty-front-global/_/e32d4811b30d08a4491f03dbd30bba9f.webp',
    href: '/uae/residential-complexes/?regions=2',
  },
  {
    name: 'Ras Al Khaimah',
    price: '$130K',
    buildings: '35 new buildings',
    img: 'https://static.housearch.com/s3/realty-front-deploy/build-static/realty-front-global/_/ffb40c1316efe954b1addb972700e912.webp',
    href: '/uae/residential-complexes/?regions=32',
  },
  {
    name: 'Sharjah',
    price: '$102K',
    buildings: '21 new buildings',
    img: 'https://static.housearch.com/s3/realty-front-deploy/build-static/realty-front-global/_/7d9dab9c6135e518ad09aa58c8dfb39b.webp',
    href: '/uae/residential-complexes/?regions=17',
  },
  {
    name: 'Abu Dhabi',
    price: '$99K',
    buildings: '53 new buildings',
    img: 'https://static.housearch.com/s3/realty-front-deploy/build-static/realty-front-global/_/e32d4811b30d08a4491f03dbd30bba9f.webp',
    href: '/uae/residential-complexes/?regions=2',
  },
];

export default function CityCarousel() {
  return (
    <section className={styles.carouselSection}>
		<div className={styles.carouselHeader}>
  <h3>Cities in the UAE</h3>
  <div className={styles.navRight}>
    <div className={`swiper-button-prev ${styles.navArrow}`}></div>
    <div className={`swiper-button-next ${styles.navArrow}`}></div>
  </div>
</div>


      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        className={styles.citySwiper}
      >
        {cities.map((city) => (
          <SwiperSlide key={city.name}>
            <Link href={city.href} className={styles.cityCard}>
              <Image src={city.img} alt={city.name} width={300} height={320} />
              <div className={styles.cityDetails}>
                <h4>{city.name}</h4>
                <p>{city.price}</p>
                <p className={styles.building}>{city.buildings}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
