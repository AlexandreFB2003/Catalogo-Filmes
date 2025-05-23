import { API_KEY, BASE_URL } from '../data/config.js';

export const MovieService = {
  async getMovies(title, page = 1) {

    const url = 
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(title)}&type=movie&page=${page}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Erro ao acessar a API');
    }

    const data = await response.json();

    if (data.Response === 'False') {
      return { movies: [], totalResults: 0 };
    }

    return { movies: data.Search, totalResults: parseInt(data.totalResults) };
  },

  async getDetail(imdbID) {

    const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Erro ao acessar a API');
    }

    const data = await response.json();

    if (data.Response === 'False') {
      throw new Error('Filme não encontrado');
    }
    
    return data;
  }
};
