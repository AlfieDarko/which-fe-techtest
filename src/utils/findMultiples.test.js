import findMultiples from './findMultiples'

test('should find the correct common multiples of 144 (itself)', () => {
  const result = findMultiples(144, 144)
  expect(result).toEqual([144])
})

test('should  find the correct common multiples of 3', () => {
  const result = findMultiples(144, 6)
  expect(result).toEqual([6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144])
})

test('should find the correct common multiples of 77', () => {
  const result = findMultiples(144, 77)
  expect(result).toEqual([77])
})

test('should throw error if first input (maxNumber) isnt a number', () => {
  expect(() => findMultiples('144', 77)).toThrow('you must provide a number for input maxNumber. Received type: string')
})

test('should throw error if last input (multipleOfNumber) isnt a number', () => {
  expect(() => findMultiples(144, '77')).toThrow('you must provide a number for input multipleOfNumber. Received type: string')
})
