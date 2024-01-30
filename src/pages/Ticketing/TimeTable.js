import styled from 'styled-components';

const TimeTable = props => {
  return (
    <>
      {props.data === props.timeline ? (
        <ClickedRegion onClick={() => props.select(props.data)}>{props.data}</ClickedRegion>
      ) : (
        <WrapRegion
          onClick={() => {
            props.select(props.data);
            props.onSetFilled(true);
          }}
        >
          {props.data}
        </WrapRegion>
      )}
    </>
  );
};

const WrapRegion = styled.button`
  display: block;
  width: 200px;
  background-color: #e9ecf1;
  border-radius: 5px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-top: 4px;
  border: none;

  &:hover {
    background-color: #fe3346;
    opacity: 1;
    color: white;
  }
`;

const ClickedRegion = styled.button`
  display: block;
  width: 200px;
  background-color: #fe3346;
  border-radius: 5px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-top: 4px;
  border: none;
  color: white;
`;

export default TimeTable;
