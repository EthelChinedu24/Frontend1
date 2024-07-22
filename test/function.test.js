const functions = require("../JS/function");

test("should add up two numbers ", () => {
    expect (functions.sumTwoNumbers(2, 4)).toBe(6);
    expect(functions.sumTwoNumbers(2,-4)).toBe(-2);
    expect(functions.sumTwoNumbers(-2, -4)).toBe(-6);
    expect(functions.sumTwoNumbers(2, 4)).not.toBe(5);
});

test("should find out the largest number", () => {
    expect(functions.findLargestNumber( [2,4,23,43,23])).toBe(43);
    expect(functions.findLargestNumber([2,"sting", 23, 4, 23])).toBe(23);
    expect(functions.findLargestNumber([0,34,3,32,33])).toBe( 34);
    expect(functions.findLargestNumber([132,43,96,34,-3])).not.toBe(5);
})