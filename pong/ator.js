let xAtor = 100;
let yAtor = 368;
let larguraAtor = 30;
let alturaAtor = 30;
let colisao = false;
let pontos = 0;

function desenhaAtor(){
  image(ator, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
   if(keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
        yAtor += 3;
      }
  }
}

function colisaoDoAtor(){
  //collideRectCircle (x1, y1, largura1, altura1, cx, cy, diâmetro)
  for ( i = 0; i < imagensCarros.length; i++){
    colisao = collideRectCircle( xCarros[i], yCarros[i], larguraCarros, alturaCarros, xAtor, yAtor, 15)
    if(colisao){
      voltarAtorAoInicio();
      sonDaColisao.play();
      if(pontosMenorQueZero())
      pontos -= 1;
    }
  }
}

function voltarAtorAoInicio(){
  yAtor = 368;
}

function mostraPontos(){
  textAlign(CENTER)
  fill(255, 240, 60)
  text(pontos, width /5, 27)
  textSize(25)
}

function somaPontos(){
  if(yAtor <= 14){
    pontos += 1;
    voltarAtorAoInicio();
    sonDoPonto.play();
  }
}

function pontosMenorQueZero(){
  return pontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}





