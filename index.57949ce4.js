const e={selector:document.querySelector(".breed-select"),loadingMsg:document.querySelector(".loader"),errorMsg:document.querySelector(".error"),infoArea:document.querySelector(".cat-info")};function t(){e.loadingMsg.classList.add("visually-hidden")}function r(r){return e.loadingMsg.classList.remove("visually-hidden"),fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_Im4lTddtLfXWJvTJ0UEzmfTfZxBa9IRsUTHPM8VN9bHpstdFlRrToKcY1B0ytkjX&breed_ids=${r}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{if(e&&e.length>0)return t(),e[0]})).catch((r=>{t(),e.errorMsg.classList.remove("visually-hidden"),console.error("Error:",r.name,r.message)}))}t(),e.selector.classList.add("visually-hidden"),e.errorMsg.classList.add("visually-hidden"),fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((r=>{t(),e.selector.classList.remove("visually-hidden"),e.errorMsg.classList.add("visually-hidden"),r.forEach((t=>{const r=document.createElement("option");r.value=t.id,r.textContent=t.name,e.selector.appendChild(r)}))})).catch((r=>{t(),e.errorMsg.classList.remove("visually-hidden"),console.error("Error:",r.name,r.message)})),e.selector.addEventListener("change",(()=>{r(e.selector.value).then((t=>{if(t){console.log(t);let r=document.createElement("img");r.src=t.url,r.style.maxWidth="400px";let s=document.createElement("h3");s.textContent=t.breeds[0].name;let n=document.createElement("p");n.textContent=t.breeds[0].description;let o=document.createElement("p");o.innerHTML="<b>Temperament: </b>"+t.breeds[0].temperament,e.infoArea.innerHTML="",e.infoArea.append(r,s,n,o)}}))}));
//# sourceMappingURL=index.57949ce4.js.map
