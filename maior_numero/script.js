console.log("Elementos: ")
const elementos = document.getElementById("dados")
console.log(elementos)

console.log("Dados: ")
const dados = elementos.innerHTML
console.log(dados)

console.log("Separando dados e colocando em um vetor: ")
const vetorDados = dados.split('\n')
console.log(vetorDados)

console.log("Convertendo strings em números: ")
const vetorNumeros = vetorDados.map(x => Number(x))
console.log(vetorNumeros)

let maior = vetorNumeros[0]
for (let i = 1; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] > maior) {
        maior = vetorNumeros[i]
    }
}
console.log(`Maior número: ${maior.toFixed(2)}`)