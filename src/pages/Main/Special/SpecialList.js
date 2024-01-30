import styled from 'styled-components';
import { useState } from 'react';

import special1 from '../../../assets/images/special1.png';
import special2 from '../../../assets/images/special2.png';
import special3 from '../../../assets/images/special3.png';
import special4 from '../../../assets/images/special4.png';

import Special from './Special';

const SpecialList = () => {
  const [isListHover, setIsListHover] = useState(special1);
  const [listTitle, setListTitle] = useState('SUITE CINEMA');

  const SpecialData = [
    { title: 'SUITE CINEMA', image: special1, hashtag: '#호텔 컨셉의 프리미어관' },
    { title: 'CINE & LIVINGROOM', image: special2, hashtag: '#신개념 소셜 상영관' },
    { title: '4DX', image: special3, hashtag: '#모션시트 #오감체험' },
    { title: 'CINE de CHEF', image: special4, hashtag: '#쉐프가 있는 영화관' },
  ];
  return (
    <SpecialBlock>
      <Title>특별관</Title>
      <WrapEvent>
        <EventImage src={isListHover} />
        <WrapList>
          {SpecialData.map((data, index) => (
            <Special data={data} key={index} hover={setIsListHover} list={listTitle} listHover={setListTitle}></Special>
          ))}
        </WrapList>
      </WrapEvent>
    </SpecialBlock>
  );
};

const SpecialBlock = styled.div`
  width: 1000px;
  margin: auto;
  padding: 50px 0;
  overflow: hidden;
`;

const WrapEvent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EventImage = styled.img`
  width: 500px;
  border-radius: 10px;
  margin-right: 20px;
`;

const WrapList = styled.div`
  display: block;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export default SpecialList;
