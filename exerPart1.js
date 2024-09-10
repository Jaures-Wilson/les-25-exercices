// EXERCICE 1
/* let euler = 2.71828
console.log(euler.toFixed(4)) 
 */



//EXERCICE 2
/* const findMax = (arg) => {
     return Math.max(...arg)
 }
console.log(findMax([1,2,3,6,5,4,9,8,7])); */ 



//EXERCICE 3
/* function display(quantity,product,price) {
    return `You purchased ${quantity} units of ${product} for ${price}`;
}
console.log(display(3,'biscuit',500))  */
 



//EXERCICE 4
/* function combinedArr(array1,array2) {
        return [...array1,...array2].sort((a,b)=>a-b) 
    }
console.log(combinedArr([984,54,684,6841,35,84],[651,98,65,684,5.1,91,3541,651,99])) */
 


// EXERCICE 5
/* const car = {
    make : 'Cameroun',
    model : 'toyota',
    year : 'unknown'
}
function destructionOnCar(obj){
    const {make : val1, model : val2} = obj
    return [val1, val2]
}
console.log(destructionOnCar(car))    */



// EXERCICE 6 
/* const calculateArea = (radius) => {
     return radius !== undefined ? radius * radius * Math.PI : "radius is missing"
}
console.log(calculateArea(4))   */



// EXERCICE 7
/* function average(...arg) {
    let amount = arg.reduce((accumulator, currentValue) => accumulator += currentValue ,0)
    return Math.round(amount/arg.length*100)/100;
}
console.log(average(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,99,-150));  */
  


//EXERCICE 8
/* function newArray(array) { 
    return array.map(str => str.split('').reverse().join('')) 
}

let example = ["koki", "couscous", "banane malaxée", "eren yagers", ""];
console.log(newArray(example))   */ 



// EXERCICE 9
/* library.filter(book => book.pages > 300)   */



//EXERCICE 10
/*  function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successfully!')
        },Math.floor(Math.random()*6000)+2000)
    })
} 
fetchData()
    .then((item) => {
        console.log(item)
    }) 
 */