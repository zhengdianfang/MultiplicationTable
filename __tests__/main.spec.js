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

it('should null when input [4, 2]', () => {
    const startNumber = 4;
    const endNumber = 2;

    const resullt = printMultilyTable(startNumber, endNumber);

    expect(result).toBe(null);
});

it('should null when input [2, 1001]', () => {
    const startNumber = 2;
    const endNumber = 1001;

    const resullt = printMultilyTable(startNumber, endNumber);

    expect(result).toBe(null);
});


it('should right format table  when input [2, 2]', () => {
    const startNumber = 2;
    const endNumber = 2;

    const resullt = printMultilyTable(startNumber, endNumber);

    expect(result).toBe('2x2=4');
});

it('should right format table when input [2, 4]', () => {
    const startNumber = 2;
    const endNumber = 4;

    const resullt = printMultilyTable(startNumber, endNumber);

    expect(result).toBe('2x2=4\n2x3=6 3x3=9\n2*4=8 3*4=12 4*4=16');

});
