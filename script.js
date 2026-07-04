// ===============================
// MENTE SEM TRAVAS
// script.js
// ===============================

// FAQ

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const button = item.querySelector(".faq-question");

button.addEventListener("click", () => {

faqItems.forEach(faq => {

if(faq !== item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});



// ===============================
// ANIMAÇÃO AO ENTRAR NA TELA
// ===============================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".problem-card,.learn-item,.before,.after,.offer-box,.faq-item"

).forEach(el=>{

observer.observe(el);

});



// ===============================
// BOTÕES
// ===============================

const buttons=document.querySelectorAll(".main-button");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});



// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-button";

document.body.appendChild(topButton);

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});



// ===============================
// EFEITO REVELAR
// ===============================

const reveal=document.querySelectorAll(

".problem-card,.learn-item,.before,.after,.offer-box,.faq-item"

);

reveal.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(35px)";

el.style.transition=".7s";

});

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

reveal.forEach(el=>{

revealObserver.observe(el);

});



// ===============================
// CSS DO BOTÃO VOLTAR AO TOPO
// ===============================

const style=document.createElement("style");

style.innerHTML=`

.top-button{

position:fixed;

right:20px;

bottom:20px;

width:55px;

height:55px;

border:none;

border-radius:50%;

background:#22c55e;

color:#fff;

font-size:24px;

cursor:pointer;

box-shadow:0 10px 25px rgba(0,0,0,.25);

opacity:0;

visibility:hidden;

transition:.3s;

z-index:9999;

}

.top-button.show{

opacity:1;

visibility:visible;

}

.top-button:hover{

transform:translateY(-4px);

}

`;

document.head.appendChild(style);
