

function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
};

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentarAtor();
  posicao0();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  ganhou();
};

function ganhou(){
  if (meusPontos >= "10"){
    velCarros = 0;
    somTrilha.pause();
    image(vitoria, 150, 100);
    somVitoria.play();
  }
}

