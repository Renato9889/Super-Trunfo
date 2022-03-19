var carta1 = {
  nome: "Jean Grey",
  atributos:{
    ataque:8,
    defesa:9,
    poder: 10
  }
};
var carta2 = {
  nome: "Scarlet Witch",
  atributos:{
    ataque:9,
    defesa:8,
    poder: 10
  }
};
var carta3 = {
  nome: "Rogue",
  atributos:{
    ataque:10,
    defesa:8,
    poder: 7
  }
};
var carta4 = {
  nome: "Storm",
  atributos:{
    ataque:9,
    defesa:7,
    poder: 8
  }
};

var cartas = [carta1,carta2,carta3,carta4];
var cartaMaquina;
var cartaJogadora;

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 4);
  cartaMaquina = cartas[numeroCartaMaquina];
  var numeroCartaJogador = parseInt(Math.random() * 4);
  while(numeroCartaJogador==numeroCartaMaquina){
    numeroCartaJogador = parseInt(Math.random() * 4);
  }
  cartaJogadora = cartas[numeroCartaJogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirOpcoes();
}

function exibirOpcoes(){
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogadora.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado(){
  var radioAtributos = document.getElementsByName("atributo");
  for(var i=0;i < radioAtributos.length; i++){
    if(radioAtributos[i].checked == true){
      return radioAtributos[i].value;
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogadora.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if (valorCartaJogador>valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!!!";
  }else if(valorCartaMaquina>valorCartaJogador){
    elementoResultado.innerHTML = "Você perdeu!!!";
  }else{
    elementoResultado.innerHTML = "Empatou!!!";
  }
}