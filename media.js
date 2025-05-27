// Cria um vetor vazio para armazenar os números digitados
let numeros = [];

// Variável para armazenar a soma dos números
let soma = 0;

// Contador para o laço de entrada
let i = 0;

// Loop para ler 8 números do usuário
while (i < 8) {
    // Solicita um número real ao usuário
    let entrada = prompt("Digite um número real (" + (i + 1) + "/8):");

    // Converte a entrada de string para número
    let numero = entrada * 1;

    // Armazena o número no vetor
    numeros[i] = numero;

    // Soma o número à variável 'soma'
    soma = soma + numero;

    // Incrementa o contador
    i = i + 1;
}

// Calcula a média dos números digitados
let media = soma / 8;

// Cria uma string para exibir a média e os números acima dela
let resultado = "A média é: " + media + "\nNúmeros acima da média:\n";

// Novo contador para percorrer o vetor
let j = 0;

// Loop para encontrar os números acima da média
while (j < 8) {
    // Se o número for maior que a média, adiciona ao resultado
    if (numeros[j] > media) {
        resultado = resultado + numeros[j] + "\n";
    }

    // Incrementa o contador
    j = j + 1;
}

// Exibe o resultado final com a média e os números acima dela
alert(resultado);
