const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em seu primeiro dia na Escola Técnica de Jujutsu de Tóquio, você dá de cara com Satoru Gojo usando seus óculos escuros e comendo doces. Ele te dá um tchauzinho animado. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Ele parece ser muito arrogante e irresponsável para ser o mais forte.", 
                afirmacao: "afirmacao"
            },
            {
                texto: "Ele é incrível! Transmite uma confiança absurda.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Durante um treinamento prático, Gojo decide demonstrar o 'Feitiço Ilimitado' e a técnica 'Azul' destruindo parte do cenário sem esforço nenhum. Que atitude você toma em relação ao poder dele?",
        alternativas: [
            {
                texto: "Tenta estudar a teoria por trás do Infinito para entender perfeitamente como ele manipula o espaço.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Fica apenas chocado com a força bruta e aceita que ele está em outro patamar impossível de alcançar.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Gojo costuma dizer que quer criar uma nova geração de feiticeiros fortes para não precisar carregar o mundo Jujutsu sozinho. Em um debate com seus colegas, como você se posiciona sobre as intenções dele?",
        alternativas: [
            {
                texto: "Acredita que ele realmente se importa com o futuro dos alunos e quer protegê-los de um sistema corrompido.", 
                afirmacao: "afirmacao"
            },
            {
                texto: "Acha que ele faz isso porque está entediado no topo e quer aliados que consigam acompanhá-lo.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Chega o momento crítico do Incidente de Shibuya. Gojo é selado na Prisão Confinadora (Gokumonkyo). Qual o seu plano de ação imediato?",
        alternativas: [
            {
                texto: "Montar uma força-tarefa urgente com os estudantes e outros feiticeiros para resgatá-lo a todo custo.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Focar em conter os danos e proteger os civis primeiro, pois o próprio Gojo daria um jeito de sobreviver lá dentro.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Após a grande batalha contra Sukuna, surge a discussão inevitável sobre o legado de Satoru Gojo para o mundo. Qual é a sua conclusão sobre a trajetória dele?",
        alternativas: [
            {
                texto: "Ele provou que, mesmo sendo uma divindade entre os homens, sua maior força era sua humanidade e carinho pelos alunos.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Ele foi uma arma perfeita que viveu e morreu pela causa Jujutsu, cumprindo seu papel como o mais forte até o fim.",
                afirmacao: "afirmacao"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    // Verifica se ainda existem perguntas na lista
    if (atual >= perguntas.length) {
        exibeResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    
    // Limpa as alternativas da pergunta anterior
    caixaAlternativas.textContent = "";
    
    // Desenha as novas alternativas
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function () {
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function exibeResultado() {
    caixaPerguntas.textContent = "Fim do Quiz!";
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "Você completou sua jornada junto a Satoru Gojo no mundo Jujutsu!";
}

// Inicia o quiz
mostraPergunta();