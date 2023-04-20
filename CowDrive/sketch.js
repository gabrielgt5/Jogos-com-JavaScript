//variáveis da bolinha
var xBolinha = 300;
var yBolinha = 200;
var diametroBolinha = 25;
var raio = diametroBolinha/2;

//variáveis de movimento
var velocidadeXBolinha = 5;
var velocidadeYBolinha = 5;
var colidiu = false;

//variáveis da raquete
var xRaquete = 10;
var yRaquete = 150;
var larguraRaquete = 10;
var alturaRaquete = 90;

//variáveis da raqueteOponente
var xRaqueteOponente = 580;
var yRaqueteOponente = 150;
var velocidadeYOponente;

//placar do jogo
var meusPontos= 0;
var pontosOponente= 0;

//sons do jogo 
var raquetada;
var trilha;
var ponto;

//desvios 
var chancesDeErrar = 0;



function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
  colisaoBolinha();
  desenhaRaquete(xRaquete, yRaquete);
  movimentoRaquete();
  //colisaoRaquete();
  desenhaRaquete(xRaqueteOponente, yRaqueteOponente);
  colisaoRaqueteBlibioteca(xRaquete, yRaquete);
  colisaoRaqueteBlibioteca(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente()
  incluirPlacar()
  pontuacao()
  calcularChancesDeErrar();
}

  
function desenhaBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}
  
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }

function colisaoBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha = velocidadeXBolinha * -1;
    ponto.play();
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha = velocidadeYBolinha * -1;
  }
}

function desenhaRaquete( x, y ){
  rect( x , y,larguraRaquete, alturaRaquete);
}

function movimentoRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete +=  5;
  }
}

function colisaoRaquete(){
  if(xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha +raio > yRaquete){
    velocidadeXBolinha = velocidadeXBolinha * -1;
     }
}

function colisaoRaqueteBlibioteca(x, y){
    colidiu = collideRectCircle(x, y, larguraRaquete,     alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  
}

function movimentoRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chancesDeErrar;
    calcularChancesDeErrar();
    
}

function incluirPlacar() {
  textAlign("center");
  fill("#FFA500")
  rect(132, 11, 35, 20, 10)
  fill(255);
  text(meusPontos,150, 26);
  fill("#FFA500")
  rect(432, 11, 35, 20, 10)
  fill(255);
  text(pontosOponente, 450, 26);
  
  
}

function pontuacao(){
  if(xBolinha > 585){
    meusPontos += 1;
  }
  if(xBolinha < 13){
    pontosOponente += 1;
  }
}

function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
  trilha = loadSound("trilha.mp3");
  
}

function  calcularChancesDeErrar(){
  if(pontosOponente >= meusPontos){
    chancesDeErrar += 1;
    
    if(chancesDeErrar >= 10){
      chancesDeErrar = 40;
    }else{
      chancesDeErrar -= 1;
      if(chancesDeErrar <= 35)
        chancesDeErrar = 35;
    }
  }
  
}