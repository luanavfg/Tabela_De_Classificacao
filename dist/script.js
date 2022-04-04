//         chave.  valor.
var rafa = {
  nome: "Rafa",
  foto: "https://avatars.githubusercontent.com/u/54322854?v=4",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var luana = {
  nome: "Luana",
  foto: "https://avatars.githubusercontent.com/u/101883667?v=4",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var gui = {
  nome: "Gui",
  foto:
    "https://www.alura.com.br/assets/img/imersoes/instrutores/guilherme_lima.1636535198.jpg",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var jogadores = [rafa, luana, gui];

function adicionarJogador() {
  var nomeJogador = document.getElementById("nomeJogador").value;
  document.getElementById("nomeJogador").value = "";
  var fotoJogador = document.getElementById("fotoJogador").value;
  document.getElementById("fotoJogador").value = "";

  //jogadorNovo.nome = nomeJogador
  //jogadorNovo.foto = fotoJogador
  //jogadores.push(jogadorNovo)

  jogadores.push({
    nome: nomeJogador,
    foto: fotoJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  exibeJogadoresNaTela(jogadores);
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
luana.pontos = calculaPontos(luana);
gui.pontos = calculaPontos(gui);

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td><img src=" + jogadores[i].foto + "></td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  for (var contador = 0; contador < jogadores.length; contador++) {
    if (contador != i) {
      var outrosJogadores = jogadores[contador];
      outrosJogadores.derrotas++;
    }
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate() {
  for (
    var segundoIndice = 0;
    segundoIndice < jogadores.length;
    segundoIndice++
  ) {
    var jogador = jogadores[segundoIndice];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function resetarJogo() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].empates = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}