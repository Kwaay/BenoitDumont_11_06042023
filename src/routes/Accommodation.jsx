import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import AccommodationService from '../services/Accommodation';
import TagsList from '../components/TagsList';
import StarsList from '../components/StarsList';
import Carousel from '../components/Carousel';
import DropdownList from '../components/DropdownList';
import Footer from '../components/Footer';

export default function Accommodation() {
  const { id } = useParams();
  const [accommodation, setAccommodations] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAccommodations() {
      AccommodationService.getOne(id)
        .then((data) => {
          setAccommodations(data);
        })
        .catch(() => navigate('/404'));
    }
    fetchAccommodations();
  }, [id]);
  if (accommodation === null) return <p>Chargement en cours...</p>;
  return (
    <div className="App">
      <Header />
      <main className="accommodation-container">
        <Carousel pictures={accommodation.pictures}></Carousel>
        <div className="accommodation-infos">
          <div className="accommodation-title-owner">
            <div className="accommodation-title">
              <h1>{accommodation.title}</h1>
              <p>{accommodation.location}</p>
            </div>
            <div className="accommodation-owner">
              <p>{accommodation.host.name}</p>
              <img
                src={accommodation.host.picture}
                alt={accommodation.host.name}
              />
            </div>
          </div>
          <div className="accommodation-tags-rating">
            <TagsList tags={accommodation.tags}></TagsList>
            <StarsList rating={Number(accommodation.rating)}></StarsList>
          </div>
        </div>
        <DropdownList
          dropdowns={[
            {
              title: 'Description',
              content: accommodation.description,
              openedByDefault: true,
              textFontSize: 24,
            },
            {
              title: 'Equipements',
              content: accommodation.equipments,
              openedByDefault: true,
              textFontSize: 24,
            },
          ]}
          direction={'row'}
        ></DropdownList>
      </main>
      <Footer></Footer>
    </div>
  );
}
