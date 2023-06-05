
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
