import { MovieService } from '../models/movieService.js';
import { MovieListView } from '../views/movieListView.js';
import { renderMovieDetails } from '../views/movieDetailView.js';

export const MovieController = (() => {
  let currentTitle = '';
  let currentPage = 1;
  let totalPages = 1;

  async function searchMovies(title, page = 1) {
    try {
      currentTitle = title;
      currentPage = page;

      const { movies, totalResults } = await MovieService.getMovies(title, page);

      if (movies.length === 0) {
        MovieListView.showMessage('Nenhum filme encontrado.');
      } else {
        totalPages = Math.ceil(totalResults / 10);
        MovieListView.renderMovies(movies);
        MovieListView.renderPagination(currentPage, totalPages);
      }

    } catch (error) {
      MovieListView.showMessage('Erro ao buscar filmes.');
      console.error(error);
    }
  }

  async function showDetails(imdbID) {
    try {
      const movie = await MovieService.getDetail(imdbID);
      renderMovieDetails(movie);
      
    } catch (error) {
      MovieListView.showMessage('Erro ao carregar detalhes do filme.');
      console.error(error);
    }
  }

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      searchMovies(currentTitle, page);
    }
  }

  return {
    searchMovies,
    showDetails,
    goToPage,
  };
})();
