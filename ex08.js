/*Escreva um programa onde, você cria uma função geradora de desconto. A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:
Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:
Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra. */

function calculateDiscount (name, value, firstBuy, inCash){

    if (firstBuy && inCash) {

        if (value > 1000) {
            let discount = value * (30 / 100)
            let newValue = value - discount

            console.log(`Obrigada pela compra, ${name}! 
        Você ganhou um desconto de 30% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)

        } else if (value < 500) {
            let discount = value * (20 / 100)
            let newValue = value - discount

            console.log(`Obrigada pela compra, ${name}! 
        Você ganhou um desconto de 20% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)

        } else {
            let discount = value * (25 / 100)
            let newValue = value - discount

            console.log(`Obrigada pela compra, ${name}! 
        Você ganhou um desconto de 25% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)
        }

    }

    if (firstBuy && !inCash){

        if (value > 1000){
            let discount = value * (20 / 100)
            let newValue = value - discount

            console.log(`Obrigada pela compra, ${name}! 
        Você ganhou um desconto de 20% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)
        } else if (value < 500){
            let discount = value * (10 / 100)
            let newValue = value - discount

            console.log(`Obrigada pela compra, ${name}! 
        Você ganhou um desconto de 10% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)
        }else{
            let discount = value * (15 / 100)
            let newValue = value - discount

            console.log(`Obrigada pela compra, ${name}! 
        Você ganhou um desconto de 15% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)
        }
        
    }

    if (!firstBuy && inCash){

        if (value > 1000){
            let discount = value * (20 / 100)
            let newValue = value - discount

            console.log(`Obrigada por comprar novamente conosco, ${name}! 
        Você ganhou um desconto de 20% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)
        } else if (value < 500){
            let discount = value * (10 / 100)
            let newValue = value - discount

            console.log(`Obrigada por comprar novamente conosco, ${name}! 
        Você ganhou um desconto de 10% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)            
        }else{
            let discount = value * (15 / 100)
            let newValue = value - discount

            console.log(`Obrigada por comprar novamente conosco, ${name}! 
        Você ganhou um desconto de 15% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)
        }
        
    }

    if (!firstBuy && !inCash){

        if (value > 1000){
            let discount = value * (10 / 100)
            let newValue = value - discount

            console.log(`Obrigada por comprar novamente conosco, ${name}! 
        Você ganhou um desconto de 10% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)  
        } else if (value < 500){
            const cupon = Math.floor(Math.random() * (20 - 10) + 10);
            console.log(`Obrigada por comprar novamente conosco, ${name}! 
                 Valor total da compra: R$${value.toFixed(2)}
        Você ganhou um cupom de desconto de ${cupon}% para sua próxima compra.` );
        }else{
            let discount = value * (5 / 100)
            let newValue = value - discount

            console.log(`Obrigada por comprar novamente conosco, ${name}! 
        Você ganhou um desconto de 05% em sua compra.
            Valor total da compra: R$${value.toFixed(2)},
            Valor total com desconto: R$${newValue.toFixed(2)}`)              
        }
        
    }
}

calculateDiscount('Americanas', 200, false, false)