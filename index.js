import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",u="46219346-243694830f7cca451bf7f7da0";function p(o){return fetch(`${f}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true
`).then(t=>{if(!t.ok)throw new Error(`Error fetching images: ${t.status} ${t.statusText}`);return t.json()}).then(t=>t.hits)}function m(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:r,views:s,comments:l,downloads:c})=>`
            <li class="gallery-item">
                <a href="${n}" class="gallery-link">
                    <img src="${i}" alt="${e}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${r}</p>
                    <p class="info-item"><span>Views</span> ${s}</p>
                    <p class="info-item"><span>Comments</span> ${l}</p>
                    <p class="info-item"><span>Downloads</span> ${c}</p>
                </div>
            </li>
        `).join(""),console.log()}const d={form:document.querySelector(".form")};d.form.addEventListener("submit",g);function g(o){o.preventDefault();const t=o.target.elements["search-area"].value.trim();if(t===""){a.error({position:"topRight",message:"Please try again! All fields is empty"});return}p(t).then(i=>{if(i.length===0){a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}m(i)}).catch().finally()}
//# sourceMappingURL=index.js.map
