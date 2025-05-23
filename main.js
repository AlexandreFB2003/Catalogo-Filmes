import { MovieController } from './controllers/movieController.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      MovieController.searchMovies(query, 1);
    }
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchButton.click();
    }
  });

  window.goToPage = (page) => {
    MovieController.goToPage(page);
  };
});
