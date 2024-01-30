import styled from 'styled-components';
import IconBack from '../../assets/images/return.png';
import IconHome from '../../assets/images/home.png';

import { Link, useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate(); //변수 할당시켜서 사용

  const ticketData = JSON.parse(localStorage.getItem('ticket'));

  return (
    <>
      <SuccessBlock>
        <Title>예매 완료</Title>
        <WrapContent>
          <Poster src={ticketData.image} />
          <Content>제목 : {ticketData.title}</Content>
          <Content>위치 : {ticketData.region}</Content>
          <Content>날짜 : {ticketData.time}</Content>
          <Content>시간 : {ticketData.timeline}</Content>
        </WrapContent>
        <WrapButton>
          <BackBtn
            onClick={() => {
              navigate(-1);
            }}
          >
            <IconImg src={IconBack} />
            이전
          </BackBtn>
          <Link to="/">
            <BackBtn>
              <IconImg src={IconHome} />홈
            </BackBtn>
          </Link>
        </WrapButton>
        <GrayLine />
        <Content>도움이 필요하시면 고객센터로 문의해주세요.</Content>
      </SuccessBlock>
    </>
  );
};

const IconImg = styled.img`
  margin-right: 10px;
  width: 10px;
`;

const SuccessBlock = styled.div`
  margin: 100px;
`;

const Poster = styled.img`
  display: flex;
  margin: 30px auto;
  width: 200px;
  text-align: center;
  border-radius: 10px;
`;

const Title = styled.div`
  margin-top: 30px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const WrapContent = styled.div`
  margin: 50px auto;
  border: 1px solid #d8d8d8;
  width: 500px;
  border-radius: 20px;
`;

const Content = styled.div`
  margin: 15px;
  text-align: center;
  font-size: 20px;
`;

const WrapButton = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;

const BackBtn = styled.button`
  margin: 10px;
  width: 100px;
  height: 28px;
  border: 1px solid #e4e4e4;
  border-radius: 50px;
  background-color: white;
`;

const GrayLine = styled.div`
  width: 900px;
  height: 1px;
  margin: 20px auto;
  background-color: #d8d8d8;
`;

export default Success;
