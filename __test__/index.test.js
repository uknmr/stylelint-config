'use strict'

const config = require('../')
const stylelint = require('stylelint')

const validCss = (`
@import url(hoge.css);

/* Some comment
 * ----- */
.hoge {
  background-color: rgba(0, 0, 0, 0.5);
}
`)

const invalidCss = (`
hoge {

  padding: .3em
}
`)

describe('no warnings with valid css', () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config
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

      expect(warnings.length).toBe(0)
    })
  })
})

describe('warnings with invalid css', () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config
    })
  })

  it('did error', () => {
    return result.then(data => {
      const { errored } = data

      expect(errored).toBeTruthy()
    })
  })
})
