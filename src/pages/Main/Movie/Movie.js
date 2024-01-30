import styled from 'styled-components';
import eggGold from '../../../assets/images/eggGold.png';
import { Link } from 'react-router-dom';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Movie = props => {
  const { title, poster_path, vote_average, id } = props.data;

  return (
    <MovieBlock>
      <WrapPoster>
        <PosterStyle>
          <RankingFont>{props.index + 1}</RankingFont>
          <HoverButton color="#ffffff">
            <LinkStyle to={`/movies/${id}`} font="#848484">
              상세보기
            </LinkStyle>
          </HoverButton>
          <HoverButton color="#FB4357">
            <LinkStyle to={`/ticket`} state={props.data} font="#ffffff">
              예매하기
            </LinkStyle>
          </HoverButton>
        </PosterStyle>
        <MoviePoster src={IMAGE_URL + poster_path} />
      </WrapPoster>
      <MovieTitle> {title}</MovieTitle>
      <WrapMovieContent>
        <MovieLeftContent>
          <ContentImage src={eggGold} />
          {vote_average / 2}%
        </MovieLeftContent>
        <MovieRightContent>{vote_average}%</MovieRightContent>
      </WrapMovieContent>
    </MovieBlock>
  );
};
const MovieBlock = styled.div`
  display: block;
  text-align: center;
  margin-right: 30px;
`;

const WrapPoster = styled.div`
  position: relative;
`;

const PosterStyle = styled.div`
  position: absolute;
  width: 170px;
  height: 250px;
  border-radius: 10px;
  background: linear-gradient(to bottom, rgba(20, 20, 20, 0) 70%, rgba(20, 20, 20, 1) 100%);

  &:hover {
    background: #00000090;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > div {
      display: none;
    }

    & > button {
      display: block;
    }
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${props => props.font};
`;

const HoverButton = styled.button`
  margin: 3px auto;
  width: 130px;
  height: 30px;
  background: ${props => props.color};
  color: ${props => props.font};
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 2px;
  display: none;
  &:hover {
    opacity: 80%;
  }
`;

const RankingFont = styled.div`
  position: absolute;
  margin-left: 10px;
  bottom: -11px;
  color: white;
  font-weight: 500;
  font-style: italic;
  font-size: 50px;
`;

const MoviePoster = styled.img`
  width: 170px;
  height: 250px;
  border-radius: 10px;
`;

const MovieTitle = styled.div`
  margin-top: 14px;
  font-size: 18px;
  font-weight: bold;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 170px;
`;

const WrapMovieContent = styled.div`
  font-size: 14px;
  color: #444;
  width: 100px;
  margin: 9px auto 0 auto;
`;
const ContentImage = styled.img`
  width: 12px;
  margin-right: 3px;
`;
const MovieLeftContent = styled.div`
  float: left;
`;

const MovieRightContent = styled.div`
  float: right;
`;

export default Movie;
