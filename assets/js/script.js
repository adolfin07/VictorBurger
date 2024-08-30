

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', this.window, scrollY > 800);
})

//open menú

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

//solucion 
window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('open');
}

//scrollreveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    durationd: 2500,
    reset: false

});

sr.reveal('.home-text', { delay: 300 });
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.container', { delay: 400 });

sr.reveal('.about-img', {});
sr.reveal('.about-img', { delay: 300 });

sr.reveal('.middle-text', {});
sr.reveal('.row-btn,.shop-content', { delay: 300 });

sr.reveal('.review, .contact', { delay: 300 });
