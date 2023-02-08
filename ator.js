//Variaveis do Ator
let yAtor = 366;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
};

function movimentarAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3
  };
  
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor +=3
  }
  };
  
  if (keyIsDown(RIGHT_ARROW)){
     if (xAtor < 466){
    xAtor +=3
     }
  };
  
  if (keyIsDown(LEFT_ARROW)){
     if (xAtor > 0){
    xAtor -=3
     }
  };
};

function verificaColisao(){
  
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
      somColisao.play();
      if (pontoPositivos()){
      meusPontos -= 1;
      }
    }
  }
}

function pontoPositivos(){
  return meusPontos > 0
}

function colidiu(){
  yAtor = 366;
};

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 165, 0));
  text(meusPontos, 240, 27);
};

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1; 
    colidiu();
    somPonto.play();
  }
};

function podeSeMover(){
  return yAtor < 366;
}