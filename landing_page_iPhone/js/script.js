function imgSlider(e){
    document.querySelector('#phone').src = e;
}

/*Mudando a cor de fundo */
function corFundo(color){
    const fundo = document.querySelector('.circle');
    fundo.style.background = color;
}