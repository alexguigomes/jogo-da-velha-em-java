

var jogador = "X";

function jogar(celulas) {

    if(celulas.innerHTML == ""){
        celulas.innerHTML = jogador;

        if(jogador == "X"){
            jogador = "o";
        }else{
            jogador = "X"
        }
    }
}

function reiniciar(){
    window.location.reload();

}