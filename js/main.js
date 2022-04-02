const body = document.querySelector('body');

//shadow modal
const bgShadow = document.querySelector('.bg-shadow');

//modal boxes
const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-bg');
const modalCross = document.querySelector('.modal__cross');
const modalImg = document.querySelector('.modal__img');
const modalText = document.querySelector('.modal__text');
const btnsRead = document.querySelectorAll('.offer__card-btn');

//nav
const burgerBtn = document.querySelector('.burger-btn');
const navMovile = document.querySelector('.nav-mobile');
const navDesktop = document.querySelector('.nav-desktop');
const navItemsMobile = document.querySelectorAll('.nav__item--mobile');

//show and close navigation mobile
const handleNav = () => {
    body.classList.toggle('fixed-body');
    navMovile.classList.toggle('nav-mobile--active');

    navItemsMobile.forEach(item => {
        item.addEventListener('click', () => {
            body.classList.remove('fixed-body');
            navMovile.classList.remove('nav-mobile--active');
        })
    })
}
//show and close modal
const modalClose = () => {
	modalBg.classList.remove('modal-bg--active');
	modal.classList.remove('modal--active');
    modalImg.src = '';
    modalImg.alt = '';
};

const modalShow = () => {
	modalBg.classList.add('modal-bg--active');
	modal.classList.add('modal--active');
};

//handle modal
btnsRead.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.id === 'exp') {
            modalImg.src = './img/offer/exp.png'; 
            modalImg.alt = 'postać na polu walki';
            modalText.innerText = "Funkcja niezwykle przydatna bez niej gra niezdatna, expa przybywa a potwórów ubywa";
        }
    
        else if(btn.id === 'e2'){
            modalImg.src = './img/offer/e2.png'; 
            modalImg.alt =  'postać obok elity 2';
            modalText.innerText = "Elitarne potwory nie starszne, pomyślał by kto?";
        }
        
        else if(btn.id === 'hero'){
            modalImg.src = './img/offer/heros.png';
            modalImg.alt = 'postać obok herosa';
            modalText.innerText = "Przechodził może gdzieś tędy heros? Drania muszę ubić nim świt nastanie!";
        }
        
        else if(btn.id === 'task'){
            modalImg.src = './img/offer/quest.png'; 
            modalImg.alt = 'postać obok zleceniodwacy';
            modalText.innerText = "Pomagam choć nie muszę, przez złoto chęć pragnienia szarpie mą duszę. A cóż to?";
        }
        
        else if(btn.id === 'tunia'){
            modalImg.src = './img/offer/tunia.png';
            modalImg.alt = 'postać obok sprzedawcy';
            modalText.innerText = "Robię zakupy, to moje hobby, to mnie cieszy. Handluje to moja praca, to moja płaca!";
        }
        
        else if(btn.id === 'additives'){
            modalImg.src = './img/offer/additives.png'; 
            modalImg.alt = 'grafika pikselowej szafy';
            modalText.innerText = "Dodatki? Ktoś coś mówił? Ja tu tylko sprzątam!";
        }
        
        else if(btn.id === 'antycaptcha'){
            modalImg.src = './img/offer/antycaptcha.png'; 
            modalImg.alt = 'dwa przekreślone miecze';
            modalText.innerText = "Nie straszna mi żadna trwoga, przeskoczę każdy płotek!";
        }
        
        
        else if(btn.id === 'deposit'){
            modalImg.src = './img/offer/depozyt.png';
            modalImg.alt = 'postać obok strażnika depozytu';
            modalText.innerText = "Chowam bo się boję!";
        }
        
        else if(btn.id === 'modern'){
            modalImg.src = './img/offer/NI&SI.png';
            modalImg.alt = 'stary oraz nowy interface';
            modalText.innerText = "Epoka średniowiecza i współczesność są mi bliskie!";
        }
        modalShow();
    })
});

//navigation desktop
window.addEventListener('scroll', () => {
    if(window.scrollY > 250){
        navDesktop.classList.add('nav-desktop--active');
    } else {
        navDesktop.classList.remove('nav-desktop--active');
    }
})

//animation's offer tittle
window.addEventListener('scroll', () => {
	let content = document.querySelector('.offer__title');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;
	if (contentPosition < screenPosition) {
		content.classList.add('offer__title--active');
	}
});



modalCross.addEventListener('click', modalClose);
burgerBtn.addEventListener('click', handleNav);