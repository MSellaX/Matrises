// Cria um array vazio para armazenar os números digitados
let numeros = [];

// Variável para acumular a soma dos números pares
let somaPares = 0;

// Contador para o loop
let i = 0;

// Loop que será executado 10 vezes
while (i < 10) {
    // Solicita ao usuário que digite um número, informando a posição atual (1 a 10)
    let entrada = prompt("Digite um número inteiro (" + (i + 1) + "/10):");

    // Converte a entrada de string para número multiplicando por 1
    let numero = entrada * 1;

    // Armazena o número digitado no array na posição i
    numeros[i] = numero;

    // Verifica se o número é par
    if (numero % 2 === 0) {
        // Se for par, adiciona à soma dos pares
        somaPares = somaPares + numero;
    }

    // Incrementa o contador para passar para a próxima iteração
    i = i + 1;
}

// Exibe o resultado da soma dos números pares
alert("A soma dos números pares é: " + somaPares);
