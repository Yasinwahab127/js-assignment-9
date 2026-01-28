//Add Two Numbers
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 5)); // Output is 8


//Check Even or Odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(7)); // Output  is Odd


//Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
console.log(celsiusToFahrenheit(0)); // Output is 32


// Return Full Name
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName("Ali", "Khan")); // Output is Ali Khan


//Square a Number
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(4)); // Output is 16


//Count Vowels
function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello")); // Output is 2


//Find Maximum of Three Numbers
function findMax(a, b, c) {
    let max = a;

    if (b > max) max = b;
    if (c > max) max = c;

    return max;
}
console.log(findMax(3, 9, 5)); // Output  is 9


//Reverse a String
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("abc")); // Output is cba


//Palindrome Check
function isPalindrome(word) {
    word = word.toLowerCase();
    let reversed = reverseString(word);
    return word === reversed;
}
console.log(isPalindrome("Madam")); // Output is true


//Factorial
function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // Output is 120


//  Largest Number in Array
function largestInArray(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(largestInArray([2, 7, 4, 9, 1])); // Output is 9


//Return Even Numbers Only
function getEvenNumbers(arr) {
    let evenArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}
console.log(getEvenNumbers([1, 2, 3, 4])); // Output is 2, 4


//Sum of Array Numbers
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3])); // Output is 6


//Calculate Discount Price
function calculateDiscount(price, discountPercent) {
    let discountAmount = (price * discountPercent) / 100;
    return price - discountAmount;
}
console.log(calculateDiscount(100, 20)); // Output is 80


// Generate 4-Digit OTP
function generateOTP() {
    return Math.floor(Math.random() * 9000) + 1000;
}
console.log(generateOTP()); // Example Output is 4821


// Count Words in a Sentence
function countWords(sentence) {
    let trimmed = sentence.trim();
    let words = trimmed.split(/\s+/);
    return words.length;
}
console.log(countWords(" Hello world ")); // Output is 2


// Student Grade Calculator
function calculateGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";
}
console.log(calculateGrade(82)); // Output is B


// Voting Eligibility
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}
console.log(checkVotingEligibility(17)); // Output is Not Eligible
