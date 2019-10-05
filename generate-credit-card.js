const faker = require('faker')
const { BIN_NUMBERS } = require('./constants')

const isEven = number => number % 2 === 0

const getAccountNumber = () =>
  Math.random()
    .toString()
    .slice(2, 11)

const singleDigit = number => {
  return number <= 9 ? number : number - 9
}

const calculateEven = even => {
  return singleDigit(even * 2)
}

const calculateFinalDigit = checksum => 10 - checksum

const generateFinalDigit = card => {
  const checksum =
    card
      .split('')
      .map((number, index) =>
        isEven(index) ? calculateEven(number) : parseInt(number, 10)
      )
      .reduce((previous, current) => previous + current) % 10
  return checksum === 0 ? 0 : calculateFinalDigit(checksum)
}

const isValidCreditCard = card => {
  if (!card || card.length !== 16) return false
  return generateFinalDigit(card) === 0
}

const generateCreditCard = () => {
  const partialCreditCardNumber =
    faker.random.arrayElement(BIN_NUMBERS) + getAccountNumber()
  const checksum = generateFinalDigit(partialCreditCardNumber)
  const creditCardNumber = partialCreditCardNumber + checksum
  if (!isValidCreditCard(creditCardNumber)) return generateCreditCard()

  return creditCardNumber
}

module.exports = {
  getAccountNumber,
  generateFinalDigit,
  isValidCreditCard,
  generateCreditCard
}