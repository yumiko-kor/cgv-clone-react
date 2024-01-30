import styled from 'styled-components';

const Event = props => {
  const { image, title, date } = props.data;
  return (
    <>
      <WrapContent>
        <EventImage src={image}></EventImage>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </WrapContent>
    </>
  );
};

const EventImage = styled.img`
  width: 315px;
  border-radius: 10px;
  margin-right: 20px;
`;

const WrapContent = styled.div`
  display: block;
`;

const Title = styled.div`
  width: 315px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
  line-height: 1.444em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Date = styled.div`
  font-size: 17px;
  margin-top: 7px;

  color: #676767;
`;

export default Event;
