'use strict'

const { resolve } = require('path')
const { readFileSync } = require('fs')
const stylelint = require('stylelint')
const config = require('../')

describe('no warnings with valid css', () => {
  let validCss
  beforeAll(() => {
    validCss = readFileSync(resolve(__dirname, 'valid.pcss'), 'utf-8')
  })

  let result
  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config,
    })
  })

  it('did not error', () => {
    return result.then(data => {
      const { errored } = data

      expect(errored).toBeFalsy()
    })
  })

  it('flags no warnings', () => {
    return result.then(data => {
      const { results } = data
      const { warnings } = results[0]

      warnings.length &&
        warnings.forEach(warning =>
          console.log(`${warning.line}: ${warning.text}`),
        )

      expect(warnings.length).toBe(0)
    })
  })
})

describe('warnings with invalid css', () => {
  let invalidCss
  beforeAll(() => {
    invalidCss = readFileSync(resolve(__dirname, 'invalid.pcss'), 'utf-8')
  })

  let result
  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config,
    })
  })

  it('did error', () => {
    return result.then(data => {
      const { results, errored } = data
      const { warnings } = results[0]

      expect(errored).toBeTruthy()
    })
  })
})
