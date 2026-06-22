const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            { texto: "Isso é assustador!", afirmacao: "No início, você sentiu medo do avanço acelerado da tecnologia." },
            { texto: "Isso é maravilhoso!", afirmacao: "De primeira, você se empolgou com as infinitas possibilidades do futuro." }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            { texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.", afirmacao: "Você prefere usar a tecnologia como uma aliada prática no seu aprendizado." },
            { texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.", afirmacao: "Você prioriza métodos tradicionais de pesquisa e o debate humano." }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            { texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.", afirmacao: "Você mantém uma visão otimista de que a tecnologia impulsionará o mercado profissional." },
            { texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.", afirmacao: "Sua preocupação está voltada para o impacto social e a segurança dos trabalhadores." }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            { texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.", afirmacao: "Prefere expressar sua criatividade de forma manual e autoral." },
            { texto: "Criar uma imagem utilizando um gerador de imagem de IA.", afirmacao: "Decidiu testar as capacidades gerativas das novas ferramentas visuais." }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            { texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.", afirmacao: "Acha válido usar respostas prontas se o comando inicial foi bem pensado." },
            { texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.", afirmacao: "Entende que a revisão humana e o toque pessoal são indispensáveis para um bom trabalho." }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; // Armazena o perfil/história gerada pelas escolhas

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpa as alternativas anteriores
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " "; // Junta as afirmações
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo, suas escolhas mostram que:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; // Limpa os botões
}

// Inicia o quiz
mostraPergunta();