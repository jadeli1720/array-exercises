/* eslint-env mocha */
var expect = chai.expect

describe('sum()', function () {
  it('sum() method exists', function () { expect(sum).to.exist })

  it('empty input array returns 0', function () {
    expect(sum([])).to.eq(0)
  })

  it('sums all integers in the first array arg', function () {
    expect(sum([1])).to.eq(1)
    expect(sum([1, 4])).to.eq(5)
    expect(sum([1, 4, 6])).to.eq(11)
    expect(sum([1, 4, 6, 8])).to.eq(19)
    expect(sum([1, 4, 6, 8, 10])).to.eq(29)
  })
})

describe('backwardsify()', function () {
  it('backwardsify() method exists', function () { expect(backwardsify).to.exist })

  it('returns an empty object when the input is empty', function () {
    expect(backwardsify([])).to.deep.eq({})
  })

  it('reverses items in given array', function () {
    expect(backwardsify(['a', 'b', 'c'])).to.deep.eq(['c', 'b', 'a'])
    expect(backwardsify([10, 20])).to.deep.eq([20, 10])
  })
})

describe('doubleNumbers()', function () {
  it('doubleNumbers() method exists', function () { expect(doubleNumbers).to.exist })

  it('no input returns an empty array', function () {
    expect(doubleNumbers([])).to.deep.eq([])
  })

  it('doubles each number in the given array', function () {
    expect(doubleNumbers([1, 2, 3])).to.deep.eq([2, 4, 6])
    expect(doubleNumbers([10, 20, 30, 40])).to.deep.eq([20, 40, 60, 80])
  })
})

describe('doubleCharacters()', function () {
  it('doubleCharacters() method exists', function () { expect(doubleCharacters).to.exist })

  it('blank input returns an empty string', function () {
    expect(doubleCharacters('')).to.eq('')
  })

  it('doubles each letter from input string', function () {
    expect(doubleCharacters('abc')).to.eq('aabbcc')
    expect(doubleCharacters('xyzpdq')).to.eq('xxyyzzppddqq')
  })
})

describe('interleave()', function () {
  it('interleave() method exists', function () { expect(interleave).to.exist })

  it('on empty input return an empty array', function () {
    expect(interleave([], [])).to.deep.eq([])
  })

  it('on different input array sizes, return null', function () {
    expect(interleave([1], [2, 3]), 'different size input arrays must return null').to.eq(null)
  })

  it('correctly merged values from 2 arrays into single result', function () {
    expect(interleave(['a', 'b', 'c'], ['x', 'y', 'z'])).to.deep.eq(['a', 'x', 'b', 'y', 'c', 'z'])
    expect(interleave([10, 20, 30, 40], [5, 6, 7, 8])).to.deep.eq([10, 5, 20, 6, 30, 7, 40, 8])
  })
})

describe('makeRange()', function () {
  it('makeRange() method exists', function () { expect(makeRange).to.exist })

  it('when 2nd arg is missing (`fillString`) return empty array', function () {
    expect(makeRange(0)).to.deep.eq([])
  })

  it('when the input is -10, return empty array', function () {
    expect(makeRange(-10, '')).to.deep.eq([])
  })

  it('creates an array of the specified length with the specified initial string', function () {
    expect(makeRange(4, 'a')).to.deep.eq(['a', 'a', 'a', 'a'])
    expect(makeRange(7, 'z')).to.deep.eq(['z', 'z', 'z', 'z', 'z', 'z', 'z'])
  })
})
