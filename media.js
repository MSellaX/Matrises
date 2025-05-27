let numeros = [];
let soma = 0;
let i = 0;

while (i < 8) {
    let entrada = prompt("Digite um número real (" + (i + 1) + "/8):");
    let numero = entrada * 1; // Converte string para número
    numeros[i] = numero;
    soma = soma + numero;
    i = i + 1;
}

let media = soma / 8;
let resultado = "A média é: " + media + "\nNúmeros acima da média:\n";

let j = 0;
while (j < 8) {
    if (numeros[j] > media) {
        resultado = resultado + numeros[j] + "\n";
    }
    j = j + 1;
}

alert(resultado);