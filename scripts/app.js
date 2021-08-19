const nav = document.querySelector('.nav-items');

window.addEventListener('scroll', ()=>{
    nav.classList.toggle('fixed', window.scrollY > 0);
})

