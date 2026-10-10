let materiaAtual = "Conhecimentos gerais";
let indiceQuestao = 0;
let respondeu = false;

let progresso = {
  pontos: 0,
  respondidas: 0,
  acertos: 0
};

const questoes = [
  {
    materia: "Português",
    pergunta: "Qual é a principal finalidade de uma notícia?",
    alternativas: [
      "Contar uma história fantástica",
      "Informar sobre um acontecimento",
      "Ensinar uma receita",
      "Expressar somente sentimentos"
    ],
    correta: 1,
    explicacao: "A notícia tem como principal finalidade informar o leitor sobre acontecimentos relevantes."
  },
  {
    materia: "Matemática",
    pergunta: "Quanto é 25% de 200?",
    alternativas: ["25", "40", "50", "75"],
    correta: 2,
    explicacao: "25% corresponde a um quarto. 200 dividido por 4 é igual a 50."
  },
  {
    materia: "História",
    pergunta: "Em que ano ocorreu a Independência do Brasil?",
    alternativas: ["1500", "1822", "1889", "1922"],
    correta: 1,
    explicacao: "A Independência do Brasil foi proclamada em 7 de setembro de 1822."
  },
  {
    materia: "Geografia",
    pergunta: "Qual é o maior bioma brasileiro em extensão territorial?",
    alternativas: ["Caatinga", "Cerrado", "Mata Atlântica", "Amazônia"],
    correta: 3,
    explicacao: "A Amazônia é o maior bioma brasileiro em extensão territorial."
  },
  {
    materia: "Ciências",
    pergunta: "Qual órgão é responsável por bombear o sangue?",
    alternativas: ["Pulmão", "Coração", "Estômago", "Rim"],
    correta: 1,
    explicacao: "O coração bombeia o sangue, ajudando a transportar oxigênio e nutrientes pelo corpo."
  },
  {
    materia: "Inglês",
    pergunta: 'O que significa "book" em português?',
    alternativas: ["Caderno", "Caneta", "Livro", "Mesa"],
    correta: 2,
    explicacao: '"Book" significa "livro" em português.'
  },
  {
    materia: "Biologia",
    pergunta: "Qual estrutura celular contém grande parte do DNA?",
    alternativas: ["Núcleo", "Membrana", "Citoplasma", "Parede celular"],
    correta: 0,
    explicacao: "Nas células eucarióticas, o núcleo abriga a maior parte do material genético."
  },
  {
    materia: "Física",
    pergunta: "Qual é a unidade de medida da força no Sistema Internacional?",
    alternativas: ["Watt", "Metro", "Newton", "Litro"],
    correta: 2,
    explicacao: "A força é medida em newtons, cujo símbolo é N."
  },
  {
    materia: "Química",
    pergunta: "Qual é a fórmula química da água?",
    alternativas: ["CO2", "O2", "NaCl", "H2O"],
    correta: 3,
    explicacao: "Uma molécula de água possui dois átomos de hidrogênio e um de oxigênio."
  },
  {
    materia: "Filosofia",
    pergunta: "A filosofia busca principalmente:",
    alternativas: [
      "Questionar e refletir sobre a realidade",
      "Evitar perguntas difíceis",
      "Substituir todas as ciências",
      "Memorizar somente datas"
    ],
    correta: 0,
    explicacao: "A filosofia investiga questões sobre conhecimento, ética, existência e realidade por meio da reflexão crítica."
  }
];

function mostrarSecao(id) {
  document.querySelectorAll(".secao").forEach(secao => {
    secao.classList.add("escondido");
  });

  document.getElementById(id).classList.remove("escondido");

  if (id === "quiz") {
    iniciarQuiz();
  }
}

function selecionarMateria(materia) {
  materiaAtual = materia;
  document.getElementById("materiaEscolhida").textContent =
    "Matéria selecionada: " + materia;
  document.getElementById("nomeMateria").textContent =
    "Matéria: " + materia;
}

function obterQuestoes() {
  const filtradas = questoes.filter(q =>
    materiaAtual === "Conhecimentos gerais" ||
    q.materia === materiaAtual
  );

  return filtradas.length > 0 ? filtradas : questoes;
}

let listaAtual = [];

function iniciarQuiz() {
  listaAtual = obterQuestoes();
  indiceQuestao = 0;
  respondeu = false;

  mostrarPergunta();
}

function mostrarPergunta() {
  if (indiceQuestao >= listaAtual.length) {
    document.getElementById("pergunta").textContent =
      "Parabéns! Você concluiu este desafio! 🎉";

    document.getElementById("numeroQuestao").textContent =
      "Você terminou todas as questões desta rodada.";

    document.getElementById("alternativas").innerHTML = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("explicacao").textContent = "";
    document.getElementById("proxima").classList.add("escondido");
    return;
  }

  respondeu = false;

  const q = listaAtual[indiceQuestao];

  document.getElementById("nomeMateria").textContent =
    "Matéria: " + q.materia;

  document.getElementById("numeroQuestao").textContent =
    "Questão " + (indiceQuestao + 1) + " de " + listaAtual.length;

  document.getElementById("pergunta").textContent = q.pergunta;
  document.getElementById("feedback").textContent = "";
  document.getElementById("explicacao").textContent = "";
  document.getElementById("proxima").classList.add("escondido");

  const area = document.getElementById("alternativas");
  area.innerHTML = "";

  q.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");
    botao.textContent =
      String.fromCharCode(65 + indice) + ") " + alternativa;

    botao.onclick = () => verificarResposta(indice);
    area.appendChild(botao);
  });
}

function verificarResposta(escolha) {
  if (respondeu) return;
  respondeu = true;

  const q = listaAtual[indiceQuestao];
  const botoes = document.querySelectorAll("#alternativas button");

  botoes.forEach((botao, indice) => {
    botao.disabled = true;

    if (indice === q.correta) {
      botao.classList.add("correta");
    } else if (indice === escolha) {
      botao.classList.add("errada");
    }
  });

  progresso.respondidas++;

  if (escolha === q.correta) {
    progresso.acertos++;
    progresso.pontos += 10;

    document.getElementById("feedback").textContent =
      "✅ Resposta correta! Você ganhou 10 pontos.";
  } else {
    document.getElementById("feedback").textContent =
      "❌ Não foi dessa vez! Estude a explicação e tente novamente.";
  }

  document.getElementById("explicacao").textContent =
    "💡 Entenda: " + q.explicacao;

  atualizarProgresso();

  document.getElementById("proxima").classList.remove("escondido");
}

function proximaQuestao() {
  indiceQuestao++;
  mostrarPergunta();
}

function atualizarProgresso() {
  document.getElementById("pontos").textContent = progresso.pontos;
  document.getElementById("respondidas").textContent = progresso.respondidas;
  document.getElementById("acertos").textContent = progresso.acertos;
}

atualizarProgresso();
iniciarQuiz();
