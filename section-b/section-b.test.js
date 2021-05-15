// Not all functions are imported, be careful 👇
const {
    largestValue,
    getEven,
    houseForSale,
    sortNumbers,
    countCharsInString
} = require("./section-b.js");

// Smoke Test
test('Smoke test to ensure that tests work', () => {
    expect(3*2).toBe(6);
});

describe('Testing the largestValue function', () => {
    it('Should take an array of positive and negative numbers and provide the largest number as the output', () => {
        expect(largestValue([7,8,9,10])).toBe(10);
        expect(largestValue([-5,-10])).toBe(-5);
    });
    it('Should take an array with positive and negative decimal numbers and provide the largest number as the output', () => {
        expect(largestValue([7.8,8.9,9.1,10.2])).toBe(10.2);
        expect(largestValue([-5.6,-10.2])).toBe(-5.6);
    });
});

describe('Testing the getEven function', () => {
    it('Should return only even numbers from the positive values provided in the array', () => {
        expect(getEven([22,44,66])).toEqual([22,44,66]);
        expect(getEven([33,55,77])).toEqual([]);
        expect(getEven([28,36,43])).toEqual([28,36]);
    });
    it('Should return only even numbers from the negative values provided in the array', () => {
        expect(getEven([-22,-44,-66])).toEqual([-22,-44,-66]);
        expect(getEven([-33,-55,-77])).toEqual([]);
        expect(getEven([-28,-36,-43])).toEqual([-28,-36]);
    });
    it('Should return only even numbers from the positive and negative valused provided in the array', () => {
        expect(getEven([22,-44,66])).toEqual([22,-44,66]);
        expect(getEven([33,-55,77])).toEqual([]);
        expect(getEven([28,-36,43])).toEqual([28,-36]);
    });
});

describe('Testing the houseForSale function', () => {
    it('Should return bath as true', () => {
        expect(houseForSale()).toHaveProperty('bath');
    });
    it('Should return that there are 4 bedrooms', () => {
        expect(houseForSale()).toHaveProperty('bedrooms',4);
    });
    it('Should return the appropriate kitchen properties', () => {
        expect(houseForSale()).toHaveProperty('kitchen.amenities',['oven','stove','washer']);
        expect(houseForSale()).toHaveProperty('kitchen.area',20);
        expect(houseForSale()).toHaveProperty(['kitchen','nice.oven']);
    });
});

describe('Testing the sortNumbers function', () => {
    it('Should return an array of whole, positive numbers in the correct, ascending order', () => {
        expect(sortNumbers([50,40])).toEqual([40,50]);
        expect(sortNumbers([123,24,24,0])).toEqual([0,24,24,123]);
    });
    it('Should return an array of whole, negative numbers in the correct, ascending order', () => {
        expect(sortNumbers([-40,-50])).toEqual([-50,-40]);
        expect(sortNumbers([-24,-24,-123])).toEqual([-123,-24,-24]);
    });
    it('Should return an array of decimal, positive numbers in the correct, ascending order', () => {
        expect(sortNumbers([50.5,40.3])).toEqual([40.3,50.5]);
        expect(sortNumbers([123.4,24.6,24.6])).toEqual([24.6,24.6,123.4]);
    });
    it('Should return an array of decimal, negative numbers in the correct, ascending order', () => {
        expect(sortNumbers([-40.3,-50.5])).toEqual([-50.5,-40.3]);
        expect(sortNumbers([-24.6,-24.6,-123.4])).toEqual([-123.4,-24.6,-24.6]);
    });
});

describe('Testing the countCharsInString function', () => {
    it('Should return the number of each discrete character in the string', () => {
        expect(countCharsInString('Hello')).toStrictEqual({'H': 1, 'e': 1, 'l': 2, 'o': 1});
        expect(countCharsInString('10')).toStrictEqual({'1': 1, '0': 1});
        expect(countCharsInString('hHeElLlLoO')).toStrictEqual({'h': 1, 'H': 1, 'e': 1, 'E': 1, 'l': 2, 'L': 2, 'o': 1, 'O': 1});
        expect(countCharsInString(',;@')).toStrictEqual({'@': 1, ',': 1,';': 1});
    });
});