
if('serviceWorker' in navigator){
 window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=v34-mobile-master',{updateViaCache:'none'}).catch(()=>{}));
}
