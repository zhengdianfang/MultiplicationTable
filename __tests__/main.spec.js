const {
    checkValueInRange,
    compareParamsValid,
    printMultilyTable,
} = require('../main');


it('should return false when input 10001', () => {
    //give
    const inputNumber = 10001;
    //when
    const inRange = checkValueInRange(inputNumber);
    //then
    expect(inRange).toBe(false);
});

it('should return true when input 999', () => {
    //give
    const inputNumber = 999;
    //when
    const inRange = checkValueInRange(inputNumber);
    //then
    expect(inRange).toBe(true);
});

it('should return true when input [2, 4]', () => {
    const startNumber = 2;
    const endNumber = 4;

    const valid = compareParamsValid(startNumber, endNumber);

    expect(valid).toBe(true);
});

it('should return false when input [4, 2]', () => {
    const startNumber = 4;
    const endNumber = 2;

    const valid = compareParamsValid(startNumber, endNumber);

    expect(valid).toBe(false);
});
