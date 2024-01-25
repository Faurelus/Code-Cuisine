(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const E=()=>{document.addEventListener("mousedown",i=>{const o=document.getElementById("recipeModal"),c=document.querySelector("button[data-id]");!o.contains(i.target)&&i.target!==c&&(o.style.display="none")})},M=async()=>{const i="https://www.themealdb.com/api/json/v1/1/filter.php?a=Jamaican";try{const o=await fetch(i);if(!o.ok)throw new Error(`Bad Fetch responded with ${o.status}`);const c=await o.json();console.log(c),c.meals.forEach(n=>{const e=document.getElementById("food"),t=document.createElement("h3");t.innerHTML=n.strMeal;const r=document.createElement("img");r.src=n.strMealThumb,r.alt=n.strMeal;const l=document.createElement("button");l.dataset.id=n.idMeal,l.textContent="Recipe";const f=document.createElement("li");l.addEventListener("click",async u=>{if(e.contains(u.target)){const h=u.target.dataset.id;console.log(`Meal ID: ${h}`);const y=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${h}`;try{const a=await fetch(y);if(!a.ok)throw new Error(`Bad fetch ${a.status}`);const d=await a.json();console.log("Full Recipe:",d);const m=document.createElement("h2");m.innerHTML=d.meals[0].strMeal,m.style.fontFamily="Cursive";const p=document.createElement("p");p.innerHTML=d.meals[0].strInstructions,p.style.fontFamily="Cursive";const s=document.getElementById("recipeModal");s.innerHTML="",s.appendChild(m),s.appendChild(p),s.style.display="grid";const{strInstructions:w}=d.meals[0];console.log(`strInstructions: ${w}`);const g=u.target.getBoundingClientRect();s.style.top=`${g.top+window.scrollY}px`,s.style.left=`${g.left+window.scrollX}px`,s.style.display="grid"}catch(a){console.error(`${a.name},${a.message}`)}}}),f.append(t,r,l),e.appendChild(f)})}catch(o){console.error(`${o.name}: ${o.message}`)}};M();E();
