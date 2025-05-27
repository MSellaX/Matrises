// Cria um array vazio para armazenar os números digitados
let numeros = [];

// Inicializa o contador para o laço de entrada de dados
let i = 0;

// Loop que solicita 10 números ao usuário
while (i < 10) {
    // Pede ao usuário que digite um número inteiro (mostrando o número da entrada atual)
    let entrada = prompt("Digite um número inteiro (" + (i + 1) + "/10):");

    // Converte a entrada de string para número multiplicando por 1
    let numero = entrada * 1;

    // Armazena o número no vetor na posição i
    numeros[i] = numero;

    // Incrementa o contador i
    i = i + 1;
}

// Solicita ao usuário um número para buscar no vetor
let entradaBusca = prompt("Digite um número para ver quantas vezes ele aparece:");

// Converte a entrada para número
let numeroBuscado = entradaBusca * 1;

// Inicializa o contador de ocorrências
let contador = 0;

// Inicializa outro contador para o segundo laço
let j = 0;

// Loop que percorre o vetor para contar as ocorrências do número buscado
while (j < 10) {
    // Se o número na posição j for igual ao número buscado
    if (numeros[j] === numeroBuscado) {
        // Incrementa o contador
        contador = contador + 1;
    }

    // Incrementa j para continuar o loop
    j = j + 1;
}

// Exibe a quantidade de vezes que o número buscado aparece no vetor
alert("O número " + numeroBuscado + " aparece " + contador + " vez(es) no vetor.");
