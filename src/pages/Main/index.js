import { useState } from 'react';

import Banner from './Banner';
import Ranking from './Movie/Ranking';
import EventList from './Event/EventList';
import SpecialList from './Special/SpecialList';

const Main = () => {
  return (
    <>
      <Banner />
      <Ranking />
      <EventList />
      <SpecialList />
    </>
  );
};

export default Main;
