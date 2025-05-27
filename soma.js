let numeros = [];
let somaPares = 0;
let i = 0;

while (i < 10) {
    let entrada = prompt("Digite um número inteiro (" + (i + 1) + "/10):");
    let numero = entrada * 1; // Multiplicando por 1 transforma string em número
    numeros[i] = numero;

    if (numero % 2 === 0) {
        somaPares = somaPares + numero;
    }

    i = i + 1;
}

alert("A soma dos números pares é: " + somaPares);
