import styled from 'styled-components';
import Region from './Region';

const RegionList = props => {
  const { title, content } = props.data;
  return (
    <>
      <LineBlock />
      📍 {title}
      <WrapRegion>
        {content.map((data, index) => (
          <Region data={data} key={index} select={props.select} region={props.region} />
        ))}
      </WrapRegion>
    </>
  );
};

const LineBlock = styled.div`
  height: 1px;
  background: #e9ecf0;
  margin: 15px 0;
`;

const WrapRegion = styled.div`
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default RegionList;
