'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    try {
      const div = document.createElement('div');

      div.className = 'message';

      resolve(div);
    } catch (err) {
      reject(err);
    }
  });
});

promise1
  .then((div) => {
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  })
  .catch((err) => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = `Promise failed: ${err}`;
    document.body.appendChild(div);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error), 3000);
});

promise2
  .then(() => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  })
  .catch(() => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  });
