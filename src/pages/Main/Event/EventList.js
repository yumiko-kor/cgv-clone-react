import styled from 'styled-components';

import Event from './Event';
import event1 from '../../../assets/images/event1.jpeg';
import event2 from '../../../assets/images/event2.jpeg';
import event3 from '../../../assets/images/event3.jpeg';

const EventList = () => {
  const EventData = [
    { title: '농놀은 계속 되어야한다! [CGV 농구대잔치]', image: event1, date: '2023.04.07~2023.04.16' },
    { title: '[킬링 로맨스]필름마크', image: event2, date: '2023.04.07~2023.04.28' },
    { title: '[존윅 4]필름마크', image: event3, date: '2023.04.04~2023.04.26' },
  ];
  return (
    <EventBlock>
      <Title>EVENT</Title>
      <WrapEvent>
        {EventData.map((data, index) => (
          <Event data={data} key={index} />
        ))}
      </WrapEvent>
    </EventBlock>
  );
};

const EventBlock = styled.div`
  width: 1000px;
  margin: auto;
  padding: 50px 0;
  overflow: hidden;
`;

const WrapEvent = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export default EventList;
