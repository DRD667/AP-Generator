const a = document.getElementById('a');
const l = document.getElementById('l');
const d = document.getElementById('d');
const btn = document.querySelector('button');
const result = document.querySelector('#resultSeries');
const resultB = document.querySelector('#resultSeriesSum');
const popup = document.querySelector('.popup');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const settingsbutton = document.querySelector('.material-icons-outlined');
const toggleBG = document.querySelector('.toggleBG');

toggleBG.addEventListener('click', function () {
  document.body.classList.toggle('bg');
});

settingsbutton.addEventListener('click', function () {
  modal.classList.toggle('show');
  overlay.classList.toggle('blur');
});

btn.addEventListener('click', function () {
  let k = 0;
  resultB.textContent = 'Sum : ';
  result.textContent = 'Series : ';
  for (i = Number(a.value); i <= Number(l.value); i += Number(d.value)) {
    result.textContent += `${i}, `;
    k++;
  }

  resultB.textContent = 'Sum: ' + (k / 2) * (Number(a.value) + Number(l.value));
  result.style.transform = 'scale(1)';
  resultB.style.transform = 'scale(1)';
  popup.style.display = 'none';
});
