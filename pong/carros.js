//listas
let yCarros = [43, 99, 153, 210, 270, 318];
let xCarros = [630, 630, 630, 630, 630, 630];
let velocidadeCarros = [4, 2.5, 3.2, 5, 3.3, 2.3];
let larguraCarros = 50;
let alturaCarros = 35;

function desenhaCarro(){
  for( i = 0; i < imagensCarros.length; i++){
    image(imagensCarros[i], xCarros[i], yCarros[i], larguraCarros, alturaCarros)
  }
}

function movimentaCarro(){
    for( i = 0; i < imagensCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i]
  }
  
}

function loopCarros(){
  for( i = 0; i < imagensCarros.length; i++){
     if(passarDaTela(xCarros[i])){
      xCarros[i] = 630;
    }
  }
}

function passarDaTela(xCarros){
  return xCarros < - 52;
}




