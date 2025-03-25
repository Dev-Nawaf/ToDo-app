(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))n(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(c){if(c.ep)return;c.ep=!0;const o=s(c);fetch(c.href,o)}})();const L=document.querySelector(".DarkThemeToggle"),a=document.querySelector(".App"),f=document.querySelector(".TaskSearchBar__button"),p=document.querySelector(".TaskSearchBar__input"),d=document.querySelector(".TaskList__list"),k=document.querySelector(".TaskList__link"),_=()=>document.querySelectorAll(".TaskList__deleteIcon"),T=()=>document.querySelectorAll(".TaskList__checkbox"),g=()=>{a.classList.toggle("App--isDark"),r("darkModeFlag",a==null?void 0:a.classList.contains("App--isDark"))},i=t=>{const e=localStorage.getItem(t);return e?JSON.parse(e):!1},v=t=>{let e="";t.forEach(s=>{e+=`<li class="TaskList__taskContent${s.isCompleted?" TaskList__taskContent--isActive":""}">
      <div class="TaskList__checkbox" tabindex="0" role="button">
        <img class="TaskList__checkboxImg" src="./assets/icon-checkmark.svg" alt="checkmark" />
      </div>
      <div class="TaskList__valueContent">
        <p class="TaskList__value">
          ${s.value}
        </p>
        <img src="./assets/icon-basket.svg"
             class="TaskList__deleteIcon"
             alt="basket-icon"
        />
      </div>
    </li>`}),d.innerHTML=e,p.value=""},y=(t,e)=>{if(confirm("هل أنت متأكد من حذف المهمة؟")===!1)return;const n=i("tasks");n.splice(e,1),r("tasks",n),u(n)},m=(t,e)=>{const s=i("tasks");t.currentTarget.parentElement.classList.toggle("TaskList__taskContent--isActive"),s[e].isCompleted=!s[e].isCompleted,r("tasks",s)},h=t=>{t.preventDefault();const e=p.value;if(!e.trim())return;const s={value:e,isCompleted:!1},n=i("tasks")||[];n.push(s),r("tasks",n),u(n)},r=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},u=t=>{t!=null&&t.length?(v(t),b()):S()},E=()=>{i("darkModeFlag")&&g(),u(i("tasks"))},S=()=>{d.innerHTML=`<li class='EmptyList'>
      <img class='EmptyList__img' src="./assets/icon-empty.svg" alt="list is empty" />
      <p>قائمة المهام فارغة</p>
    </li>`},b=()=>{_().forEach((t,e)=>{t.addEventListener("click",s=>y(s,e))}),T().forEach((t,e)=>{t.addEventListener("click",s=>m(s,e)),t.addEventListener("keydown",s=>s.key==="Enter"&&m(s,e))})},C=()=>{k.addEventListener("click",()=>{d.classList.toggle("TaskList__list--hideCompleted"),k.classList.toggle("TaskList__link--isActive")}),f.addEventListener("click",h),L.addEventListener("click",g)};E();C();
