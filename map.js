/*const list = [
    { name: "Rodolfo", vip: true },
    { name: "Maria", vip: false },
    { name: "João", vip: true },
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
];

const sectorList = list.map( client => {
    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? 'Black' : 'Green'
    }
    return newList
});

console.log(sectorList)*/

//Segundo Exercício
const students =[
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "João", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 },
];

const result = students.map((grade) => {
    const newList = {
        name: grade.name,
        result: grade.testGrade >= 5 ? 'Approved' : 'Disapproved'
    }
    return newList
});

console.log(result)