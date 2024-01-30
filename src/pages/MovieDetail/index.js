import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieInfo from './MovieInfo';
import DetailNavigation from './DetailNavigation';
import MovieContent from './MovieContent';
import { useParams } from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const [credit, setCredit] = useState([]);
  const [stillCut, setStillCut] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`);
        setMovie(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=ko-KR`,
        );
        setCredit(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`);
        setStillCut(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <WrapMovieDetail>
        <MovieInfo info={movie} credit={credit} />
        <DetailNavigation />
        <MovieContent info={movie} stillCut={stillCut} />
      </WrapMovieDetail>
    </>
  );
};

const WrapMovieDetail = styled.div`
  width: 1000px;
  margin: 30px auto;
`;

export default MovieDetail;
