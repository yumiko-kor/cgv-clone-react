import styled from 'styled-components';

import arrowRight from '../../assets/images/arrowRight.png';

const Banner = () => {
  return (
    <BannerBlock>
      <VideoBackground>
        <StyledVideo src="http://h.vod.cgv.co.kr/vodCGVa/86720/86720_210819_1200_128_960_540.mp4" autoPlay muted />
      </VideoBackground>
      <WrapContent>
        <Title>더 퍼스트 슬램덩크</Title>
        <Content>"슬램덩크 극장판"</Content>
        <Content>만족도 MAX! 예매로 확인 ▶</Content>
        <DetailButton>
          상세보기
          <ArrowImg src={arrowRight} />
        </DetailButton>
      </WrapContent>
    </BannerBlock>
  );
};

const BannerBlock = styled.div`
  position: relative;
  height: 500px;
`;

const StyledVideo = styled.video`
  width: 100%;
  max-height: 500px;
  z-index: -1;
`;

const VideoBackground = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, rgba(20, 20, 20, 1) 20%, rgba(20, 20, 20, 0) 50%, rgba(20, 20, 20, 1) 80%);
`;

const WrapContent = styled.div`
  margin: 0 auto;
  position: relative;
  width: 1000px;
  top: -300px;
`;

const Title = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.72);
  margin-bottom: 10px;
`;

const Content = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const DetailButton = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  padding: 5px 10px 5px 18px;
  background-color: #d4cecd;
  border-radius: 20px;
  margin-top: 15px;
`;

const ArrowImg = styled.img`
  padding-left: 10px;
  height: 15px;
`;

export default Banner;
