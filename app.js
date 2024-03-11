let titulo = document.querySelector ('h1');
titulo.innerHTML = 'HORA DO DESAFIO';

function exibirMensagemNoAlerta1() {
    alert('o botão console foi clicado!')
};

function exibirMensagemNoAlerta2() {
    alert('eu amo JS')
};

function exibirMensagemNoAlerta3 () {
    cidade = prompt('Digite o nome de alguma cidade do Brasil!!!');
    alert(`Estive em ${cidade} e lembrei de você!`)
};

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`o resultado da soma de ${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}
