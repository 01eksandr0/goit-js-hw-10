import"./assets/iziToast-e5212ee8-a13b3ba0.js";/* empty css                      */function y(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:m}}function n(t){return`${t}`.padStart(2,0)}const o=document.querySelector("[data-start]"),r=document.querySelector("[data-days]"),s=document.querySelector("[data-hours]"),c=document.querySelector("[data-minutes]"),i=document.querySelector("[data-seconds]"),h=document.querySelector("#datetime-picker"),f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()<new Date().getTime()?iziToast.error({message:"Please choose a date in the future",position:"topCenter",backgroundColor:"red",messageColor:"#fff"}):(o.classList.toggle("btn-inactive"),o.addEventListener("click",()=>{const a=setInterval(()=>{const e=y(t[0].getTime()-new Date().getTime());r.textContent=n(e.days),s.textContent=n(e.hours),c.textContent=n(e.minutes),i.textContent=n(e.seconds),r.textContent==="00"&&s.textContent==="00"&&c.textContent==="00"&&i.textContent==="00"&&clearInterval(a)},1e3);o.classList.toggle("btn-inactive"),h.classList.toggle("btn-inactive")}))}};flatpickr("#datetime-picker",f);
//# sourceMappingURL=commonHelpers2.js.map
