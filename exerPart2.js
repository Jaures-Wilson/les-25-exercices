// EXERCICE 1
/* function FindTheRightNumber(inputNumber){
    return Math.round(Math.random()*9)+1 === inputNumber ? 'Good Work' : 'Not matched'
}

console.log(FindTheRightNumber(5))  */


// EXERCICE 2
/* function daysLeftUntilNextChrisams(){
    let christmas = new Date((new Date).getFullYear(),11,25)
    if(christmas < (new Date)){
        christmas = new Date(current.getFullYear()+1,11,25)
    }  
    return Math.floor((christmas - (new Date)) / (1000*60*60*24))  
}

console.log(daysLeftUntilNextChrisams())  */
   



// EXERCICE 3
/* function productAndMultiplicationOfTwoNumber(value1,value2){
    if(value1 == 0 && value2 == 0){
        return 'la division de la première valeur par la deuxième est indéterminée et le produit des deux valeurs est : ' + value1*value2
    }else{ 
        return 'le produit des deux valeurs est : '+ value1*value2 +' et la division de la première valeur par la deuxième est : '+ value1/value2
    }  
}

console.log(productAndMultiplicationOfTwoNumber(2,3))  */



// EXERCICE 4
/* function getLongestString(array) {
    let longerString = array.reduce((longer, current) => {
        return longer.length >= current.length ? longer : current
    }, 0)
    return longerString;
}
let exampleArray = ["koki", "couscous", "banane malaxée", "eren yagers", "", 5, 984];
console.log('la chaine la plus longue du tableau est : ', getLongestString(exampleArray))  */ 



// EXERCICE 5
/* function highNumber(array){
    const newArray = array.filter(a => a % 2 === 0).reduce((accumulator,currentValue) => currentValue > accumulator ? accumulator = currentValue : accumulator = accumulator )
    return newArray
}

const integerExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 983, 2, -1000, -9, 0];
console.log(highNumber(integerExample))  */




// EXERCICE 6
/* function characterDeleteRepetitive(str){
    let arrStr = str.split('');
     const uniqueStr = [...new Set(arrStr)]

     return uniqueStr.join('');
}

let exampleString = "j'essaie d'écrire une chaîne choisie au hasard juste pour&é(§è!çà) essayer"
console.log(characterDeleteRepetitive(exampleString))  */ 



// EXERCICE 7
/* let sum = 0;
function sumCubedNumbers(number){
    if(number >= 1){
        sum += Math.pow(number,3);
        sumCubedNumbers(number-1)
    } else {
        return "enter a positive number greater than 1 !!!";
    } 
    return sum;
}

console.log(sumCubedNumbers(3))  */





// EXERCICE 8
/* function similarityCheck(obj1,obj2){
    return Object.keys(obj2).every(a => obj1.hasOwnProperty(a) && obj1[a] === obj2[a]) ? "the first one contains equivalent property values to the second one" : "the first one doesn't contains equivalent property values to the second one"
}

const example1 = { prop1 : 'val1', prop2 : 'val2', prop3 : 'val3', prop4 : 'val4', prop5 : 'val5', prop6 : 'val6', prop7 : 'val7', prop8 : 'val8', prop9 : 'val9', prop10 : 'val10'}
const example2 = { prop5 : 'val5', prop6 : 'val6', prop7 : 'val7', prop8 : 'val8', prop9 : 'val9', prop10 : 'val10'}
console.log(similarityCheck(example1,example2)) */



// EXERCICE 9
/* function filterArray(arr, valuesToRemove) {
    //valuesToRemove
    return arr.filter(element => !valuesToRemove.includes(element));
}
 */



//EXERCICE 10
/* function extraction(array,...indexArray){
    return indexArray.reduce((accumulator,currently) => accumulator.concat(array[currently]),[])
}
console.log(extraction([1,2,3,4,5,6],1,2,5))  */



// EXERCICE 11
/* function deletePropertyOfArray(object, property) {
    let objectBefore = { ...object };  
    delete object[property];           
    return { before: objectBefore, after: object };  
}
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
}; 
console.log(deletePropertyOfArray(student, "rollno"));   */



// EXERCICE 12
/* class Cylinder {
    constructor(height, radius){
        this.height = height,
        this.radius = radius
    }
    volume() {
        let result = this.height*Math.PI*Math.pow(this.radius,2)
        return result.toFixed(4)
    }
}
let cylinderExample = new Cylinder(5.989819231,94.13516)
console.log(cylinderExample.volume())   */



// EXERCICE 13
/* function clock(second){
    if(second > 0){
        console.log((new Date()).getHours(),':',(new Date()).getMinutes(),':',(new Date()).getSeconds());
        setTimeout(() => {clock(second-1)},1000);
    }
}
clock(10)    */ 



// EXERCICE 14
/* function checkIfStringIsLowerCaseOrUpperCase(string){
    return string === string.toLowerCase() ? "la chaine est écrite en minuscule" : "la chaine n'est pas écrite en minuscule"
}

console.log(checkIfStringIsLowerCaseOrUpperCase("andkajNdza"))  */




// EXERCICE 15
/* function add(num1,num2){
    return new Promise((resolve,reject) => {
        if(arguments.length === 2){
            resolve(num1+num2)
        }else{
            reject('Must provide two parameters')
        }
    })
}
add(1,5)
    .then((result) => {
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })    */

        