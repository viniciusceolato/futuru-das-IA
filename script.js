const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em seu primeiro dia na Escola Técnica de Jujutsu de Tóquio, você dá de cara com Satoru Gojo usando seus óculos escuros e comendo doces. Ele te dá um tchauzinho animado. Qual é o seu primeiro pensamento?",
        alternativas: [
            { texto: "Ele parece ser muito arrogante e irresponsável para ser o mais forte.", afirmacao: "No início, você duvidou da postura descontraída de Gojo." },
            { texto: "Ele é incrível! Transmite uma confiança absurda.", afirmacao: "De primeira, você se impressionou com a presença e o carisma de Gojo." }
        ]
    },
    {
        enunciado: "Durante um treinamento prático, Gojo decide demonstrar o 'Feitiço Ilimitado' e a técnica 'Azul' destruindo parte do cenário sem esforço nenhum. Que atitude você toma em relação ao poder dele?",
        alternativas: [
            { texto: "Tenta estudar a teoria por trás do Infinito para entender perfeitamente como ele manipula o espaço.", afirmacao: "Você prefere analisar o poder de Gojo de forma estratégica e intelectual." },
            { texto: "Fica apenas chocado com a força bruta e aceita que ele está em outro patamar impossível de alcançar.", afirmacao: "Você reconhece a soberania absoluta dele como uma força inevitável da natureza." }
        ]
    },
    {
        enunciado: "Gojo costuma dizer que quer criar uma nova geração de feiticeiros fortes para não precisar carregar o mundo Jujutsu sozinho. Em um debate com seus colegas, como você se posiciona sobre as intenções dele?",
        alternativas: [
            { texto: "Acredita que ele realmente se importa com o futuro dos alunos e quer protegê-los de um sistema corrompido.", afirmacao: "Você enxerga Gojo como um mentor genuíno e revolucionário." },
            { texto: "Acha que ele faz isso porque está entediado no topo e quer aliados que consigam acompanhá-lo.", afirmacao: "Você mantém um pé atrás, enxergando uma ponta de egoísmo na solidão do mais forte." }
        ]
    },
    {
        enunciado: "Chega o momento crítico do Incidente de Shibuya. Gojo é selado na Prisão Confinadora (Gokumonkyo). Qual o seu plano de ação imediato?",
        alternativas: [
            { texto: "Montar uma força-tarefa urgente com os estudantes e outros feiticeiros para resgatá-lo a todo custo.", afirmacao: "Você sabe que o equilíbrio do mundo depende diretamente da presença de Gojo." },
            { texto: "Focar em conter os danos e proteger os civis primeiro, pois o próprio Gojo daria um jeito de sobreviver lá dentro.", afirmacao: "Você confia plenamente na resiliência dele e priorizou o plano de contenção." }
        ]
    },
    {
        enunciado: "Após a grande batalha contra Sukuna, surge a discussão inevitável sobre o legado de Satoru Gojo para o mundo. Qual é a sua conclusão sobre a trajetória dele?",
        alternativas: [
            { texto: "Ele provou que, mesmo sendo uma divindade entre os homens, sua maior força era sua humanidade e carinho pelos alunos.", afirmacao: "Para você, o maior legado de Gojo não foi o seu poder, mas o impacto humano que deixou na nova geração." },
            { texto: "Ele foi uma arma perfeita que viveu e morreu pela causa Jujutsu, cumprindo seu papel como o mais forte até o fim.", afirmacao: "Você foca no aspecto lendário e militar de Gojo, o enxergando como o ápice insuperável do mundo dos feiticeiros." }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}