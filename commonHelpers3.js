import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i}from"./assets/vendor-352a3fef.js";const m=(e,t)=>new Promise((r,o)=>{setTimeout(()=>{t?r(e):o(e)},e)}).then(r=>{i.success({title:"OK",message:`✅ Fulfilled promise in ${r}ms`,position:"topCenter"})}).catch(r=>{i.error({message:`❌ Rejected promise in ${r}ms`,position:"center"})}),s=document.querySelector(".form");s.addEventListener("submit",e=>{e.preventDefault();let t=!0;s.state.value==="rejected"&&(t=!1),m(s.delay.value,t),s.reset(),t=!0});
//# sourceMappingURL=commonHelpers3.js.map
