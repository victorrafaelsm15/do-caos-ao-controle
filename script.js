/* ==========================================
   FAQ
========================================== */

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

/* ==========================================
   SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".card,.benefit,.learn-card,.bonus-card,.faq-item,.cta,.final-cta"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/* ==========================================
   BOTÕES
========================================== */

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="";

    });

});

/* ==========================================
   CONTADOR REGRESSIVO
========================================== */

const countdown = document.createElement("div");

countdown.className="countdown";

countdown.innerHTML=`

⏰ Oferta promocional termina em

<div id="timer">

<span>02</span> :

<span>00</span> :

<span>00</span>

</div>

`;

const hero=document.querySelector(".hero .container");

hero.appendChild(countdown);

let totalSeconds=7200;

const timer=document.getElementById("timer");

setInterval(()=>{

if(totalSeconds<=0)return;

totalSeconds--;

const h=Math.floor(totalSeconds/3600);

const m=Math.floor((totalSeconds%3600)/60);

const s=totalSeconds%60;

timer.innerHTML=`

<span>${String(h).padStart(2,"0")}</span> :

<span>${String(m).padStart(2,"0")}</span> :

<span>${String(s).padStart(2,"0")}</span>

`;

},1000);

/* ==========================================
   CONTADOR DE VISUALIZAÇÕES
========================================== */

const visitors=document.createElement("div");

visitors.className="visitors";

const amount=Math.floor(Math.random()*23)+112;

visitors.innerHTML=`🔥 ${amount} pessoas estão visualizando esta página agora`;

document.querySelector(".hero .container").appendChild(visitors);

/* ==========================================
   BARRA DE PROGRESSO
========================================== */

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.background="#29c8ff";

progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

const height=document.documentElement.scrollHeight-window.innerHeight;

progress.style.width=(scroll/height)*100+"%";

});

/* ==========================================
   EFEITO SUAVE
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
