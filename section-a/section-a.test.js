// Not all functions are imported, be careful 👇
const {
    subtract,
    divide,
    isDivisibleBy,
    areaOrPerimeter,
    gradeAssignment,
    disemvowel,
    removeUrlAnchor,
    strEndsWith,
    numberToString
} = require("./section-a.js");

// Section A 01. Wrtite a smoke test
test('Smoke test to ensure that tests work', () => {
    expect(3*2).toBe(6);
});
// Section A 02. Test the subtraction() function

describe('Testing the subtract fucntion', () => {
    it('Should subtract a smaller number from a larger number and give the correct answer', () => {
        expect(subtract(4,2)).toBe(2);
        expect(subtract(10,7)).toBe(3);
    });
    it('Should subtract a larger number from a smaller number and give the correct negative number as an answer', () => {
        expect(subtract(2,4)).toBe(-2);
        expect(subtract(7,10)).toBe(-3);
    });
    it('Should subtract a negative number and provide a the correct answer', () => {
        expect(subtract(-2,-4)).toBe(2);
        expect(subtract(7,-10)).toBe(17);
    });
    it('Should subtract from a positive number from a negative number and give the correct answer', () => {
        expect(subtract(-2,4)).toBe(-6);
        expect(subtract(-7,10)).toBe(-17);
    });
});

// Section A 03. Test the divide() function

describe('Testing the divide function', () => {
    it('Should divide a larger number by a smaller number that will provide a whole answer', () => {
        expect(divide(4,2)).toEqual(2); //can use toEqual as this will provide a whole number answer without decimal points that would break the test
    });
    it('Should divide a larger number by a smaller number that will provide a decimal answer', () => {
        expect(divide(10,3)).toBeCloseTo(3.33);//using toBeCloseTo for this as it means that 'weird' JS maths thanks to binary and base 10 not getting along accurately won't cause a right answer to be wrong
    });
    it('Should throw an error if the denominator is 0 or is not a number', () => {
        expect(() => {
            divide(8,0)
        }).toThrow(`The value 0 cannot be used as the denominator`);
    });
});


// Section A 04. Test the isDivisibleBy() function

describe('Testting the isDivisibleBy function', () => {
    it('Should be truthy when the number provided is divisible by both a and b', () => {
        expect(isDivisibleBy(10,2,5)).toBeTruthy();
        expect(isDivisibleBy(2000,40,100)).toBeTruthy();
    });
    it('Should be falsy when the number provided is not divisible by a, but is divisible by b', () => {
        expect(isDivisibleBy(10,3,2)).toBeFalsy();
        expect(isDivisibleBy(2000,648,40)).toBeFalsy();
    });
    it('Should be falsy when the number provided is not divisible by b, but is divisible by a', () => {
        expect(isDivisibleBy(10,2,6)).toBeFalsy();
        expect(isDivisibleBy(2000,40,732)).toBeFalsy();
    });
    it('Should be falsy when the number provided is not divisible by both a and b', () => {
        expect(isDivisibleBy(10,6,3)).toBeFalsy();
        expect(isDivisibleBy(2000,648,732)).toBeFalsy();
    });
    it('Should be falsy if the number provided is not a number', () => {
        expect(isDivisibleBy('Hello',10,15)).toBeFalsy();
        expect(isDivisibleBy(true,2,4)).toBeFalsy();
    });
    it('Should be falsy if the a provided is not a number', () => { //this fails as the funtion doesn't check the input type and if one of the denominators is a true boolean value then it will output as truthy rather than falsy, can be fixed by changing the function 
        expect(isDivisibleBy(100,'Hello',10)).toBeFalsy();
        expect(isDivisibleBy(8,true,4)).toBeFalsy();
    });
    it('Should be falsy if the a provided is 0', () => {
        expect(isDivisibleBy(100,0,10)).toBeFalsy();
        expect(isDivisibleBy(8,0,4)).toBeFalsy();
        expect(isDivisibleBy(0,0,15)).toBeFalsy();
    });
    it('Should be falsy if the b provided is 0', () => {
        expect(isDivisibleBy(100,10,0)).toBeFalsy();
        expect(isDivisibleBy(8,4,0)).toBeFalsy();
        expect(isDivisibleBy(0,15,0)).toBeFalsy();
    });
    it('Should be truthy if the number provided is 0', () => {
        expect(isDivisibleBy(0,2,5)).toBeTruthy();
    });
});

// Section A 05. Test the areaOrPerimeter() function

describe('Testing the areaOrPerimeter function', () => {
    it('Should return the value of l*w if both length and width are the same whole number', () => {
        expect(areaOrPerimeter(3,3)).toBe(9);
    });
    it('Should return the value of l*w if both length and width are the same decimal number', () => {
        expect(areaOrPerimeter(2.5,2.5)).toBe(6.25);
    });
    it('Should return the value of 2*(l+w) when length and width are not equal', () => {
        expect(areaOrPerimeter(2,3)).toBe(10);
        expect(areaOrPerimeter(4,3)).toBe(14);
    });
});

// Section A 06. Test the gradeAssignment() function

// Section A 07. Test the disemvowel() function

// Section A 08. Test the removeUrlAnchor() function

// Section A 09. Test the strEndsWith() function

// Section A 10. Test the numberToString() function