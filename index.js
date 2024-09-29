import{S as f,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",m="46219346-243694830f7cca451bf7f7da0";function p(i){return fetch(`${u}?key=${m}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true
`).then(t=>{if(!t.ok)throw s.list.innerHTML="",new Error(`Error fetching images: ${t.status} ${t.statusText}`);return t.json()}).then(t=>t.hits)}document.querySelector(".gallery");function g(i){if(i.length===0){s.list.innerHTML="";return}s.list.innerHTML=i.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:n,downloads:c})=>`
            <li class="gallery-item">
                <a href="${o}" class="gallery-link">
                    <img src="${t}" alt="${a}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${e}</p>
                    <p class="info-item"><span>Views</span> ${r}</p>
                    <p class="info-item"><span>Comments</span> ${n}</p>
                    <p class="info-item"><span>Downloads</span> ${c}</p>
                </div>
            </li>
        `).join(""),console.log()}const s={form:document.querySelector(".form"),loader:document.querySelector(".loader"),list:document.querySelector(".gallery")};s.form.addEventListener("submit",h);let d=new f(".gallery a");function h(i){i.preventDefault(),s.list.innerHTML="";const t=i.target.elements["search-area"].value.trim();if(t===""){l.error({position:"topRight",message:"Please try again! All fields is empty"});return}i.target.elements["search-area"].value="",p(t).then(o=>{if(o.length===0){s.list.innerHTML="",l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(o),d.refresh()}).catch(o=>{s.list.innerHTML="",l.error({position:"topRight",message:o})})}
//# sourceMappingURL=index.js.map
