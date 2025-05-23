export function showModal(contentHTML) {
    const existingModal = document.getElementById('genericModal');

    if (existingModal) {
      existingModal.remove();
    }
  
    const modal = document.createElement('div');

    modal.id = 'genericModal';
    modal.className = `
      fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4
    `;
  
    const modalContent = document.createElement('div');

    modalContent.className = `
      bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto shadow-lg relative
    `;
  
    const closeBtn = document.createElement('button');

    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Fechar modal');
    closeBtn.className = 'absolute top-3 right-3 text-white hover:text-red-600 text-2xl font-bold cursor-pointer';
    closeBtn.addEventListener('click', () => modal.remove());
  
    modalContent.innerHTML = contentHTML;
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  
    document.body.appendChild(modal);
  }

  export function renderHeader(title = 'Catálogo de Filmes') {
    const existingHeader = document.querySelector('header');
    if (existingHeader) existingHeader.remove();
  
    const header = document.createElement('header');
  
    header.className = `
      bg-gradient-to-r from-primary via-red-600 to-red-800
      py-8 px-6 shadow-md flex items-center justify-between
      max-w-full w-full
    `;
  
    const homeIconSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#F8F9FA" class="w-8 h-8 transition-transform duration-200 ease-in-out">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 9.75L12 3l9 6.75V21a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 21V9.75z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22V12h6v10"/>
      </svg>
    `;
  
    header.innerHTML = `
      <a href="../index.html" aria-label="Voltar ao Início" class="
        flex items-center gap-3 font-semibold text-2xl
        hover:text-gray-200 transition-colors duration-200 cursor-pointer select-none
        group
        text-[#F8F9FA]
      ">
        ${homeIconSVG}
        <span>Início</span>
      </a>
  
      <h1 class="text-5xl font-bold flex-1 text-center select-none text-[#F8F9FA]">${title}</h1>
  
      <div style="width: 90px;"></div>
    `;
  
    const link = header.querySelector('a');
    const svgIcon = link.querySelector('svg');
  
    link.addEventListener('mouseenter', () => {
      svgIcon.classList.add('scale-110');
    });
  
    link.addEventListener('mouseleave', () => {
      svgIcon.classList.remove('scale-110');
    });
  
    document.body.insertBefore(header, document.body.firstChild);
  }
  
  
  
  
  
  