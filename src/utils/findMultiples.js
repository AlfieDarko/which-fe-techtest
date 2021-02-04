const findMultiples = (maxNumber, multipleOfNumber) => {
  if (maxNumber === undefined || typeof maxNumber !== 'number') {
    throw new Error(`you must provide a number for input maxNumber. Received type: ${typeof maxNumber}`)
  } else

  if (multipleOfNumber === undefined || typeof multipleOfNumber !== 'number') {
    throw new Error(`you must provide a number for input multipleOfNumber. Received type: ${typeof multipleOfNumber}`)
  }

  const numbers = [...Array(maxNumber).keys()].map(i => i + 1)
  return numbers.filter(element => !(element % multipleOfNumber))
}

export default findMultiples
