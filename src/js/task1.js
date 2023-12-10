import flatpickr from 'flatpickr';

// function
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);

  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// ===============================================
function padStartedNumber(n) {
  return `${n}`.padStart(2, 0);
}
// ===============================================

const btnStartEl = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const timerEl = document.querySelector('#datetime-picker');

const timerSeting = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < new Date().getTime()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topCenter',
        backgroundColor: 'red',
        messageColor: '#fff',
      });
    } else {
      btnStartEl.classList.toggle('btn-inactive');
      btnStartEl.addEventListener('click', () => {
        const myInterval = setInterval(() => {
          const time = convertMs(
            selectedDates[0].getTime() - new Date().getTime()
          );
          dataDays.textContent = padStartedNumber(time.days);
          dataHours.textContent = padStartedNumber(time.hours);
          dataMinutes.textContent = padStartedNumber(time.minutes);
          dataSeconds.textContent = padStartedNumber(time.seconds);
          if (
            dataDays.textContent === '00' &&
            dataHours.textContent === '00' &&
            dataMinutes.textContent === '00' &&
            dataSeconds.textContent === '00'
          ) {
            clearInterval(myInterval);
          }
        }, 1000);
        btnStartEl.classList.toggle('btn-inactive');
        timerEl.classList.toggle('btn-inactive');
      });
    }
  },
};
const timer = flatpickr('#datetime-picker', timerSeting);
