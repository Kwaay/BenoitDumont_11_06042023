import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import AccommodationsList from '../components/AccommodationsList';
import AccommodationService from '../services/Accommodation';

export default function Home() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    async function fetchAccommodations() {
      const datas = await AccommodationService.getAll();
      setAccommodations(datas);
    }
    fetchAccommodations();
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <Banner
          img="https://images.unsplash.com/photo-1593201464350-96ec57065aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          text={['Chez vous, ', 'partout et ailleurs']}
          mod="desktop"
        />
        <AccommodationsList
          accommodations={accommodations}
        ></AccommodationsList>
      </main>
      <Footer />
    </div>
  );
}
