/************************************
 * Funcionamento do sistema completo
 ***********************************/
var Game = sessionStorage.getItem('game');
var correctAnswer = "none";

function chooseTheGame(){
    //Selecionando os inputsRadio
    var option = window.document.getElementsByName('options');
    //Declarando e iniciando uma variável de controle para ver se há algum botão selecionado
    var isChecked = true;
    /*
        Verificando todas as opções (os inputs radio da questão).
        Se uma opção estiver marcada, salva qual é o jogo na variável global Game e já retorna verdadeiro;
            -assim já acaba toda a função, com o retorno (o retorno é apenas para sair da função, para acelerar o processo ao ter uma opção escolhida)
        Senão continua rodando
            -e guarda que nenhuma opção foi selecionada ainda (isChecked = false);
        Se rodar todas as opções e não retornar true, é porque há nehuma opçãos selecionada.
            -Se isso acontecer, ao acabar o loop, retornará a variável isChecked, que guardou o valor falso, mostrando que nada foi selecionado.
    */
    for(var i = 0; i < option.length; i++){
        if(option[i].checked){
            sessionStorage.setItem('game', option[i].value);
            return true;
        }else{
            isChecked = false;
        }
    }
    window.alert('Você não selecionou nenhuma opção!\nPor favor, escolha um dos jogos!');
    return isChecked;
}

/*************************
 * Sistema das perguntas
*************************/

//Função mostrar a pergunta
function showAsk(){
    var pageTitle = window.document.getElementById('pageTitle');
    switch (Game) {
        case "Enigma":
            pageTitle.innerText = "Enigma";
            enigma();
            break;
        case "Charada":
            pageTitle.innerText = "Charada";
            charada();
            break;
        case "Codigo":
            pageTitle.innerText = "Descubra o código";
            descubraOCodigo();
            break;
        default:
            noAskChoosen();
    }
}

//Função para checar se a resposta está correta
function checkAnswer(){
    var answer = window.document.getElementById('answer').value.toLowerCase();
    const modal = window.document.getElementById('answerAlert');
    const alertTitle = window.document.getElementById('alertTitle');
    const alertText = window.document.getElementById('alertText');
    const button_backToHome = window.document.getElementById('backToHome');
    const button_close = window.document.getElementById('close');
    const alertBorder = window.document.getElementById('modalBlock');
    if(answer == correctAnswer){
        alertBorder.style.borderColor = 'limegreen';
        alertTitle.style.color = 'limegreen';
        alertText.style.color = 'green';
        alertTitle.innerText = "Parabéns!";
        alertText.innerText = "Você acertou a resposta!";
        button_backToHome.style.display = 'flex';
        modal.style.display = 'flex';
        button_close.style.display = 'none';
        modal.style.display = 'flex';
    }else{
        alertBorder.style.borderColor = 'red';
        alertTitle.style.color = 'red';
        alertText.style.color = 'red';
        alertTitle.innerText = "Ops! Resposta errada!";
        alertText.innerText = "Tente novamente.";
        button_backToHome.style.display = 'none';
        modal.style.display = 'flex';
        button_close.addEventListener('click', closeAlert);
    }

    function closeAlert(){
        modal.style.display = 'none';
    }
}

//Funçoes para as perguntas
function enigma(){
    var askTitle = window.document.getElementById('askTitle');
    var askContent = window.document.getElementById('askContent');
    askTitle.innerText = "Dois oposto em um só.";
    askContent.innerText = "Contruo castelos e derrubo montanhas. Ajudo uns a enxergar e outros a ficar cegos.\nQuem sou eu?";
    correctAnswer = "areia";
}

function charada(){
    var askTitle = window.document.getElementById('askTitle');
    var askContent = window.document.getElementById('askContent');
    askTitle.innerText = "Bloqueável, mas não vencida!";
    askContent.innerText = "Meu inimigo me bloqueia, mas não me vence.\nQuem sou eu?";
    correctAnswer = "luz";
}

function descubraOCodigo(){
    var askTitle = window.document.getElementById('askTitle');
    var askContent = window.document.getElementById('askContent');
    askTitle.innerText = "Código Morse";
    askContent.innerText = "...- . .--- .- / .- / .-. . ... .--. --- ... - .- ... / .- -... .- .. -..- ---\n.-.. . --- .--. .- .-. -.. ---";
    correctAnswer = "leopardo";
}

function noAskChoosen(){
    const modal = window.document.getElementById('answerAlert');
    const alertTitle = window.document.getElementById('alertTitle');
    const alertText = window.document.getElementById('alertText');
    const button_backToHome = window.document.getElementById('backToHome');
    const button_close = window.document.getElementById('close');
    const alertBorder = window.document.getElementById('modalBlock');
    alertBorder.style.borderColor = ' rgb(114, 46, 0)';
    alertTitle.style.color = 'red';
    alertText.style.color = 'black';
    alertTitle.innerText = "Você ocasionou um bug!";
    alertText.innerText = "Provavelmente, você tentou manipular o URL para entrar nesta página, sem escolher um jogo.\nPor favor, volte à página inicial, pelo botão abaixo!";
    button_backToHome.style.display = 'flex';
    modal.style.display = 'flex';
    button_close.style.display = 'none';
    modal.style.display = 'flex';
}