let question = document.querySelectorAll('.question');
let btn = document.querySelectorAll('.question .more');
let answer = document.querySelectorAll('.answer');
let parrafo = document.querySelectorAll('.answer p');

for(let i = 0; i < btn.length; i++){

    let altoParrafo = parrafo[i].clientHeight;
    let contador = 0;

    btn[i].addEventListener('click', () => {

        if(contador == 0){
            answer[i].style.height = `${altoParrafo}px`;
            question[i].style.marginBottom = `10px`;
            btn[i].innerHTML = '<i>-</i>';
            contador++;
        } else if(contador == 1){
            answer[i].style.height = `0`;
            question[i].style.marginBottom = `0px`;
            btn[i].innerHTML = '<i>+</i>';
            contador--;
        }


    })

}