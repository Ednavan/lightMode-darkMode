
function changeMode(){
    changeClasses();
}

function changeClasses(){
    btn.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

const btn = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; //Estou pegando pela própria tag no caso body
const footer = document.getElementsByTagName('footer')[0];

/**@param btn  selection element to checking */
console.log(btn); 

/**@param changeMode funcao declarada acima e quando é clicado no butão automaticamente é chamado o evento click */
btn.addEventListener('click', changeMode)

// document.addEventListener('click', changeMode)             (test event)


