const findMultiples = (maxNumber, multipleOfNumber) => {
    const numbers = [ ...Array(maxNumber).keys()].map(i => i+1)
    return numbers.filter(element => !(element % multipleOfNumber));
}

export default findMultiples