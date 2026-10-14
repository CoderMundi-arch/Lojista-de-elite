// Convite do grupo fornecido pelo responsável pela página.
const GROUP_URL = 'https://chat.whatsapp.com/CSwqQOgPBHI29Ozx27Ki1I';
document.querySelectorAll('[data-group]').forEach(link => {
  if (GROUP_URL) {
    link.href = GROUP_URL;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.addEventListener('click', () => {
      document.getElementById('link-status').hidden = false;
    });
  }
});
