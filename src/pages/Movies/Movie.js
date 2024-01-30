import styled from 'styled-components';
import eggGold from '../../assets/images/eggGold.png';
import { Link } from 'react-router-dom';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Movie = props => {
  const { title, id, poster_path, vote_average, vote_count, release_date } = props.data;

  return (
    <MovieBlock>
      <RankBlock color={props.rank + 1 > 3 ? '#333333' : '#fa4357'}>No.{props.rank + 1}</RankBlock>
      <Link to={`/movies/${id}`}>
        <WrapPoster>
          <PosterStyle />
          <MoviePoster src={IMAGE_URL + poster_path} />
        </WrapPoster>
      </Link>
      <MovieTitle> {title}</MovieTitle>
      <WrapMovieContent>
        예매율 {vote_average}%
        <ContentImage src={eggGold} />
        {vote_count}
        <br />
        {release_date} 개봉
      </WrapMovieContent>
      <Link to={`/ticket`} state={props.data}>
        <HoverButton color="#FB4357" font="#ffffff">
          예매하기
        </HoverButton>
      </Link>
    </MovieBlock>
  );
};
const MovieBlock = styled.div`
  display: block;
  margin-bottom: 50px;
`;

const RankBlock = styled.div`
  background: ${props => props.color};
  color: white;
  text-align: center;
  width: 190px;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 4px;
`;

const WrapPoster = styled.div`
  position: relative;
`;

const PosterStyle = styled.div`
  position: absolute;
  width: 190px;
  height: 250px;
  background: linear-gradient(to bottom, rgba(20, 20, 20, 0) 70%, rgba(20, 20, 20, 1) 100%);
`;

const MoviePoster = styled.img`
  margin-right: 60px;
  width: 190px;
  height: 250px;
`;

const MovieTitle = styled.div`
  width: 190px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 14px;
  font-size: 18px;
  font-weight: bold;
  color: #222;
`;

const WrapMovieContent = styled.div`
  font-size: 14px;
  color: #444;
  margin: 9px auto 0 auto;
`;

const ContentImage = styled.img`
  width: 20px;
  margin-right: 3px;
`;

const HoverButton = styled.button`
  margin: 3px auto;
  width: 100px;
  height: 30px;
  background: ${props => props.color};
  color: ${props => props.font};
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 2px;
  margin-top: 10px;
`;

export default Movie;
