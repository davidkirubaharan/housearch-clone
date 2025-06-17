import Header from '../components/Header';
import Filters from '../components/Filters';
import CityCarousel from '../components/CityCarousel';
import BreadcrumbHeading from '../components/BreadcrumbHeading';
import UAEStatsSection from '../components/UAEStatsSection';
import PopularQueriesSection from '../components/PopularQueriesSection';
import GuidesCarousel from '../components/GuidesCarousel';
import styles from '../components/GuidesCarousel.module.css';
/* import CityCards from '../components/CityCards'; */
import Footer from '../components/Footer'; 

export default function HomePage() {
  return (
    <>
      <Header />
	   <BreadcrumbHeading />
      <Filters />
	  <CityCarousel />
      <UAEStatsSection />
	  <GuidesCarousel />
      <main style={{ padding: '2rem' }}>
        <h2></h2>
      </main>
	  <PopularQueriesSection /> 
	  <Footer /> 
    </>
  );
}
