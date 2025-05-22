import { MovieController } from './controllers/movieController.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      MovieController.searchMovies(query, 1); // Sempre começa da página 1
    }
  });

  // Pressionar Enter também faz a busca
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchButton.click();
    }
  });

  // Permitir que os botões de paginação chamem o controlador
  window.goToPage = (page) => {
    MovieController.goToPage(page);
  };
});
