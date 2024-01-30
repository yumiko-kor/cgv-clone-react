import { useState } from 'react';

import styled from 'styled-components';
import List from './List';

const Ranking = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <RankingBlock>
      <WrapTitle>
        <MovieButton onClick={() => setIsChecked(false)} check={isChecked}>
          무비차트
        </MovieButton>
        <ColumnLine />
        <UpComingButton onClick={() => setIsChecked(true)} check={isChecked}>
          상영예정작
        </UpComingButton>
      </WrapTitle>
      {isChecked ? <List select={'upcoming'} /> : <List select={'popular'} />}
    </RankingBlock>
  );
};

const RankingBlock = styled.div`
  width: 1000px;
  margin: 50px auto;
`;

const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ColumnLine = styled.div`
  width: 1px;
  height: 15px;
  margin: 0 5px;
  background: #d8d8d8;
`;

const MovieButton = styled.button`
  border: none;
  background: none;
  font-size: 25px;
  color: ${props => (props.check ? '#666' : '#000000')};
  font-weight: ${props => (props.check ? '400' : '700')};
  cursor: pointer;
`;

const UpComingButton = styled.button`
  border: none;
  background: none;
  font-size: 25px;
  color: ${props => (props.check ? '#000000' : '#666')};
  font-weight: ${props => (props.check ? '700' : '400')};
  cursor: pointer;
`;

export default Ranking;
