!function(){var e={selector:document.querySelector(".breed-select"),loadingMsg:document.querySelector(".loader"),errorMsg:document.querySelector(".error"),infoArea:document.querySelector(".cat-info"),loaderText:document.querySelector(".loader-text")};function t(){e.loadingMsg.classList.add("visually-hidden")}function r(){e.loadingMsg.classList.remove("visually-hidden")}function n(n){return r(),e.loaderText.classList.remove("visually-hidden"),fetch("https://api.thecatapi.com/v1/images/search?api_key=".concat("live_Im4lTddtLfXWJvTJ0UEzmfTfZxBa9IRsUTHPM8VN9bHpstdFlRrToKcY1B0ytkjX","&breed_ids=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(r){if(r&&r.length>0)return t(),e.loaderText.classList.add("visually-hidden"),r[0]})).catch((function(r){t(),e.loaderText.classList.add("visually-hidden"),e.errorMsg.classList.remove("visually-hidden"),console.error("Error:",r.name,r.message)}))}r(),e.selector.classList.add("visually-hidden"),e.errorMsg.classList.add("visually-hidden"),e.loaderText.classList.remove("visually-hidden"),fetch("https://api.thecatapi.com/v1/breeds").then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(r){t(),e.selector.classList.remove("visually-hidden"),e.errorMsg.classList.add("visually-hidden"),e.loaderText.classList.add("visually-hidden"),r.forEach((function(t){var r=document.createElement("option");r.value=t.id,r.textContent=t.name,e.selector.appendChild(r)}))})).catch((function(r){t(),e.errorMsg.classList.remove("visually-hidden"),console.error("Error:",r.name,r.message)})),e.selector.addEventListener("change",(function(){n(e.selector.value).then((function(t){if(t){console.log(t);var r=document.createElement("img");r.src=t.url,r.style.maxWidth="560px";var n=document.createElement("h2");n.textContent=t.breeds[0].name;var s=document.createElement("p");s.textContent=t.breeds[0].description;var a=document.createElement("p");a.innerHTML="<b>Temperament 🐱: </b>"+t.breeds[0].temperament;var o=document.createElement("p");o.innerHTML="<b>Origin 🌎: </b>"+t.breeds[0].origin;var i=document.createElement("p");i.innerHTML="<b>Weight 🐈: </b>"+t.breeds[0].weight.imperial,e.infoArea.innerHTML="",e.infoArea.append(r,n,s,a,o,i)}}))}))}();
//# sourceMappingURL=index.04379e9d.js.map
