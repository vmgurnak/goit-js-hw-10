function e(e){const s=new URLSearchParams({api_key:"live_HuD36BnX5s258AGXtMMR0uWAMyepSbYGWcMf1LPyQgH6aXNrFHnd3wcm0ZeeLPb7",breed_ids:e});return fetch(`https://api.thecatapi.com/v1/images/search?${s}`).then((e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})).catch((e=>{console.log(e)}))}function s(e){const{name:s,description:c,temperament:t}=e[0].breeds[0],{url:n}=e[0];return e.map((e=>`<img src="${n}" alt="${s}" width = "" class="cat-img"><div class="cat-container">\n    <h2 class="cat-name">${s}</h2>\n    <p class="cat-descr">${c}</p>\n    <p class="cat-temper">Temperament: <span class="cat-temper-descr">${t}</span></p></div>`)).join("")}const c={breedSelect:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};function t(){c.loader.classList.replace("js-show","js-hidden")}function n(){c.error.classList.replace("js-hidden","js-show")}function r(){c.error.classList.replace("js-show","js-hidden")}(function(){const e=new URLSearchParams({api_key:"live_HuD36BnX5s258AGXtMMR0uWAMyepSbYGWcMf1LPyQgH6aXNrFHnd3wcm0ZeeLPb7"});return fetch(`https://api.thecatapi.com/v1/breeds?${e}`).then((e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})).catch((e=>{console.log(e)}))})().then((e=>{console.log(e),r(),t(),c.breedSelect.classList.replace("js-hidden","js-show"),c.breedSelect.innerHTML+=e.map((({id:e,name:s})=>`<option value="${e}">${s}</option>`)).join("")})).catch((e=>{n(),t(),c.breedSelect.classList.replace("js-show","js-hidden")})),c.breedSelect.addEventListener("change",(function(o){console.log(o.currentTarget.value);const a=o.currentTarget.value;c.loader.classList.replace("js-hidden","js-show"),c.catInfo.classList.replace("js-show","js-hidden"),e(a).then((e=>{console.log(e),c.catInfo.classList.replace("js-hidden","js-show"),t(),r(),c.catInfo.innerHTML=s(e)})).catch((e=>{n(),t()}))}));
//# sourceMappingURL=cat.11ecc350.js.map