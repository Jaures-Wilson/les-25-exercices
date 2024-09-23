// EXERCICE 1
function truncateANumberTo4DigitsAfterDecimalPoint(){ 
    let euler = 2.71828
    return euler.toFixed(4);
}


//EXERCICE 2
const findMax = (arg) => {
     return Math.max(...arg)
 }



//EXERCICE 3
function display(quantity,product,price) {
    return `You purchased ${quantity} units of ${product} for ${price}`;
}

 

//EXERCICE 4
function combinedArr(array1,array2) {
        return [...new Set(array1.concat(array2))].sort((a,b)=>a-b) 
    }
//console.log(combinedArr([1,2,3],[1,2,3,4,5]))


// EXERCICE 5
function destructionOnCar(){
    const car = {make : 'Cameroun',model : 'toyota',year : '2012'}
    const {make : val1, model : val2, year = 'unknown'} = car
    return [val1, val2, year]
}
console.log(destructionOnCar())


// EXERCICE 6 
const calculateArea = (radius) => {
     return radius !== undefined ? radius * radius * Math.PI : "radius is missing"
}
  



// EXERCICE 7
function average(...arg) {
    let amount = arg.reduce((accumulator, currentValue) => accumulator += currentValue ,0)
    return Math.round(amount/arg.length*100)/100;
}

  


//EXERCICE 8
function newArray(array) { 
    return array.map(str => str.split('').reverse().join('')) 
}  



// EXERCICE 9
function displayBooksWithMoreThan300Pages(arrayObject){
    return arrayObject.filter(book => book.pages > 300)
}




//EXERCICE 10
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successfully!')
        },Math.floor(Math.random()*6000)+2000)
    })
} 




module.exports = {
    truncateANumberTo4DigitsAfterDecimalPoint,
    findMax,
    display,
    combinedArr,
    destructionOnCar,
    calculateArea,
    average,
    newArray,
    displayBooksWithMoreThan300Pages,
    fetchData
}  