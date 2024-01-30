import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie.js';

const apiKey = process.env.REACT_APP_API_KEY;

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`);
        setList(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <WrapMovieList>
        <Title>무비차트</Title>
        <BlackLine />
        <WrapList>
          {list.map((data, index) => (
            <Movie key={index} data={data} rank={index} />
          ))}
        </WrapList>
      </WrapMovieList>
    </>
  );
};

const WrapMovieList = styled.div`
  width: 1000px;
  margin: 30px auto;
`;
const WrapList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

const BlackLine = styled.div`
  height: 3px;
  background: #000000;
  margin: 20px 0;
`;

export default List;
