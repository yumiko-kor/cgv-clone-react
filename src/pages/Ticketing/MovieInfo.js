import styled from 'styled-components';

const MovieInfo = props => {
  const { title, origin, image, average } = props.data;
  return (
    <>
      <InfoBlock>
        <MoviePoster src={image} />
        <InfoContent>
          <Title>{title}</Title>
          <Age>{origin}</Age>
          <Star>⭐️ {average}</Star>
        </InfoContent>
      </InfoBlock>
    </>
  );
};

const InfoBlock = styled.div`
  width: 400px;
  display: flex;
  margin: 50px auto;
  box-shadow: 1px 4px 4px 4px #d3d4d4;
  border-radius: 3px;
`;

const MoviePoster = styled.img`
  width: 150px;
`;

const InfoContent = styled.div`
  margin: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 900;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Age = styled.div`
  font-size: 10px;
`;

const Star = styled.div`
  margin-top: 15px;
`;

export default MovieInfo;
