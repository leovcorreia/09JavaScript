console.log("Pegando elementos do HTML")
const elementos = document.getElementById("dados")
console.log(elementos)

console.log("Dados:")
const dados = elementos.innerHTML
console.log(dados)

console.log("Separando dados e colocando em vetor: ")
const dadosVetor = dados.split('\n')
console.log(dadosVetor)

console.log("Convertendo strings em números: ")
const numerosVetor = dadosVetor.map(x => Number(x))
console.log(numerosVetor)

console.log("Calculando média ponderada: ")
let soma = 0;
for (let i = 0; i < numerosVetor.length; i++) {
    if (i == 0) {
        soma += numerosVetor[i] * 2;
    } else if (i == 1) {
        soma += numerosVetor[i] * 3;
    } else {
        soma += numerosVetor[i] * 5;
    }
}

let mediaPonderada = soma / 10
console.log(`Média ponderada: ${mediaPonderada.toFixed(1)}`)

console.log("Convertendo média ponderada para string: ")
const mediaPonderadaStr = mediaPonderada.toString();
console.log(mediaPonderadaStr);    