const TARGET = new Date("2026-09-24T00:00:00+05:30");

const $ = (id) => document.getElementById(id);
const countdownGrid = $("countdownGrid");
const birthdayReveal = $("birthdayReveal");

function pad(n){ return String(Math.max(0,n)).padStart(2,"0"); }

function celebrate(){
  countdownGrid.classList.add("hidden");
  birthdayReveal.classList.remove("hidden");
  for(let i=0;i<28;i++) spawnHeart();
  for(let i=0;i<36;i++) spawnSpark();
}

function updateCountdown(){
  const diff = TARGET - Date.now();
  if(diff <= 0){
    $("days").textContent="00";
    $("hours").textContent="00";
    $("minutes").textContent="00";
    $("seconds").textContent="00";
    if(!birthdayReveal.classList.contains("hidden")) return;
    celebrate();
    return;
  }
  const total = Math.floor(diff/1000);
  const days = Math.floor(total/86400);
  const hours = Math.floor((total%86400)/3600);
  const minutes = Math.floor((total%3600)/60);
  const seconds = total%60;
  $("days").textContent=pad(days);
  $("hours").textContent=pad(hours);
  $("minutes").textContent=pad(minutes);
  $("seconds").textContent=pad(seconds);
}
updateCountdown();
setInterval(updateCountdown,1000);

document.querySelectorAll("[data-scroll]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelector(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"});
  });
});

function spawnSpark(){
  const s=document.createElement("span");
  s.className="spark";
  s.style.left=Math.random()*100+"%";
  s.style.animationDuration=(5+Math.random()*8)+"s";
  s.style.animationDelay=(-Math.random()*6)+"s";
  document.getElementById("particles").appendChild(s);
  setTimeout(()=>s.remove(),14000);
}
for(let i=0;i<18;i++)spawnSpark();

function spawnHeart(){
  const h=document.createElement("span");
  h.className="heart-particle";
  h.textContent=Math.random()>.35?"❤":"✦";
  h.style.left=(10+Math.random()*80)+"%";
  h.style.bottom=(5+Math.random()*15)+"%";
  h.style.setProperty("--drift",(Math.random()*160-80)+"px");
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),3200);
}

$("musicButton").addEventListener("click",()=>{
  const wrap=$("playerWrap");
  wrap.classList.remove("hidden");
  wrap.scrollIntoView({behavior:"smooth",block:"center"});
  $("musicButton").textContent="Soundtrack is ready 🎵";
});

$("wishButton").addEventListener("click",()=>{
  $("wishMessage").textContent="May this year bring your wishes closer to reality. ✨";
  for(let i=0;i<16;i++)spawnSpark();
  const flash=document.createElement("div");
  flash.style.cssText="position:fixed;inset:0;z-index:25;pointer-events:none;background:radial-gradient(circle at 70% 30%,rgba(255,239,174,.5),transparent 18%);animation:fadeFlash 1.2s ease forwards";
  document.body.appendChild(flash);
  setTimeout(()=>flash.remove(),1300);
});

$("surpriseButton").addEventListener("click",()=>{
  $("surpriseButton").classList.add("hidden");
  $("surpriseTitle").classList.add("hidden");
  $("surpriseContent").classList.remove("hidden");
  for(let i=0;i<45;i++)spawnHeart();
  for(let i=0;i<45;i++)spawnSpark();
});

let secretClicks=0;
$("secretStar").addEventListener("click",()=>{
  secretClicks++;
  if(secretClicks>=5){
    $("secretMessage").textContent="✨ You found a little secret. Some surprises are meant to be discovered.";
    secretClicks=0;
  }
});

const style=document.createElement("style");
style.textContent="@keyframes fadeFlash{from{opacity:1}to{opacity:0}}";
document.head.appendChild(style);
