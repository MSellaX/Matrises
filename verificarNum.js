let numeros = [];
let i = 0;

while (i < 10) {
    let entrada = prompt("Digite um número inteiro (" + (i + 1) + "/10):");
    let numero = entrada * 1; // Converte para número
    numeros[i] = numero;
    i = i + 1;
}

let entradaBusca = prompt("Digite um número para ver quantas vezes ele aparece:");
let numeroBuscado = entradaBusca * 1; // Converte para número
let contador = 0;
let j = 0;

while (j < 10) {
    if (numeros[j] === numeroBuscado) {
        contador = contador + 1;
    }
    j = j + 1;
}

alert("O número " + numeroBuscado + " aparece " + contador + " vez(es) no vetor.");