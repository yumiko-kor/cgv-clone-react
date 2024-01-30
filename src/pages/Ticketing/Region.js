import styled from 'styled-components';

const Region = props => {
  return (
    <>
      {props.data === props.region ? (
        <ClickedRegion onClick={() => props.select(props.data)}>{props.data}</ClickedRegion>
      ) : (
        <WrapRegion onClick={() => props.select(props.data)}>{props.data}</WrapRegion>
      )}
    </>
  );
};

const WrapRegion = styled.button`
  margin: 2px;
  background-color: #e9ecf1;
  border: none;
  border-radius: 5px;
  text-align: center;
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin-top: 4px;

  &:hover {
    background-color: #fe3346;
    opacity: 1;
    color: white;
  }
`;

const ClickedRegion = styled.button`
  margin: 2px;
  background-color: #fe3346;
  border: none;
  border-radius: 5px;
  text-align: center;
  width: 60px;
  height: 30px;
  line-height: 30px;
  margin-top: 4px;
  color: white;
`;

export default Region;
