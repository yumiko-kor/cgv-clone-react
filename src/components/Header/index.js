import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logoRed from '../../assets/images/logoRed.png';
import loginJoin from '../../assets/images/loginJoin.png';
import loginMember from '../../assets/images/loginMember.png';
import loginPassword from '../../assets/images/loginPassword.png';
import loginCustomer from '../../assets/images/loginCustomer.png';
import gotoTopBtn from '../../assets/images/gotoTop.png';

import ScrollTop from './ScrollTop.js';
import ScrollBottom from './ScrollBottom.js';

const Header = () => {
  const location = useLocation();

  const [position, setPosition] = useState(0);
  document.addEventListener('scroll', function () {
    const afterPosition = document.documentElement.scrollTop;
    setPosition(afterPosition);
  });

  return (
    <>
      <WrapHeaderBlock>
        <HeaderBlock>
          <Link to="/">
            <LogoImg src={logoRed} />
          </Link>
          <Title>C U L T U R E P L E X</Title>
          <RightBlock>
            <WrapHeaderImg>
              <HeaderImg src={loginPassword} />
              <HeaderContent>
                <StyledLink to="/login">로그인 </StyledLink>
              </HeaderContent>
            </WrapHeaderImg>
            <WrapHeaderImg>
              <HeaderImg src={loginJoin} />
              <HeaderContent>회원가입</HeaderContent>
            </WrapHeaderImg>
            <WrapHeaderImg>
              <HeaderImg src={loginMember} />
              <HeaderContent>MY CGV</HeaderContent>
            </WrapHeaderImg>
            <WrapHeaderImg>
              <HeaderImg src={loginCustomer} />
              <HeaderContent>고객센터</HeaderContent>
            </WrapHeaderImg>
          </RightBlock>
        </HeaderBlock>
      </WrapHeaderBlock>
      <LineBlock />
      <WrapHeaderBottomBlock>{position < 95 ? <ScrollTop /> : <ScrollBottom />}</WrapHeaderBottomBlock>
      {position < 95 || location.pathname === '/ticket' ? (
        <RedLineBlock />
      ) : (
        <>
          <Link to="/ticket">
            <TicketingButton onClick={() => window.scrollTo(0, 0)}>예매하기</TicketingButton>
          </Link>
          <UpButton onClick={() => window.scrollTo(0, 0)}></UpButton>
        </>
      )}
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #757575;
`;

const WrapHeaderBlock = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;

const WrapHeaderBottomBlock = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: center;
`;

const HeaderBlock = styled.div`
  width: 1000px;
  display: flex;
`;

const Title = styled.div`
  color: #585858;
  margin-top: 30px;
`;

const LogoImg = styled.img`
  height: 53px;
`;

const RightBlock = styled.div`
  margin-left: auto;
  display: flex;
`;

const WrapHeaderImg = styled.div`
  margin-left: 44px;
  margin-top: 2px;
  text-align: center;
`;

const HeaderImg = styled.img`
  margin: auto;
  width: 33px;
`;

const HeaderContent = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #757575;
`;

const LineBlock = styled.div`
  height: 1px;
  background-color: #e4e4e4;
`;

const RedLineBlock = styled.div`
  height: 2px;
  background-color: #fa4357;
`;

const TicketingButton = styled.div`
  position: fixed;
  color: white;
  width: 100px;
  background: linear-gradient(45deg, #fb4856, #fe7056);
  bottom: 90px;
  right: 200px;
  border-radius: 100px;
  padding: 13px;
  text-align: center;
  font-weight: bold;
  box-shadow: 1px 1px 1px 1px #00000030;
  z-index: 1;
`;

const UpButton = styled.button`
  background-image: url(${gotoTopBtn});
  background-repeat: no-repeat;
  background-size: 15px;
  background-position: center;
  border: 1px solid #000000;
  border-radius: 100%;
  width: 45px;
  height: 45px;
  background-color: white;
  position: fixed;
  bottom: 90px;
  right: 150px;
  box-shadow: 1px 1px 1px 1px #00000030;
  z-index: 1;
`;

export default Header;
