function checkValueInRange(value) {
    return value >=1 && value <= 1000;
}

function compareParamsValid(startNumber, endNumber) {
    return endNumber >= startNumber;
}

function printMultilyTable(startNumber, endNumber) {
    if (!checkValueInRange(startNumber) || !checkValueInRange(endNumber)) {
        return null;
    }

    if (!compareParamsValid(startNumber, endNumber)) {
        return null;
    }

    const resultArray = [];
    for(let right = startNumber; right <= endNumber; right++) {
        let result = '';
        for(let left = startNumber; left <= right; left++) {
           result += `${left}*${right}=${left*right} `;
        }
        resultArray.push(result.trim());
    }
    return resultArray.join('\n');
}

module.exports = {
    checkValueInRange,
    compareParamsValid,
    printMultilyTable,
}
