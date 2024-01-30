import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Movie from './Movie';

const apiKey = process.env.REACT_APP_API_KEY;

const List = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${props.select}?api_key=${apiKey}&language=ko-KR`,
        );
        setMovies(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [props.select]);

  return (
    <WrapList>
      {movies.map((data, index) => (
        <Movie key={index} data={data} index={index} check={props.check} />
      ))}
    </WrapList>
  );
};

const WrapList = styled.div`
  display: flex;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export default List;
