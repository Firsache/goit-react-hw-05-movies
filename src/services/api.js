import axios from 'axios';

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
  const results = data.results.map(
    ({
      id,
      original_title,
      genres,
      overview,
      poster_path,
      release_date,
      vote_average,
    }) => ({
      id,
      original_title,
      genres,
      overview,
      poster_path,
      release_date,
      vote_average,
    })
  );
  return { results };
};

export const getCastInfo = async movieId => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/credits`, { params });
  const array = data.cast;
  const cast = array.map(({ id, original_name, profile_path, character }) => ({
    id,
    original_name,
    profile_path,
    character,
  }));
  return { cast };
};

export const getReviewsInfo = async movieId => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/reviews`, { params });
  const array = data.results;
  const reviews = array.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
  return { reviews };
};

// getTrendingFilms();
// getFilmByQuery();
// getDetailedFilmInfo();
// getCastInfo();
// getReviewsInfo();
