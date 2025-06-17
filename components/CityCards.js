// components/CityCards.js
import Link from 'next/link';
import Image from 'next/image';

export default function CityCards() {
  const cities = [
    {
      name: "Dubai",
      price: "$90K",
      buildings: "807 new buildings",
      img: "https://static.housearch.com/s3/realty-front-deploy/build-static/realty-front-global/_/23da039d2eb8c12c3d11def7b2c14240.webp",
      href: "/uae/residential-complexes/?regions=4",
    },
    {
      name: "Abu Dhabi",
      price: "$99K",
      buildings: "53 new buildings",
      img: "https://static.housearch.com/s3/realty-front-deploy/build-static/realty-front-global/_/e32d4811b30d08a4491f03dbd30bba9f.webp",
      href: "/uae/residential-complexes/?regions=2",
    },
    {
      name: "Ras Al Khaimah",
      price: "$130K",
      buildings: "35 new buildings",
      img: "https://static.housearch.com/s3/realty-front-deploy/build-static/realty-front-global/_/ffb40c1316efe954b1addb972700e912.webp",
      href: "/uae/residential-complexes/?regions=32",
    },
    {
      name: "Sharjah",
      price: "$102K",
      buildings: "21 new buildings",
      img: "https://static.housearch.com/s3/realty-front-deploy/build-static/realty-front-global/_/7d9dab9c6135e518ad09aa58c8dfb39b.webp",
      href: "/uae/residential-complexes/?regions=17",
    },
  ];

  return (
    <section className="city-cards">
      <div className="container">
        <h3>Cities in the UAE</h3>
        <div className="cards-grid">
          {cities.map((c) => (
            <Link key={c.name} href={c.href} className="city-card">
              <div className="card-image">
                <Image src={c.img} alt={c.name} width={300} height={320} loading="lazy" />
              </div>
              <div className="card-info">
                <h4>{c.name}</h4>
                <p className="price">starting at {c.price}</p>
                <p className="buildings">{c.buildings}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
