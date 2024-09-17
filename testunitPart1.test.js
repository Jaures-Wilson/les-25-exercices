const {
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
} = require('./exerPart1');



// EXERCICE 1
describe("the function do the truncate of euler's number", () =>{
    test('the function should return a float numbre fixedTo(4)', () => {
        expect(truncateANumberTo4DigitsAfterDecimalPoint()).toBe("2.7183");
    }); 
})



// EXERCICE 2
describe("the function return the high value in an array", () =>{ 
    test('the function should return a number', () => {
        expect(findMax([1,2,3,6,5,4,9,8,7])).toBe(9);
      }); 
})



// EXERCICE 3
describe("the function inform us on the quantity, product and price of a command", () => {
    test('the function should be return a string', () => {
        expect(display(3,'biscuit',500)).toBe(`You purchased 3 units of biscuit for 500`);
      });
})
 


// EXERCICE 4
describe("the function return an array with classed values", () => {
    test("the function should be return an array", () => {
        expect(combinedArr([984,54,684,6841,35,84],[651,98,65,684,5.1,91,3541,651,99])).toStrictEqual([5.1,  35,  54,   65,   84, 91,  98,  99,  651,  651, 684, 684, 984, 3541, 6841]);
    });
}); 



// EXERCICE 5 
describe("the function delete a property of object", () =>{ 
    test('the function should return an object', () => {
        expect(destructionOnCar({make : 'Cameroun',model : 'toyota',year : 'unknown'})).toStrictEqual(["Cameroun", "toyota"]);
    }); 
})


// EXERCICE 6
describe("the function return the area of a circle", () =>{ 
    test('the function should return a value', () => {
        expect(calculateArea(4)).toStrictEqual(50.26548245743669);
    }); 
})



//EXERCICE 7
describe("the function return the average of all the value", () =>{ 
    test('the function should return a value', () => {
        expect(average(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,99,-150)).toStrictEqual(4.06);
    }); 
})


// EXERCICE 8
describe("the function return a new array with the inversed values", () =>{ 
    test('the function should return an array', () => {
        expect(newArray(["koki", "couscous", "banane malaxée", "eren yagers", ""])).toStrictEqual([ 'ikok', 'suocsuoc', 'eéxalam enanab', 'sregay nere', '' ]);
    }); 
})


// EXERCICE 9
describe("the function return the average of all the value", () =>{ 
    test('the function should return a value', () => {
        expect(displayBooksWithMoreThan300Pages([{title:'val', pages:51},{title:'val1' , pages:500},{title:'val2' , pages:200},{title:'val3' , pages:651}, {title:'val4' , pages:0},{title:'val5' , pages:651},{title:'val6' , pages:499}])).toStrictEqual([{ title: 'val1', pages: 500 },{ title: 'val3', pages: 651 },{ title: 'val5', pages: 651 },{ title: 'val6', pages: 499 }]);
    }); 
})


// EXERCICE 10
describe("the function return the result of a promise after  2 or 8 seconds", () =>{ 
    test('the function should return a string', async() => {
        await expect(fetchData()).resolves.toStrictEqual("Data fetched successfully!");
    }); 
})