import styled from 'styled-components';
import IconError from '../../assets/images/error.png';
import IconBack from '../../assets/images/return.png';
import IconHome from '../../assets/images/home.png';

import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate(); //변수 할당시켜서 사용

  return (
    <>
      <WrapNotFound>
        <ErrorImg src={IconError} />
        <Title>이용에 불편을 드려 죄송합니다.</Title>
        <Content>요청하신 페이지가 변경 되었거나 일시적으로 사용이 중단되었습니다.</Content>
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
      </WrapNotFound>
    </>
  );
};

const ErrorImg = styled.img`
  display: flex;
  margin: auto;
  width: 100px;
`;

const IconImg = styled.img`
  margin-right: 10px;
  width: 10px;
`;

const WrapNotFound = styled.div`
  margin: 100px;
`;

const Title = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Content = styled.div`
  margin: 15px;
  text-align: center;
  font-size: 13px;
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

export default Error;
