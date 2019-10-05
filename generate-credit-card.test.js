const {
  generateCreditCard,
  isValidCreditCard,
  generateFinalDigit,
  getAccountNumber,
} = require('./generate-credit-card')

const validCreditCard = '5433358643735549'
const invalidCreditCard = String(validCreditCard - 1)

describe('generateCreditCard', () => {
  it('should generate a valid credit card', () => {
    expect(isValidCreditCard(generateCreditCard())).toBe(true)
  })
})

describe('generateFinalDigit', () => {
  it('should generate a valid checksum for a partial credit card', () => {
    const validCreditCards = [
      '5433358643735549',
      '5247324685144632',
      '4715404061102168',
      '4921023834746448',
    ]

    validCreditCards.forEach(card => {
      const partialCreditCard = card.slice(0, -1)
      const finalDigit = card.substr(-1)
      expect(generateFinalDigit(partialCreditCard)).not.toBeNaN()
      expect(generateFinalDigit(partialCreditCard)).toBe(Number(finalDigit))
    })
  })
})

describe('getAccountNumber', () => {
  it('should return a random string of nine digits', () => {
    const accountNumber = getAccountNumber()
    expect(accountNumber).toHaveLength(9)
    expect(typeof accountNumber).toBe('string')
  })
})

describe('isValidCreditCard', () => {
  it('should return true for a valid credit card', () => {
    expect(isValidCreditCard(validCreditCard)).toBe(true)
  })

  it('should return false for an invalid credit card', () => {
    const invalidCreditCards = [invalidCreditCard, '123', '', null, undefined]

    invalidCreditCards.forEach(card => {
      expect(isValidCreditCard(card)).toBe(false)
    })
  })
})
