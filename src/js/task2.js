import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
const createPromise = (delay, good) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (good) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(delay => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'center',
      });
    });
};

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  let trueFalse = true;
  if (form.state.value === 'rejected') trueFalse = false;
  createPromise(form.delay.value, trueFalse);
  form.reset();
  trueFalse = true;
});
