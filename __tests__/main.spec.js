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
