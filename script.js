// ==============================
// FAQ
// ==============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

// ==============================
// Animação ao aparecer na tela
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".problem-card, .solution-item, .learn-item, .before, .after, .offer-box, .faq-item"
).forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all .6s ease";

    observer.observe(el);

});

// ==============================
// Efeito nos botões
// ==============================

const buttons = document.querySelectorAll(".btn-buy");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

// ==============================
// Voltar ao topo
// ==============================

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
