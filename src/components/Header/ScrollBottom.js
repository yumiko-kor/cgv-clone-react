import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/images/logoWhite.png';
import searchWhite from '../../assets/images/searchWhite.png';

const ScrollBottom = () => {
  return (
    <ScrollBottomBlock>
      <WrapBottomContent>
        <Link to="/">
          <WhiteLogoImg src={logoWhite} />
        </Link>
        <LinkStyle to="/movies" style={{ textDecoration: 'none' }}>
          <BottomContent>영화</BottomContent>
        </LinkStyle>
        <LinkStyle to="/ticket" style={{ textDecoration: 'none' }}>
          <BottomContent>예매</BottomContent>
        </LinkStyle>
        <RightBlock>
          <ColumnLine />
          <HeaderInput />
          <SearchImg src={searchWhite} />
          <ColumnLine />
        </RightBlock>
      </WrapBottomContent>
    </ScrollBottomBlock>
  );
};

const ScrollBottomBlock = styled.div`
  z-index: 1;
  width: 100%;
  position: fixed;
  background: linear-gradient(45deg, #d74256, #ef632f);
  top: 0;
`;

const WrapBottomContent = styled.div`
  display: flex;
  width: 1000px;
  margin: auto;
  padding: 15px 20px;
`;

const WhiteLogoImg = styled.img`
  width: 65px;
`;

const RightBlock = styled.div`
  margin-left: auto;
  display: flex;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

const BottomContent = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding-left: 50px;
  color: white;
  line-height: 30px;
`;

const ColumnLine = styled.div`
  width: 1px;
  background-color: #d84b31;
  margin: 0 10px;
`;

const HeaderInput = styled.input`
  font-size: 17px;
  border: none;
  padding: 0 7px;
  background: transparent;
`;

const SearchImg = styled.img`
  margin: auto;
  width: 25px;
`;

export default ScrollBottom;
