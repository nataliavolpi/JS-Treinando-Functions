/*Faça um programa onde você chame uma função que calcule a taxa mensal de juros de um investimento.
Você deve enviar como argumento da função -Valor inicial investido - Valor atual do investimento -Meses que o valor está investido 
A função deve retornar a taxa de juros, já formatada. Ex: 2,5%
Fórmula: Calculo da taxa= juros [valor atual do investimento - valor inicial] / valor inicial*tempo */

function calculateRate(valorInicial, valorAtual, tempo){
    const taxaJuros = (valorAtual - valorInicial) / (valorInicial*tempo)

    console.log((taxaJuros * 100).toFixed(2) + '%') 
    //*100 pra transformar o valor em porcentagem, to fixed2 pra ter duas casas depois da virgula
}

calculateRate(1000, 1200, 10)