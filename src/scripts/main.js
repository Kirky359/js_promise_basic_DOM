'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.className = 'message';
    resolve(div);
  });
});

promise1.then((div) => {
  div.textContent = 'Promise was resolved!';

  const body = document.querySelector('body');

  body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  setTimeout(reject(div), 3000);
});

promise2.catch((div) => {
  const body = document.querySelector('body');

  body.appendChild(div);
});
