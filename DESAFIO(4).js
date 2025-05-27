// Cria dois vetores:
// - 'numeros' para armazenar os 10 valores digitados (como texto)
// - 'numerosSemDuplicatas' para guardar apenas os valores únicos
const numeros = [];
const numerosSemDuplicatas = [];

// Variável para controlar o tamanho atual do vetor sem duplicatas
let tamanhoSemDuplicatas = 0;

// Solicita 10 valores ao usuário
for (let i = 0; i < 10; i++) {
  // Usa prompt para ler um "número" (na verdade, uma string)
  const num = prompt("Digite o número " + (i + 1) + ":");

  // Armazena o valor no vetor principal
  numeros[i] = num; // guardando como texto (ex: "10", "05")
}

// Processo para remover duplicatas (comparando os textos exatamente como foram digitados)
for (let i = 0; i < 10; i++) {
  let existe = false; // Flag para verificar se o valor já está no vetor de sem duplicatas

  // Percorre o vetor de valores únicos já armazenados
  for (let j = 0; j < tamanhoSemDuplicatas; j++) {
    // Se encontrar o mesmo valor (mesma string), marca como existente
    if (numeros[i] === numerosSemDuplicatas[j]) {
      existe = true;
      break; // Já encontrou, pode sair do loop
    }
  }

  // Se o valor ainda não está no vetor sem duplicatas, adiciona ele
  if (!existe) {
    numerosSemDuplicatas[tamanhoSemDuplicatas] = numeros[i];
    tamanhoSemDuplicatas++; // Atualiza o tamanho
  }
}

// Monta uma string com os valores originais digitados
let resultadoOriginal = "Original: ";
for (let i = 0; i < 10; i++) {
  resultadoOriginal += numeros[i];
  if (i < 9) {
    resultadoOriginal += ", "; // Adiciona vírgula entre os valores (exceto no último)
  }
}

// Monta uma string com os valores únicos (sem duplicatas)
let resultadoSemDuplicatas = "Numeros duplicados: ";
for (let i = 0; i < tamanhoSemDuplicatas; i++) {
  resultadoSemDuplicatas += numerosSemDuplicatas[i];
  if (i < tamanhoSemDuplicatas - 1) {
    resultadoSemDuplicatas += ", "; // Adiciona vírgula entre os valores
  }
}

// Exibe os dois resultados em alertas separados
alert(resultadoOriginal);
alert(resultadoSemDuplicatas);
