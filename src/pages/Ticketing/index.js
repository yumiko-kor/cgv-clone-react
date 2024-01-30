import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import MovieInfo from './MovieInfo';
import MockupImage from '../../assets/images/noImg.jpg';
import TicketingInfo from './TicketingInfo';
import SelectBox from './SelectBox';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Ticketing = () => {
  const location = useLocation();
  const selectedMovie = location.state;

  const [select, setSelect] = useState({
    title: selectedMovie ? selectedMovie.title : '영화를 선택해주세요.',
    image: selectedMovie ? IMAGE_URL + selectedMovie.poster_path : MockupImage,
    average: selectedMovie ? selectedMovie.vote_average : '',
    origin: selectedMovie ? selectedMovie.original_title : '',
  });

  const MovieData = {
    title: select.title,
    image: select.image,
    average: select.average,
    origin: select.origin,
  };

  return (
    <>
      <MovieInfo data={MovieData} />
      <SelectBox onSelect={setSelect} select={select} />
      <TicketingInfo select={select} />
    </>
  );
};

export default Ticketing;
