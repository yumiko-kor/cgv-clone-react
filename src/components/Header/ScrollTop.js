import { Link } from 'react-router-dom';
import styled from 'styled-components';
import search from '../../assets/images/search.png';

const ScrollTop = () => {
  return (
    <ScrollTopBlock>
      <LinkStyle to="/movies" style={{ textDecoration: 'none' }}>
        <BottomContent>영화</BottomContent>
      </LinkStyle>
      <LinkStyle to="/ticket" style={{ textDecoration: 'none' }}>
        <BottomContent>예매</BottomContent>
      </LinkStyle>
      <RightBlock>
        <ColumnLine />
        <HeaderInput type="text" />
        <SearchImg src={search} />
        <ColumnLine />
      </RightBlock>
    </ScrollTopBlock>
  );
};

const ScrollTopBlock = styled.div`
  display: flex;
  width: 1000px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

const RightBlock = styled.div`
  margin-left: auto;
  display: flex;
`;

const BottomContent = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding-right: 50px;
`;

const ColumnLine = styled.div`
  width: 1px;
  background-color: #e4e4e4;
  margin: 0 10px;
`;

const HeaderInput = styled.input`
  font-size: 17px;
  border: none;
  padding: 0 7px;
  border: none;
  background: transparent;
`;

const SearchImg = styled.img`
  margin: auto;
  width: 25px;
`;

export default ScrollTop;
