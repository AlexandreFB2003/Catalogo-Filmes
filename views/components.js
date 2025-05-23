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
  