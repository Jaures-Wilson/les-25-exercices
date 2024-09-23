// EXERCICE 1
function findTheRightNumber(inputNumber){
    return Math.round(Math.random()*9)+1 === inputNumber ? 'Good Work' : 'Not matched';
} 


// EXERCICE 2
function daysLeftUntilNextChristmas(){
    let christmas = new Date((new Date).getFullYear(),11,25)
    if(christmas < (new Date)){
        christmas = new Date((new Date).getFullYear()+1,11,25)
    }  
    return Math.floor((christmas - (new Date)) / (1000*60*60*24))  
}

   

// EXERCICE 3
function productAndDivisionionOfTwoNumber(value1,value2){
    return `the product is: ${value1*value2} and division is: ${value1/value2}`  
}



// EXERCICE 4
function getLongestString(array) {
    let longerString = array.reduce((longer, current) => {
        return longer.length >= current.length ? longer : current
    }, 0)
    return longerString;
}



// EXERCICE 5
function highNumber(array){
    const newArray = array.filter(a => a % 2 === 0).reduce((accumulator,currentValue) => currentValue > accumulator ? accumulator = currentValue : accumulator = accumulator )
    return newArray
}



// EXERCICE 6
function characterDeleteRepetitive(str){
    let arrStr = str.split('');
     const uniqueStr = [...new Set(arrStr)]
     return uniqueStr.join('');
}

  


// EXERCICE 7
function sumCubedNumbers(number){
    if(number === 0){
        return 0;
    }
    return Math.pow(number,3) + sumCubedNumbers(number - 1);
} 


// EXERCICE 8
function similarityCheck(obj1,obj2){
    return Object.keys(obj2).every(a => obj1.hasOwnProperty(a) && obj1[a] === obj2[a]) ? "equivalent property" : "different property"
}




// EXERCICE 9
function filterArray(arr, valuesToRemove) {
    return arr.filter(element => valuesToRemove !== element);
} 




//EXERCICE 10
function extraction(array,...indexArray){
    return indexArray.reduce((accumulator,currently) => accumulator.concat(array[currently]),[])
} 

 


// EXERCICE 11
function deletePropertyOfArray(object, property) {
    let objectBefore = { ...object };  
    delete object[property];           
    return { before: objectBefore, after: object };  
}
  



// EXERCICE 12
class Cylinder {
    constructor(height, radius){
        this.height = height,
        this.radius = radius
    }
    volume() {
        let result = this.height*Math.PI*Math.pow(this.radius,2)
        return result.toFixed(4)
    }
}

function calculateVolumeCylinder(height,radius){
    return (new Cylinder(height,radius)).volume()
} 




// EXERCICE 13
function clock(second) {
    if (second > 0) {
        console.log((new Date()).getHours(), ':', (new Date()).getMinutes(), ':', (new Date()).getSeconds());
        timerId = setTimeout(() => { clock(second - 1); }, 1000);
    } else {
        clearTimeout(timerId); 
    }
}
   



// EXERCICE 14
function checkIfStringIsLowerCaseOrUpperCase(string){
    return string === string.toLowerCase() ? "lowercase" : "Not lowercase"
} 

 



// EXERCICE 15
function add(num1,num2){
    return new Promise((resolve,reject) => {
        if(arguments.length === 2){
            resolve(num1+num2)
        }else{
            reject('Must provide two parameters')
        }
    })
}
  

      
module.exports = {
    findTheRightNumber,
    daysLeftUntilNextChristmas,
    productAndDivisionionOfTwoNumber,
    getLongestString,
    highNumber,
    characterDeleteRepetitive,
    sumCubedNumbers,
    similarityCheck,
    filterArray,
    extraction,
    deletePropertyOfArray,
    calculateVolumeCylinder,
    checkIfStringIsLowerCaseOrUpperCase,
    add,
    clock 
}