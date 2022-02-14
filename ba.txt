const a = document.getElementById('a');
const l = document.getElementById('l');
const d = document.getElementById('d');
const n = document.getElementById('n');
const tn = document.getElementById('tn');
const btn = document.querySelector('button');
const result = document.querySelector('#resultSeries');
const resultB = document.querySelector('#resultSeriesSum');
const resultC = document.querySelector('#resultSeriesNthTerm');
const resultD = document.querySelector('#resultSeriesWhichTerm');
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
  let nthTerm = 0;
  resultB.textContent = 'Sum : ';
  result.textContent = 'Series : ';

  if (Number(a.value) > Number(l.value)) {
    for (
      i = Number(a.value);
      i >= Number(l.value);
      i -= Math.abs(Number(d.value))
    ) {
      result.textContent += `${i}, `;
      k++;
      if (Number(tn.value) === i) {
        resultD.textContent = `${tn.value} is in Term No. ${k} `;
        resultD.style.transform = 'scale(1)';
      }

      if (Number(n.value) === i) console.log(i);
    }
  }
  if (Number(a.value) < Number(l.value)) {
    for (
      i = Number(a.value);
      i <= Number(l.value);
      i += Math.abs(Number(d.value))
    ) {
      result.textContent += `${i}, `;

      k++;
      if (Number(tn.value) === i) {
        resultD.textContent = `${tn.value} is in Term ${k} `;
        resultD.style.transform = 'scale(1)';
      }
    }
    if (Number(d.value) < 0) {
      alert('d taken as positive');
    }
  }
  2;
  resultB.textContent = 'Sum: ' + (k / 2) * (Number(a.value) + Number(l.value));
  nthTerm = Number(a.value) + (Number(n.value) - 1) * Number(d.value);
  resultC.textContent = `Term No.${n.value} is ${nthTerm}`;
  result.style.transform = 'scale(1)';
  resultB.style.transform = 'scale(1)';
  resultC.style.transform = 'scale(1)';
  popup.style.display = 'none';
});
