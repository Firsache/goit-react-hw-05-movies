import axios from 'axios';
import defaultPhoto from '../img/default-photo.jpeg';
import { getGenres } from 'helpers/getGenres';

const API_KEY = '7075a5d5708cc9d9db094f2ee386024f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingFilms = async () => {
  const params = {
    api_key: API_KEY,
  };
  const { data } = await axios.get('/trending/movie/week', { params });
  const results = data.results.map(({ id, title }) => ({ id, title }));
  return { results };
};

export const getFilmByQuery = async q => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    query: q,
  };
  const { data } = await axios.get('/search/movie', { params });
  const results = data.results.map(({ id, original_title }) => ({
    id,
    original_title,
  }));
  return { results };
};

export const getDetailedFilmInfo = async movieId => {
  const params = {
    api_key: API_KEY,
  };
  const { data } = await axios.get(`/movie/${movieId}`, { params });
  const {
    id,
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = data;

  return {
    id,
    original_title,
    genres: genres.length ? getGenres(genres) : "Genres aren't given",
    overview,
    poster_path: poster_path
      ? 'https://image.tmdb.org/t/p/w300' + poster_path
      : defaultPhoto,
    release_date: new Date(release_date).getFullYear(),
    vote_average: Math.round(vote_average * 10),
  };
};

export const getCastInfo = async movieId => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/credits`, { params });
  const array = data.cast;
  return array;
};

export const getReviewsInfo = async movieId => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/reviews`, { params });

  const array = data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));

  return array;
};
