//** */
//Function to reverse string
function reverseString(str) {
    const strRev = str.split("").reverse().join("");
    console.log(strRev);
}

//function call
reverseString("word");
reverseString("jump");

/**
 * 
 * @param {Array[Numbers]} arr
 * @returns {Number}
 * @description {find the largest index in array of numbers}
 * @constant { large, prev, curr}
 * @alias {prev = previous, curr = current}
 * 
 * @pseudocode {
 * - collect ar as a param/augument}
 * - define large, prev, curr as let variables
 * - loop through the array using for each // for // while
 * - write a function to take an item and compare it
 *    - assign prev = item
 *    - check if prev is greater than current {then large is prev}
 *    - compare large and the output
 *    - else large is current if its larger than current
 * - assign element to curr
 * -assign theoutput to large
 * -return large after the loop is done
 * }
 */
function findLargestNumber(arr) {-

}
module.exports = { sumTwoNumbers, findLargestNumber };
    let large = 0;
    let prev = 0;
    let curr = 0;

    for (let index = 0; index < arr.lenght; index++) {
        const element = arr[index];
        //assign previous to current element prev =element;
        
    //compare if prev is greater than large and curr
    if (prev > curr && prev > large) {
        large = prev;
        //compare if prev is greater than prev and large
    } else if (curr > large && curr > prev) {
        large = curr;  
    } else {
        large = large;
    }
    //assign element to curr
    curr = element;
}
return large;
