import styled from 'styled-components';
import SelectBox from './SelectBox';

const Footer = () => {
  const FooterInfo = {
    category: [
      '회사소개',
      '지속가능경영',
      'IR',
      '채용정보',
      '광고/제휴/출점문의',
      '이용약관',
      '편성기준',
      '개인정보처리방침',
      '법적고지',
      '이메일주소무단수집거부',
      '윤리경영',
      '사이버감사실',
    ],
    info: '(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)\n대표이사 허민회 사업자등록번호 104-81-45690 통신판매업신고번호 2017-서울용산-0662 사업자정보확인\n호스팅사업자 CJ올리브네트웍스 개인정보보호 책임자 심준범 대표이메일 cjcgvmaster@cj.net\n© CJ CGV. All Rights Reserved',
  };

  return (
    <FooterBlock>
      <WrapFooter>
        <WrapFooterContent>
          {FooterInfo.category.map((data, index) => (
            <FooterContent key={index}>{data}</FooterContent>
          ))}
        </WrapFooterContent>
        <LineBlock />
        <WrapBottomFooter>
          <BottonFooterContent>{FooterInfo.info}</BottonFooterContent>
          <SelectBox />
        </WrapBottomFooter>
      </WrapFooter>
    </FooterBlock>
  );
};

const FooterBlock = styled.div`
  background-color: #f8f8f8;
  height: 450px;
`;

const WrapFooter = styled.div`
  margin: 0 auto;
  width: 1000px;
  padding-top: 270px;
`;

const WrapFooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const FooterContent = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #707070;

  &:nth-child(8) {
    color: black;
    text-decoration: underline;
  }
`;

const LineBlock = styled.div`
  height: 1px;
  background-color: #ebebeb;
`;

const WrapBottomFooter = styled.div`
  display: flex;
`;

const BottonFooterContent = styled.div`
  margin-top: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #6a6a6a;
  white-space: pre-wrap;
  line-height: 20px;
`;

export default Footer;
