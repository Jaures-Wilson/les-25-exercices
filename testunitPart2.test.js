const {
    FindTheRightNumber,
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
    clock,
    add
} = require("./exerPart2")


// EXERCICE 1
describe("the function permit to verify if the user have the good number", () =>{
    
    beforeEach(() => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4); 
    });

    afterEach(() => {
        jest.spyOn(Math, 'random').mockRestore(); 
    }) 

    test('should return "Good Work" when the random number equals inputNumber', () => {
        expect(FindTheRightNumber(5)).toBe('Good Work');
    });

    test('should return "Not matched" when the random number does not equal inputNumber', () => {
        expect(FindTheRightNumber(3)).toBe('Not matched');
    })     
})



// EXERCICE 2
describe('daysLeftUntilNextChristmas', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('should return the correct number of days when today is before Christmas', () => {
        const exampleDate = new Date(2023, 11, 1); 
        jest.setSystemTime(exampleDate);
        expect(daysLeftUntilNextChristmas()).toBe(24); 
    });
})



// EXERCICE 3
describe("the function return the product and division of two numbers", () =>{ 
    test('the function should return a value', () => {
        expect(productAndDivisionionOfTwoNumber(2,3)).toStrictEqual('the product is: 6 and division is: 0.6666666666666666');
    }); 
})


// EXERCICE 4
describe("the function return the longest string of an array", () =>{ 
    test('the function should return a string', () => {
        expect(getLongestString(["koki", "couscous", "banane malaxée", "eren yagers", ""])).toBe("banane malaxée");
    }); 
}) 


//EXERCICE 5
describe("the function return the higer number of an array", () =>{ 
    test('the function should return a number', () => {
        expect(highNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 983, 2, -1000, -9, 0])).toStrictEqual(10);
    }); 
}) 


//EXERCICE 6
describe("the function permit to delete repetitive character", () =>{ 
    test('the function should return a string', () => {
        expect(characterDeleteRepetitive("j'essaie d'écrire une chaîne choisie au hasard juste pour&é(§è!çà) essayer")).toStrictEqual("j'esai décrunhîotp&(§è!çà)y");
    }); 
}) 

// EXERCICE 7
describe("the function permit to calculate the sum of cubes of all integer from 1 to the number", () =>{ 
    test('the function should return a number', () => {
        expect(sumCubedNumbers(4)).toStrictEqual(100);
    }); 
}) 


// EXERCICE 8
describe("the function verify if an object contain the same value that another", () =>{ 
    test('the function should return a string', () => {
        expect(similarityCheck({ prop1 : 'val1', prop2 : 'val2', prop3 : 'val3', prop4 : 'val4', prop5 : 'val5', prop6 : 'val6'},{ prop5 : 'val5', prop6 : 'val6'} )).toStrictEqual("equivalent property");
    }); 
})



// EXERCICE 9
describe("the function permit to filter out the specified values from a specified array", () =>{ 
    test('the function should return an array', () => {
        expect(filterArray([1,2,3,4,5,6], 5) ).toStrictEqual([1,2,3,4,6]);
    }); 
}) 


// EXERCICE 10
describe("the function extract out the values at the specified indexes from a array", () =>{ 
    test('the function should return an array', () => {
        expect(extraction([1,2,3,4,5,6],1,2,5)).toStrictEqual([2, 3, 6]);
    }); 
}) 



// EXERCICE 11
describe("the function permit to delete a property", () =>{ 
    test('the function should return a object', () => {
        expect(deletePropertyOfArray({name: "David Rayy",sclass: "VI",rollno: 12}, "rollno")).toStrictEqual({before: { name: 'David Rayy', sclass: 'VI', rollno: 12 }, after: { name: 'David Rayy', sclass: 'VI' }});
    }); 
}) 



// EXERCICE 12
describe("the function permit to calculate the volume of a cylinder", () =>{ 
    test('the function should return a number', () => {
        expect(calculateVolumeCylinder(5.989819231,94.13516)).toStrictEqual("166750.5668");
    }); 
})



// EXERCICE 13
describe('clock', () => {
    beforeAll(() => {
        jest.useFakeTimers(); 
        jest.spyOn(console, 'log');
    });

    afterAll(() => {
        jest.useRealTimers(); 
    });

    afterEach(() => {
        jest.clearAllMocks(); 
    });

    test('should call console.log every second for the given duration', () => {
        clock(3); 
        jest.advanceTimersByTime(1000);
        expect(console.log).toHaveBeenCalledTimes(2); 
    });
});




// EXERCICE 14
describe("the function permit to calculate the volume of a cylinder", () =>{ 
    test('the function should return a string', () => {
        expect(checkIfStringIsLowerCaseOrUpperCase("andkajNdza")).toStrictEqual("Not lowercase");
    }); 
})



// EXERCICE 15
describe("the function return a promise which sum two values", () =>{ 
    test('the function should return a number', async() => {
        await expect(add(1,5)).resolves.toBe(6);
    }); 
})