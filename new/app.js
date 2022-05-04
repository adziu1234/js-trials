const sampleString = "abcdefghijklmnopqrstuvwxyz"
let reverseString = ""

let stringReverser= function(string) {
    for (let i = string.length-1; i >= 0; i--) {
        reverseString += string[i];
    };
};

//stringReverser(sampleString);
//console.log(reverseString);

function anagramChecker(string1, string2) {
    let foundLetters1= [];
    let foundLetters2 = [];
    if (string1.length !== string2.length) {
        console.log("The two strings are not the same length, so they cannot be anagrams");
        return false;
    } else {
        for (let i = 0; i < string1.length; i++){
            foundLetters1.push(string1[i]);
        };
        for (let j = 0; j < string2.length; j++){
            foundLetters2.push(string2[j]);
        };
        foundLetters1.sort();
        foundLetters2.sort();
        for (let k = 0; k < foundLetters1.length; k++){
            if (foundLetters1[k] != foundLetters2[k]){
                console.log(foundLetters1);
                console.log(foundLetters2);
                console.log("The two strings are not anagrams.")
                return false;
            }
        }
        console.log("The strings are anagrams.")
        return true;
    }
};


let firstString = "abdecc";
let secondString = "fedcba";

//console.log(anagramChecker(firstString, secondString));


//calculate numerical digits in a string

function numericCounter(string) {
    let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let counter = 0
    for (let i = 0; i < string.length; i++){
        if (numberArray.includes(string[i])){
            counter++;
        }
    }
    console.log(counter);
}

let alphaNumString = "23asdfsdfkjhgafekafhb8237519jdsafkjhgdsgvflk593sdkchgj4jh2k;lkjfds6";
numericCounter(alphaNumString);

{
    _id: 2,
    name: "Pencil",
    price: 0.80,
    stock: 12,
    reviews: [
        {
            authorName: "May",
            rating: 5,
            review: "Best pencil ever!"
        },
        {
            authorName: "John",
            rating: 4,
            review: "Eraser could be better doe!"
        }
    ]
}