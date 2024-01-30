import styled from 'styled-components';

const Special = props => {
  const { title, hashtag, image } = props.data;
  const ChangeImgage = () => {
    props.hover(image);
    props.listHover(title);
  };

  return (
    <>
      <WrapContent
        onMouseOver={ChangeImgage}
        border={props.list === title ? '#000000' : 'none'}
        weight={props.list === title ? 'bold' : 'normal'}
      >
        <Title>{title}</Title>
        <HashTag>{hashtag}</HashTag>
      </WrapContent>
    </>
  );
};

const WrapContent = styled.div`
  display: flex;
  width: 400px;
  height: 70px;
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
  padding: 0 20px;
  border: 1px solid ${props => props.border};
  font-weight: ${props => props.weight};
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-top: 16px;
  line-height: 35px;
`;

const HashTag = styled.div`
  height: 35px;
  margin-left: auto;
  font-size: 14px;
  color: #676767;
  font-weight: bold;
  background: #f6f6f6;
  border-radius: 10px;
  margin-top: 16px;
  line-height: 35px;
  padding: 0 7px;
`;

export default Special;
