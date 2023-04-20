function setup() {
  createCanvas(600, 400);
  sonDaTrilha.loop();
}

function draw() {
  background(estrada);
  desenhaAtor();
  desenhaCarro();
  movimentaCarro();
  movimentaAtor();
  loopCarros();
  colisaoDoAtor();
  mostraPontos();
  somaPontos();
}



