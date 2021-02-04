import { MAX_NUMBER_TYPE_ERROR, MULTIPLE_OF_NUMBER_TYPE_ERROR } from '../constants'

const findMultiples = (maxNumber, multipleOfNumber) => {
  if (maxNumber === undefined || typeof maxNumber !== 'number') {
    throw new Error(MAX_NUMBER_TYPE_ERROR + `${typeof maxNumber}`)
  } else

  if (multipleOfNumber === undefined || typeof multipleOfNumber !== 'number') {
    throw new Error(MULTIPLE_OF_NUMBER_TYPE_ERROR + `${typeof multipleOfNumber}`)
  }

  const numbers = [...Array(maxNumber).keys()].map(i => i + 1)
  return numbers.filter(element => !(element % multipleOfNumber))
}

export default findMultiples
