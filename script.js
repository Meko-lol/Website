const sidePanel = document.getElementById('side-panel');
const openBtn = document.getElementById('open-panel-btn');
const body = document.querySelector('body');
const appsBtn = document.querySelector('.apps-btn')
const appsList = document.getElementById('apps-list')


openBtn.addEventListener('click', () => {
  sidePanel.classList.toggle('open');
  body.style.paddingLeft = sidePanel.classList.contains('open') ? '7rem' : '';
});

appsBtn.addEventListener('click', () => {
  appsList.classList.toggle('open');
});

