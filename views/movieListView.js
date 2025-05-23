import { MovieController } from '../controllers/movieController.js';

export const MovieListView = {
  movieGrid: document.getElementById('movieGrid'),

  renderMovies(movies) {
    this.movieGrid.innerHTML = movies
      .map(
        movie => `
      <div 
        class="bg-gray-800 rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer movie-card"
        data-id="${movie.imdbID}"
      >
        <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=Sem+Imagem'}" 
             alt="${movie.Title}" 
             class="w-full h-64 object-cover" />
        <div class="p-2">
          <h3 class="font-semibold text-lg">${movie.Title}</h3>
          <p class="text-gray-400">${movie.Year} | ${movie.Type}</p>
        </div>
      </div>
    `
      )
      .join('');

    this.movieGrid.querySelectorAll('.movie-card').forEach(card => {
      card.addEventListener('click', () => {
        const imdbID = card.getAttribute('data-id');
        MovieController.showDetails(imdbID);
      });
    });
  },

  renderPagination(currentPage, totalPages) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    pagination.innerHTML = `
      <div class="flex justify-center gap-2 mt-6">
        <button class="px-3 py-1 bg-gray-700 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}" 
                ${currentPage > 1 ? `onclick="window.goToPage(${currentPage - 1})"` : ''}>
          Anterior
        </button>
        <span class="self-center">Página ${currentPage} de ${totalPages}</span>
        <button class="px-3 py-1 bg-gray-700 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}" 
                ${currentPage < totalPages ? `onclick="window.goToPage(${currentPage + 1})"` : ''}>
          Próxima
        </button>
      </div>
      <br/>
    `;
  },

  showMessage(message) {
    this.movieGrid.innerHTML = `
      <p class="text-center text-gray-400 text-lg p-4">${message}</p>
    `;
  },
};
