/*A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; 
- O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função! */

//criar um array de pessoas da cidade:
const people = [
    {
        numberOfChildren: 2,
        salary: 2000
    },
    {
        numberOfChildren: 5,
        salary: 3000
    },
    {
        numberOfChildren: 0,
        salary: 2500
    },
    {
        numberOfChildren: 2,
        salary: 1000
    },
    {
        numberOfChildren: 3,
        salary: 2300
    },
    {
        numberOfChildren: 1,
        salary: 200
    },
    {
        numberOfChildren: 0,
        salary: -2000
    }
]

/*function findAverageAndHighSalary(peopleInformation) {

    let averageSalary = 0;
    let averageChildren = 0;
    let highestSalary = 0;

    for (let i = 0; i <= peopleInformation.lenght; i++) {

        const salary = peopleInformation[i].salary
        const children = peopleInformation[i].numberOfChildren

        if (salary > highestSalary) highestSalary = salary

        if (salary < 0) {
            console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
            console.log(`Maior salário R$${highestSalary}`)
            break
        } else {
            averageSalary = averageSalary + salary;
            averageChildren += children
        }
    }
}

findAverageAndHighSalary (people) */
//Não rodou essa versão, não sei o porque

function findAverageAndHighSalary(peopleInformation) {
    let i = 0;
    let averageSalary = 0;
    let averageChildren = 0;
    let highestSalary = 0;

    while (peopleInformation[i].salary > 0) {
        averageSalary = averageSalary + peopleInformation[i].salary
        averageChildren += peopleInformation[i].numberOfChildren
        peopleInformation[i].salary > highestSalary ? highestSalary = peopleInformation[i].salary : highestSalary = highestSalary
        i++
    }

    console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
    console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
    console.log(`Maior salário R$${highestSalary}`)

}//essa RODOU certinho

findAverageAndHighSalary(people)