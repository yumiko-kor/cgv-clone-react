import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const SelectBox = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`);
        setMovies(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const selectOption = e => {
    const movieData = JSON.parse(e.target.value);

    props.onSelect({
      title: movieData.title,
      image: IMAGE_URL + movieData.poster_path,
      average: movieData.vote_average / 2,
      origin: movieData.original_title,
    });
  };

  return (
    <WrapSelectBox>
      <form action="#">
        <SelectBoxBlock name="MovieBox" id="MovieBox" onChange={e => selectOption(e)}>
          <option value="" hidden>
            영화 선택하기
          </option>
          {movies.map((data, index) => (
            <option value={JSON.stringify(data)} key={index}>
              {data.title}
            </option>
          ))}
        </SelectBoxBlock>
      </form>
    </WrapSelectBox>
  );
};

const WrapSelectBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const SelectBoxBlock = styled.select`
  height: 35px;
  width: 180px;
  color: #7a7a7a;
  font-weight: bold;
  background: none;
  border: 1px solid #d8d8d8;
  padding-left: 3px;
`;

export default SelectBox;
