import { useEffect, useState } from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import DropdownsList from '../components/DropdownList';
import AboutService from '../services/About';

export default function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    async function fetchAbouts() {
      const datas = await AboutService.getAll();
      setAbouts(datas);
    }
    fetchAbouts();
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <Banner
          img="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          text={['']}
          mod="desktop"
        />
        <div className="dropdownlist-container">
          <DropdownsList dropdowns={abouts}></DropdownsList>
        </div>
      </main>
      <Footer />
    </div>
  );
}
