
function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    btn.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);     //ao clicar no botao pode-se observar na inspeção que a class dark-mode é adicionada.
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

/**@param changeText funcao que muda o texto de acordo com o click do button */
function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";


    /**@param body seu uso aqui é porque ele comanda toda a página */
    if(body.classList.contains(darkModeClass)){  //contains vai verificar dentro da classLista de botão se existe alguma coisa, ou seja, se existe o  'dark-mode'
        btn.innerHTML = lightMode
        h1.innerHTML = darkMode;
        return;  //com esse retorno, faz com que saia da função
    }     
    
    btn.innerHTML = darkMode;
    h1.innerHTML = lightMode; 
}

const darkModeClass = 'dark-mode'
const btn = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //Estou pegando pela própria tag no caso body
const footer = document.getElementsByTagName('footer')[0];

/**@param btn  selection element to checking */
console.log(btn); 

/**@param changeMode funcao declarada acima e quando é clicado no butão automaticamente é chamado o evento click */
btn.addEventListener('click', changeMode)

// document.addEventListener('click', changeMode)             (test event)


