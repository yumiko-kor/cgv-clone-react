import styled from 'styled-components';

const DetailNavigation = () => {
  return <NavigationBlock>주요정보 | 트레일러 | 스틸컷 | 평점/리뷰 | 상영시간표 </NavigationBlock>;
};

const NavigationBlock = styled.div`
  display: flex;
  margin: 50px auto;
  justify-content: center;
  background-color: #fb4357;
  width: 370px;
  height: 40px;
  color: white;
  line-height: 40px;
`;

export default DetailNavigation;
