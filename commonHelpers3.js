import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      *//* empty css                            */const m=(e,i)=>new Promise((t,o)=>{setTimeout(()=>{i?t(e):o(e)},e)}).then(t=>{iziToast.success({title:"OK",message:`✅ Fulfilled promise in ${t}ms`,position:"topCenter"})}).catch(t=>{iziToast.error({message:`❌ Rejected promise in ${t}ms`,position:"center"})}),s=document.querySelector(".form");let r=!0;s.addEventListener("submit",e=>{e.preventDefault(),s.state.value==="rejected"&&(r=!1),m(s.delay.value,r),s.reset(),r=!0});
//# sourceMappingURL=commonHelpers3.js.map