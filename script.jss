/* ==========================================================
   LUXURY VALIMA INVITATION
   Part 1
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

const loader = document.getElementById("loader");
const doorScreen = document.getElementById("doorScreen");
const enterButton = document.getElementById("enterButton");
const main = document.getElementById("main");
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");

let musicPlaying = false;

/* -----------------------------
   Hide Loader
----------------------------- */

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},800);

},1200);

});

/* -----------------------------
   Enter Animation
----------------------------- */

enterButton.addEventListener("click",()=>{

leftDoor.classList.add("open");

rightDoor.classList.add("open");

setTimeout(()=>{

doorScreen.style.opacity="0";

main.classList.add("show");

doorScreen.style.pointerEvents="none";

},1800);

music.play();

musicPlaying=true;

musicButton.innerHTML="🔊";

});

/* -----------------------------
   Music Toggle
----------------------------- */

musicButton.addEventListener("click",()=>{

if(musicPlaying){

music.pause();

musicButton.innerHTML="🎻";

}else{

music.play();

musicButton.innerHTML="🔊";

}

musicPlaying=!musicPlaying;

});

/* -----------------------------
   Countdown
----------------------------- */

const targetDate=new Date("September 5, 2026 20:00:00").getTime();

function updateCountdown(){

const now=new Date().getTime();

const distance=targetDate-now;

if(distance<=0){

document.getElementById("days").innerHTML="00";
document.getElementById("hours").innerHTML="00";
document.getElementById("minutes").innerHTML="00";
document.getElementById("seconds").innerHTML="00";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=String(days).padStart(2,"0");
document.getElementById("hours").innerHTML=String(hours).padStart(2,"0");
document.getElementById("minutes").innerHTML=String(minutes).padStart(2,"0");
document.getElementById("seconds").innerHTML=String(seconds).padStart(2,"0");

}

setInterval(updateCountdown,1000);

updateCountdown();

/* -----------------------------
   Copy Address
----------------------------- */

const copyButton=document.getElementById("copyAddress");

if(copyButton){

copyButton.addEventListener("click",()=>{

const address="Classic Banquet Hall, No.831, 4th Block, HBR Layout, Bangalore 560043";

navigator.clipboard.writeText(address);

copyButton.innerHTML="Copied ✓";

setTimeout(()=>{

copyButton.innerHTML="Copy Address";

},2000);

});

}

/* -----------------------------
   Floating Particles
----------------------------- */

const particles=document.getElementById("particles");

for(let i=0;i<80;i++){

const p=document.createElement("div");

p.className="particle";

const size=Math.random()*6+2;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(8+Math.random()*12)+"s";

p.style.animationDelay=Math.random()*12+"s";

particles.appendChild(p);

}

});

/* ==========================================================
   Part 2
   Scroll Animations + Flower Petals + Confetti
========================================================== */

/* Fade Up Animation */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});

/* ==========================================================
   Flower Petals
========================================================== */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(8+Math.random()*6)+"s";

petal.style.opacity=Math.random();

petal.style.transform=`scale(${0.5+Math.random()})`;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},15000);

}

setInterval(createPetal,500);

/* ==========================================================
   Confetti
========================================================== */

function launchConfetti(){

for(let i=0;i<150;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.background=[
"#C7A35D",
"#F8E7A2",
"#FFFFFF",
"#F5E8D4"
][Math.floor(Math.random()*4)];

confetti.style.animationDuration=(3+Math.random()*4)+"s";

confetti.style.transform=`rotate(${Math.random()*360}deg)`;

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},7000);

}

}

/* Launch confetti when invitation opens */

const enter=document.getElementById("enterButton");

if(enter){

enter.addEventListener("click",()=>{

setTimeout(()=>{

launchConfetti();

},1800);

});

}

/* ==========================================================
   Smooth Hero Glow
========================================================== */

setInterval(()=>{

document.querySelector(".hero").classList.toggle("hero-bright");

},6000);
/* Flower Petals */

.petal{

position:fixed;

top:-40px;

width:20px;

height:20px;

background:radial-gradient(circle,#FFF8F1,#E6C98D);

border-radius:70% 30% 70% 30%;

pointer-events:none;

z-index:3;

animation:petalFall linear forwards;

}

@keyframes petalFall{

0%{

transform:translateY(-50px) rotate(0deg);

}

100%{

transform:translateY(110vh) rotate(720deg);

}

}

/* Confetti */

.confetti{

position:fixed;

width:10px;

height:18px;

z-index:9999;

animation:confettiFall linear forwards;

}

@keyframes confettiFall{

0%{

transform:translateY(-20px) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(110vh) rotate(720deg);

opacity:0;

}

}

.hero-bright{

filter:brightness(1.05);

transition:2s;

}
/* ==========================================================
   LUXURY VALIMA INVITATION
   PART 3
========================================================== */

/* ===========================
   Floating Light Effect
=========================== */

const hero = document.querySelector(".hero");

let glow = 0;

setInterval(() => {

    glow += 0.01;

    hero.style.backgroundPosition =
        `${Math.sin(glow) * 20}px ${Math.cos(glow) * 20}px`;

}, 40);

/* ===========================
   Music Fade In
=========================== */

const musicPlayer = document.getElementById("music");

musicPlayer.volume = 0;

function fadeMusic() {

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if (volume >= 0.4) {

            volume = 0.4;

            clearInterval(fade);

        }

        musicPlayer.volume = volume;

    }, 150);

}

/* Call after entering */

document.getElementById("enterButton").addEventListener("click", () => {

    fadeMusic();

});

/* ===========================
   Floating Gold Dust
=========================== */

function createDust() {

    const dust = document.createElement("div");

    dust.className = "goldDust";

    dust.style.left = Math.random() * window.innerWidth + "px";

    dust.style.top = window.innerHeight + "px";

    const size = Math.random() * 5 + 2;

    dust.style.width = size + "px";

    dust.style.height = size + "px";

    dust.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    document.body.appendChild(dust);

    setTimeout(() => {

        dust.remove();

    }, 12000);

}

setInterval(createDust, 250);

/* ===========================
   Mouse Glow
=========================== */

const glowCircle = document.createElement("div");

glowCircle.id = "mouseGlow";

document.body.appendChild(glowCircle);

document.addEventListener("mousemove", e => {

    glowCircle.style.left = e.clientX + "px";

    glowCircle.style.top = e.clientY + "px";

});

/* ===========================
   Hero Fade
=========================== */

window.addEventListener("scroll", () => {

    const y = window.scrollY;

    hero.style.opacity = 1 - y / 1200;

});

/* ===========================
   Scroll Progress Bar
=========================== */

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scroll =

        document.documentElement.scrollTop;

    const height =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    progress.style.width =

        (scroll / height) * 100 + "%";

});

/* ===========================
   Gold Dust
=========================== */

.goldDust{

position:fixed;

border-radius:50%;

background:#F7E3A2;

box-shadow:0 0 12px #F9D77E;

pointer-events:none;

animation:goldDust 10s linear forwards;

z-index:3;

}

@keyframes goldDust{

0%{

transform:translateY(0) scale(.2);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:translateY(-120vh) scale(1.8);

opacity:0;

}

}

/* ===========================
   Mouse Glow
=========================== */

#mouseGlow{

position:fixed;

width:120px;

height:120px;

border-radius:50%;

background:radial-gradient(circle,
rgba(255,240,180,.45),
transparent 70%);

pointer-events:none;

transform:translate(-50%,-50%);

z-index:2;

transition:.08s linear;

}

/* ===========================
   Scroll Progress
=========================== */

#progressBar{

position:fixed;

top:0;

left:0;

height:4px;

width:0;

background:linear-gradient(
90deg,
#D4AF37,
#FFF3C4);

z-index:999999;

}

