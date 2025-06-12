const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alterntivas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");
const perguntas = [
    { 
     enunciado: "Pergunta 1",
     alternativas: [
        "Alternativa 01",
         "Alterativa 02"
     ]
    },
    { 
        enunciado: "Pergunta 2",
        alternativas: [
           "Alternativa 03",
            "Alterativa 04"
        ]
       },
       { 
        enunciado: "Pergunta 3",
        alternativas: [
           "Alternativa 05",
            "Alterativa 06"
        ]
       },

]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual . enunciado;
}

mostraPergunta ();

console.log(caixaPrincipal)