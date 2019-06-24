function checkValueInRange(value) {
    return value >=1 && value <= 1000;
}

function compareParamsValid(startNumber, endNumber) {
    return endNumber > startNumber;
}

module.exports = {
    checkValueInRange,
    compareParamsValid,
}
