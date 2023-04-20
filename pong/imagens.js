//sons e imagens 



//imagens
let estrada;
let ator;
let carro1;
let carro2;
let carro3;


//sons
let sonDaColisao;
let sonDaTrilha;
let sonDoPonto;



function preload(){
  estrada = loadImage("image/estrada.png")
  ator = loadImage("image/ator-1.png")
  carro1 = loadImage("image/carro-1.png")
  carro2 = loadImage("image/carro-2.png")
  carro3 = loadImage("image/carro-3.png")
  imagensCarros = [carro1, carro2, carro3, carro1, carro2, carro3]
  
  sonDaColisao = loadSound("sons/colidiu.mp3")
  sonDaTrilha = loadSound("sons/trilha.mp3")
  sonDoPonto = loadSound("sons/pontos.wav")
}