import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieInfo = props => {
  const {
    title,
    poster_path,
    original_title,
    tagline,
    vote_average,
    genres,
    production_countries,
    runtime,
    release_date,
  } = props.info;

  const { crew } = props.credit;
  const director = [];

  crew && crew.map(crews => crews.known_for_department === 'Directing' && director.push(crews.name));

  return (
    <>
      <WrapInfoBlock>
        <MoviePoster src={IMAGE_URL + poster_path} />
        <WrapInfo>
          <Title>{title}</Title>
          <SubTitle>{original_title}</SubTitle>
          <RateBlock>
            예매율<TicketRate>{vote_average}</TicketRate>%
            <ColumnBlock />
            <TicketRate>{tagline}</TicketRate>
          </RateBlock>
          <LineBlock />
          <WrapContent>
            감독 : {director[0]} / 배우 :{' '}
            {crew && crew.map(crews => (crews.known_for_department === 'Acting' ? crews.name + ' ' : null))}
            <br />
            장르 : {genres && genres[0].name} / 기본 : {production_countries && production_countries[0].name}, {runtime}
            분
            <br />
            개봉 : {release_date}
          </WrapContent>
          <ButtonBlock color="#ffffff" font="#000000" border="#000000">
            프리에그
          </ButtonBlock>
          <Link to={`/ticket`} state={props.info}>
            <ButtonBlock color="#FB4357" font="#ffffff" border="#FB4357">
              예매하기
            </ButtonBlock>
          </Link>
        </WrapInfo>
      </WrapInfoBlock>
    </>
  );
};

const Title = styled.div`
  font-weight: bold;
  font-size: 23px;
`;

const SubTitle = styled.div`
  font-size: 12px;
  color: #666666;
`;

const RateBlock = styled.div`
  display: flex;
  margin: 20px 0 8px 0;
  font-size: 14px;
`;

const ColumnBlock = styled.div`
  width: 1px;
  height: 13px;
  background-color: #e4e4e4;
  margin: auto 5px;
`;

const TicketRate = styled.div`
  font-size: 13px;
  margin-left: 5px;
`;

const LineBlock = styled.div`
  height: 1px;
  background-color: #e4e4e4;
`;

const WrapContent = styled.div`
  font-size: 13px;
  margin: 15px 0;
  line-height: 20px;
  font-weight: 600;
`;

const WrapInfoBlock = styled.div`
  display: flex;
`;

const WrapInfo = styled.div`
  display: block;
  margin: 0 30px;
`;

const MoviePoster = styled.img`
  width: 170px;
`;

const ButtonBlock = styled.button`
  margin-right: 3px;
  width: 100px;
  height: 30px;
  background: ${props => props.color};
  color: ${props => props.font};
  font-weight: bold;
  text-align: center;
  border: 1px solid ${props => props.border};
  border-radius: 2px;
  margin-top: 10px;
`;

export default MovieInfo;
