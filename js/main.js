const bgShadow = document.querySelector('.bg-shadow');

const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-bg');
const modalCross = document.querySelector('.modal__cross');
const modalImg = document.querySelector('.modal__img');
const modalText = document.querySelector('.modal__text');
const btnsReadMore = document.querySelectorAll('.offer__card-btn');

const modalClose = () => {
	modalBg.classList.remove('modal-bg--active');
	modal.classList.remove('modal--active');
};

const modalShow = () => {
	modalBg.classList.add('modal-bg--active');
	modal.classList.add('modal--active');
};

const handleModal = () => {
    if (btn.getAttribute('id') === 'exp') {
        console.log(modalImg.setAttribute('src', './img/offer/exp.png'), modalImg.getAttribute('src'));
    } 
    else if(btn.getAttribute('id') === 'e2'){
        console.log(modalImg.setAttribute('src', './img/offer/e2.png'), modalImg.getAttribute('src'));
    }
    else {
        console.log("haven't");
    }
}

window.addEventListener('scroll', () => {
	let content = document.querySelector('.offer__title');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;
	if (contentPosition < screenPosition) {
		content.classList.add('offer__title--active');
	}
});

//ugly code

btnsReadMore.forEach((btn) => {
	btn.addEventListener('click', () => {
		
        if (btn.getAttribute('id') === 'exp') {
			modalImg.setAttribute('src', './img/offer/exp.png'), modalImg.setAttribute('alt', 'postać na polu walki');
            modalText.innerText = "Funkcja niezwykle przydatna bez niej gra niezdatna, expa przybywa a potwórów ubywa";
		}

        else if(btn.getAttribute('id') === 'e2'){
            modalImg.setAttribute('src', './img/offer/e2.png'), modalImg.setAttribute('alt', 'postać obok elity 2');
            modalText.innerText = "Elitarne potwory nie starszne, pomyślał by kto?";
        }
        
        else if(btn.getAttribute('id') === 'hero'){
            modalImg.setAttribute('src', './img/offer/heros.png'), modalImg.setAttribute('alt', 'postać obok herosa');
            modalText.innerText = "Przechodził może gdzieś tędy heros? Drania muszę ubić nim świt nastanie!";
        }
        
        else if(btn.getAttribute('id') === 'task'){
            modalImg.setAttribute('src', './img/offer/quest.png'), modalImg.setAttribute('alt', 'postać obok zleceniodwacy');
            modalText.innerText = "Pomagam choć nie muszę, przez złoto chęć pragnienia szarpie mą duszę. A cóż to?";
        }
        
        else if(btn.getAttribute('id') === 'tunia'){
            modalImg.setAttribute('src', './img/offer/tunia.png'), modalImg.setAttribute('alt', 'postać obok sprzedawcy');
            modalText.innerText = "Robię zakupy, to moje hobby, to mnie cieszy. Handluje to moja praca, to moja płaca!";
        }
        
        else if(btn.getAttribute('id') === 'additives'){
            modalImg.setAttribute('src', './img/offer/additives.png'), modalImg.setAttribute('alt', 'grafika pikselowej szafy');
            modalText.innerText = "Dodatki? Ktoś coś mówił? Ja tu tylko sprzątam!";
        }
        
        else if(btn.getAttribute('id') === 'antycaptcha'){
            modalImg.setAttribute('src', './img/offer/antycaptcha.png'), modalImg.setAttribute('alt', 'dwa przekreślone miecze');
            modalText.innerText = "Nie straszna mi żadna trwoga, przeskoczę każdy płotek!";
        }
        
        
        else if(btn.getAttribute('id') === 'deposit'){
            modalImg.setAttribute('src', './img/offer/depozyt.png'), modalImg.setAttribute('alt', 'postać obok strażnika depozytu');
            modalText.innerText = "Chowam bo się boję!";
        }
        
        else if(btn.getAttribute('id') === 'modern'){
            modalImg.setAttribute('src', './img/offer/NI&SI.png'), modalImg.setAttribute('alt', 'stary oraz nowy interface');
            modalText.innerText = "Epoka średniowiecza i współczesność są mi bliskie!";
        }

        modalShow();
	});
});

modalCross.addEventListener('click', modalClose);
