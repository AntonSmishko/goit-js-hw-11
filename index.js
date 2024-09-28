import{S as f,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",m="46219346-243694830f7cca451bf7f7da0";function p(o){return fetch(`${u}?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true
`).then(t=>{if(!t.ok)throw new Error(`Error fetching images: ${t.status} ${t.statusText}`);return t.json()}).then(t=>t.hits)}function g(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:i,comments:l,downloads:c})=>`
            <li class="gallery-item">
                <a href="${n}" class="gallery-link">
                    <img src="${s}" alt="${e}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${r}</p>
                    <p class="info-item"><span>Views</span> ${i}</p>
                    <p class="info-item"><span>Comments</span> ${l}</p>
                    <p class="info-item"><span>Downloads</span> ${c}</p>
                </div>
            </li>
        `).join(""),console.log()}const d={form:document.querySelector(".form"),loader:document.querySelector(".loader")};d.form.addEventListener("submit",y);let h=new f(".gallery a");function y(o){o.preventDefault();const t=o.target.elements["search-area"].value.trim();if(t===""){a.error({position:"topRight",message:"Please try again! All fields is empty"});return}o.target.elements["search-area"].value="",p(t).then(s=>{if(s.length===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(s),h.refresh()}).catch(s=>{a.error({position:"topRight",message:s})})}
//# sourceMappingURL=index.js.map
