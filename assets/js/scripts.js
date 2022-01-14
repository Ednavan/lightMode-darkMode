
function changeMode(){
    console.log('clicou')
}

const btn = document.getElementById('mode-selector');

/**@param btn  selection element to checking */
console.log(btn); 

/**@param changeMode funcao declarada acima e quando é clicado no butão automaticamente é chamado o evento click */
btn.addEventListener('click', changeMode)