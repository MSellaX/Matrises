const numeros = [];
const numerosSemDuplicatas = [];
let tamanhoSemDuplicatas = 0;

// Pede 10 "números" (na verdade strings) e armazena no vetor
for (let i = 0; i < 10; i++) {
  const num = prompt("Digite o número " + (i + 1) + ":");
  numeros[i] = num; // guardando como texto
}

// Remove duplicados (comparando texto)
for (let i = 0; i < 10; i++) {
  let existe = false;
  
  for (let j = 0; j < tamanhoSemDuplicatas; j++) {
    if (numeros[i] === numerosSemDuplicatas[j]) {
      existe = true;
      break; // já encontrou, pode sair do loop
    }
  }
  
  if (!existe) {
    numerosSemDuplicatas[tamanhoSemDuplicatas] = numeros[i];
    tamanhoSemDuplicatas++;
  }
}

// Exibe os vetores
let resultadoOriginal = "Original: ";
for (let i = 0; i < 10; i++) {
  resultadoOriginal += numeros[i];
  if (i < 9) {
    resultadoOriginal += ", ";
  }
}

let resultadoSemDuplicatas = "Numeros duplicados: ";
for (let i = 0; i < tamanhoSemDuplicatas; i++) {
  resultadoSemDuplicatas += numerosSemDuplicatas[i];
  if (i < tamanhoSemDuplicatas - 1) {
    resultadoSemDuplicatas += ", ";
  }
}

alert(resultadoOriginal);
alert(resultadoSemDuplicatas);
