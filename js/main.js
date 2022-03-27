window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.offer__title');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('offer__title--active')
    }
})
