function mysteryFunction(x) { //this is testing for prime numbers 
    if (x <= 1) {
        return false; //if the value is less than or equal to 1 then it can't be prime, as negative numbers, 0 and 1 are not prime
    }
    else if (x === 2) { //2 is a prime number but is a strange edge case for the next loop, more elegant to call it out as an edge case as it only happens this one time for infinitely high numbers
        return true;
    }
    else {
        for (let i = 2; i < x; i++) { //sets the denominator as 2 and adds one to it until the denominator is 1 less than the number we are dividing by as we know all numbers are divisible by themselves 
            if (x % i === 0){
                return false; //if the value is divisible by the denominator in question then the denominator is a factor of that number, and as such the value is not prime, therefore returning false
            }
        } return true;//otherwise if there is no number that divides the value to give a whole number then it must be prime, as such returning true
    }
}


function mysteryFunction2(y) {//this is doing Fibonacci style multiplication using the input value and the previous multiplication answer in the sequence
   let value; //need these 3 variables as we need a value to store the output of our multiplication
   let v1 = 1;//v1 and v2 start identical as the input of the number 1 requires the output to be 1, and this can only be achieved through 1*1
   let v2 = 1;//v1 and v2 get changed by this function to allow the loop to change the values being multiplied

    if (y < 0 || y > 12){//the tests dictate that this fucntion only operates between the numbers 0 and 12 so all numbers outside of that will throw the required error that the tests dictate
       throw new Error('Out of range!');
   }
   else if (y === 0) { //0 is an edge case as multiplying by 0 always = 0 but it needs to return 1 for the function to work. This is the only time it happens so this is an elegant way to deal with this issue
       value = 1;
       return value;
   }
   else {
       for (let i = 1; i <= y; i++) {//sets a value that will stop the loop when i is = to y so the correct value can be returned
           value = v1 * v2;//starting off with 1*1 as these are the initial v1 and v2, as shown below these change so this calculation is valid throughout until i = y
           v1 = v1+1;//v1 is the first term in the calculation and should always be equal to the inputted value, making v1=v1+1 every loop means that the value increases in increments of 1 from an initial value of 1 to ensure it will count up to reach the inputted number as required
           v2 = value;//when v1 is equal to the inputted value from the tests, v2 must be equal to the result of the previous multiplication to ensure that the next calculation in the loop is correct, and this is achieved here
       } return value;//Once the loop is done running as i=y, the value is returned and tested, and found to be correct
   }
   
}

module.exports = {
    mysteryFunction,
    mysteryFunction2
}