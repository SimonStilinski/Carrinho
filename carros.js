//Variaveis do carro
let yCarros = [40, 96, 150, 210, 270, 318];
let velCarros = [2, 2.5, 3.2, 4, 3.3, 2.1];
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
};

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velCarros[i] + meusPontos*0.8;
  }
};

function posicao0(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTela(xCarro){
  return xCarro < -50;
}