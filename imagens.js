//Variaveis de Imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let vitoria;

//Sons
let somTrilha;
let somColisao;
let somPonto;
let somVitoria;


function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro3, imagemCarro1]
  vitoria = loadImage("Imagens/pikachu-pride.gif");
  
  somTrilha = loadSound("Sons/trilha.mp3");
  somColisao = loadSound("Sons/colidiu.mp3");
  somPonto = loadSound("Sons/pontos.wav");
  somVitoria = loadSound("Sons/0000158.mp3")
};