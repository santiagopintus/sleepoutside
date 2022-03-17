var p=(e,n,t)=>new Promise((o,r)=>{var c=a=>{try{i(t.next(a))}catch(d){r(d)}},l=a=>{try{i(t.throw(a))}catch(d){r(d)}},i=a=>a.done?o(a.value):Promise.resolve(a.value).then(c,l);i((t=t.apply(e,n)).next())});function u(e){if(e.ok)return e.text();throw new Error("Bad Response")}export function qs(e){return document.querySelector(e)}export function getLocalStorage(e){return JSON.parse(localStorage.getItem(e))}export function setLocalStorage(e,n){localStorage.setItem(e,JSON.stringify(n))}export function setClick(e,n){qs(e).addEventListener("touchend",t=>{t.preventDefault(),n()}),qs(e).addEventListener("click",n)}export function getParam(e){const n=window.location.search,t=new URLSearchParams(n);return t.get(e)}export function renderListWithTemplate(e,n,t,o){t.forEach(r=>{const c=e.content.cloneNode(!0),l=o(c,r);n.appendChild(l)})}export function renderWithTemplate(e,n,t,o){let r=e.content.cloneNode(!0);o&&(r=o(r,t)),n.appendChild(r)}export function loadTemplate(e){return p(this,null,function*(){const n=yield fetch(e).then(u),t=document.createElement("template");return t.innerHTML=n,t})}export function loadHeaderFooter(){return p(this,null,function*(){const e=yield loadTemplate("../partials/header.html"),n=yield loadTemplate("../partials/footer.html"),t=document.getElementById("main-header"),o=document.getElementById("main-footer");renderWithTemplate(e,t),renderWithTemplate(n,o)})}export function formatExpirationDate(e){let n=String.fromCharCode(event.keyCode),t=event.keyCode,o=[8];if(o.indexOf(t)!==-1)return;event.target.value=event.target.value.replace(/^([1-9]\/|[2-9])$/g,"0$1/").replace(/^(0[1-9]|1[0-2])$/g,"$1/").replace(/^([0-1])([3-9])$/g,"0$1/$2").replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g,"$1/$2").replace(/^([0]+)\/|[0]+$/g,"0").replace(/[^\d\/]|^[\/]*$/g,"").replace(/\/\//g,"/")}
