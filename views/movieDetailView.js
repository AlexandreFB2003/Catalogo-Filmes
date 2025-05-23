import { showModal } from './components.js';

export function renderMovieDetails(movie) {
    const contentHTML = `
    <div class="flex flex-col md:flex-row p-6 gap-6">
      <img 
        src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}" 
        alt="${movie.Title}" 
        class="w-full md:w-64 rounded shadow object-cover max-h-[450px]"
      />
      <div class="flex-1 text-white flex flex-col">
        <h2 class="text-3xl font-bold mb-4">${movie.Title} (${movie.Year})</h2>
        <p class="mb-2"><strong>Gênero:</strong> ${movie.Genre}</p>
        <p class="mb-2"><strong>Duração:</strong> ${movie.Runtime}</p>
        <p class="mb-2"><strong>Diretor:</strong> ${movie.Director}</p>
        <p class="mb-2"><strong>Atores:</strong> ${movie.Actors}</p>
        <div class="mb-4 border border-gray-600 rounded p-4 max-h-40 overflow-auto bg-gray-800">
          <strong>Sinopse:</strong> <br/>
          <span>${movie.Plot}</span>
        </div>
        <p class="text-sm text-gray-400"><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
      </div>
    </div>
  `;

  showModal(contentHTML);
}
