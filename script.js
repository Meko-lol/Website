const sidePanel = document.getElementById('side-panel');
const openBtn = document.getElementById('open-panel-btn');
const body = document.querySelector('body');

openBtn.addEventListener('click', () => {
  sidePanel.classList.toggle('open');
  body.style.paddingLeft = sidePanel.classList.contains('open') ? '7rem' : '';
});
