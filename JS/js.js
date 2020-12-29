/************************************
 * Funcionamento do sistema completo
 ***********************************/
var Game = sessionStorage.getItem('game');

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
    if(Game == "Charada"){
        pageTitle.innerText = "Charada";
        charada();
    }
}

//Função para o enigma
function charada(){
    var askTitle = window.document.getElementById('askTitle');
    var askContent = window.document.getElementById('askContent');
    askTitle.innerText = "Bloqueável, mas não vencida!";
    askContent.innerText = "Meu inimigo me bloqueia, mas não me vence.\nQuem sou eu?";
}