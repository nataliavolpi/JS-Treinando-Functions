//Escreva um programa onde, você chame uma função, e ela diga a hora exata!
//Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

const time = new Date().toLocaleTimeString('pt-BR');

console.log (time)

const year = new Date().getFullYear();

console.log (year)