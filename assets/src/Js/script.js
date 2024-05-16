
const btnMenu = document.getElementById('btnMenu');
function toggleMenu(){
    const conteninerMenu = document.getElementById('conteninerMenu');
    const iconMenu = document.querySelector('.iconMenu');
    conteninerMenu.classList.toggle('active');
    if (conteninerMenu.classList.contains('active')){
        iconMenu.setAttribute('src', 'assets/imagens/nav/xmark-solid.svg');
    }else{
        iconMenu.setAttribute('src', 'assets/imagens/nav/bars-solid.svg');
    }
}

btnMenu.addEventListener('click', toggleMenu);

// scroll

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args)
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};
 //Sobre mim
const target = document.querySelectorAll('[data-anime]');

function animeScroll(){
   const windowTop = window.pageYOffset + window.innerHeight * 0.75;

   target.forEach(function(element){

    if((windowTop) > element.offsetTop){
        element.classList.add('animate');
    }else{
        element.classList.remove('animate');
    }
   });
};

animeScroll();

if(target.length){
window.addEventListener('scroll', debounce(function(){
    animeScroll();
}, 100))
}

//Trabalho

const trabalho = document.querySelectorAll('[data-trabalho]');

function trabalhoScroll() {
    const windowLeft = window.pageYOffset + window.innerHeight * 0.75;
    trabalho.forEach(function(element){
        if((windowLeft) > element.offsetTop){
            element.classList.add('entrar');
        }else{
            element.classList.remove('entrar');
        }
          
    })
     
    }

    trabalhoScroll();

    if(trabalho.length){
        window.addEventListener('scroll', debounce(function(){
            trabalhoScroll();
        }, 100))
    }
    

// Card

const skillsTitle = document.querySelectorAll('.conteinerTitleImg');

skillsTitle.forEach((skillsTitle, keys) => {
    skillsTitle.addEventListener('click', () => {
       
        // const skills = document.querySelectorAll('.skillsHidden');
        const s0 = document.getElementById('s0');
        const s1 = document.getElementById('s1');
        const s2 = document.getElementById('s2');

        const arrowCard = document.querySelectorAll('.arrowCard');

        if(keys === 0){
            if(s0.classList.contains('skillsHidden')){
                s0.classList.remove('skillsHidden');
                s0.classList.add('skillsShow');
                console.log(s0);
                if(s0.classList.contains('skillsShow')){
                    arrowCard.item(0).setAttribute('src', 'assets/imagens/arrow/chevron-up-solid.svg');
                }
            }else{
                s0.classList.remove('skillsShow');
                s0.classList.add('skillsHidden');
                arrowCard.item(0).setAttribute('src', 'assets/imagens/arrow/chevron-down-solid.svg');
            }
            
        }else if(keys === 1){
            if(s1.classList.contains('skillsHidden')){
                s1.classList.remove('skillsHidden');
                s1.classList.add('skillsShow');
                if(s1.classList.contains('skillsShow')){
                    arrowCard.item(1).setAttribute('src', 'assets/imagens/arrow/chevron-up-solid.svg');
                }
            }else{
                s1.classList.remove('skillsShow');
                s1.classList.toggle('skillsHidden');
                arrowCard.item(1).setAttribute('src', 'assets/imagens/arrow/chevron-down-solid.svg');
            }

        }else if(keys === 2){
            if(s2.classList.contains('skillsHidden')){
                s2.classList.remove('skillsHidden');
                s2.classList.add('skillsShow');
                if(s2.classList.contains('skillsShow')){
                    arrowCard.item(2).setAttribute('src', 'assets/imagens/arrow/chevron-up-solid.svg');
                }
            }else{
                s2.classList.remove('skillsShow');
                s2.classList.add('skillsHidden');
                arrowCard.item(2).setAttribute('src', 'assets/imagens/arrow/chevron-down-solid.svg');
            }

        }else{
            console.log('Error');
        }
    })
})


// slide carousel

const btnNextPrev = document.querySelectorAll('.control');
let currentCarouselIndex = 0;
const items = document.querySelectorAll('.item');
const maxItens = items.length;

btnNextPrev.forEach(control =>{
    control.addEventListener('click', () =>{
        const isLeft = control.classList.contains('btnLeft');
        console.log('click', isLeft);
        if(isLeft){
            currentCarouselIndex -= 1;
        }else{
            currentCarouselIndex += 1;
        }

        if(currentCarouselIndex >= maxItens){
            currentCarouselIndex = 0;
        }else if(currentCarouselIndex < 0){
            currentCarouselIndex = maxItens -1;
        }
        
        items.forEach(item => item.classList.remove('visibleCarousel'));
        items[currentCarouselIndex].scrollIntoView({
            inline: "center"
        });

        items[currentCarouselIndex].classList.add('visibleCarousel');
    });
});

