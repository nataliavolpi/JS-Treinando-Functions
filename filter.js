const list = [20,3,234,12,17,541,6,87,275,1000] 
//novo array apenas com n pares e divisíveis por 5

const newList = list.filter((number) => {
   if (number%2 == 0 && number%5 == 0) return true;
    return false
});

  //  console.log(newList)

  const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    { name: 'Facebook', marketValue: 383, CEO: 'Markinho', foundedOn: 2004},
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
  ];
  // novo array apenas com empresas fundadas após 1975 e valor de mercado >2mi

  /*const listCompanies = companies.filter((dados) => {
    if (dados.foundedOn > 1975 && dados.marketValue > 200) return true
    else return false
  });*/

//   const allMarketValues = companies.reduce(((acc, current) => acc + current.marketValue), 0);

const add10PercentMarketValue = company => {
    company.marketValue += company.marketValue *0.10
    return company
}

const oldCompanies = company =>  company.foundedOn < 2000

const allOldCompany = (acc, current) => acc + current.marketValue

const actualCompanies = companies
.map(add10PercentMarketValue)
.filter(oldCompanies)
.reduce(allOldCompany,0)

console.log(actualCompanies)