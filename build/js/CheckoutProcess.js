var l=(r,e,t)=>new Promise((o,s)=>{var n=i=>{try{a(t.next(i))}catch(c){s(c)}},h=i=>{try{a(t.throw(i))}catch(c){s(c)}},a=i=>i.done?o(i.value):Promise.resolve(i.value).then(n,h);a((t=t.apply(r,e)).next())});import{getLocalStorage as m}from"./utils.js";import u from"./ExternalServices.js";const p=new u;function d(r){const e=new FormData(r),t={};return e.forEach(function(o,s){t[s]=o}),t}function T(r){const e=r.map(t=>(console.log(t),{id:t.Id,price:t.FinalPrice,name:t.Name,quantity:1}));return e}export default class g{constructor(e,t){this.key=e,this.outputSelector=t,this.list=[],this.itemTotal=0,this.shipping=0,this.tax=0,this.orderTotal=0}init(){this.list=m(this.key),this.calculateItemSummary()}calculateItemSummary(){const e=document.getElementById("cartTotal"),t=document.getElementById("num-items");t.innerText=this.list.length;const o=this.list.map(s=>s.FinalPrice);this.itemTotal=o.reduce((s,n)=>s+n),e.innerText="$"+this.itemTotal}calculateOrdertotal(){this.shipping=10+(this.list.length-1)*2,this.tax=(this.itemTotal*.06).toFixed(2),this.orderTotal=(parseFloat(this.itemTotal)+parseFloat(this.shipping)+parseFloat(this.tax)).toFixed(2),this.displayOrderTotals()}displayOrderTotals(){const e=document.querySelector(this.outputSelector+" #shipping"),t=document.querySelector(this.outputSelector+" #tax"),o=document.querySelector(this.outputSelector+" #orderTotal");e.innerText="$"+this.shipping,t.innerText="$"+this.tax,o.innerText="$"+this.orderTotal}checkout(){return l(this,null,function*(){const e=document.forms.checkout,t=d(e);t.orderDate=new Date,t.orderTotal=this.orderTotal,t.tax=this.tax,t.shipping=this.shipping,t.items=T(this.list),console.log(t);try{const o=yield p.checkout(t);console.log(o)}catch(o){console.log(o)}})}}
