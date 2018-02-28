const resolveAllPromises = require('./index')

const { resolve, reject } = Promise

describe('resolveAllPromises', () => {
  it('should return a promise', async () => {
    const promises = [Promise.resolve('one'), Promise.resolve('two')]

    const result = resolveAllPromises(promises)

    expect(result).toBeInstanceOf(Promise)
  })

  it('should resolve if all promises resolve', async () => {
    const promises = [Promise.resolve('one'), Promise.resolve('two')]

    await expect(resolveAllPromises(promises)).resolves.toEqual([
      { resolved: true, result: 'one', error: null },
      { resolved: true, result: 'two', error: null }
    ])
  })

  it('should reject and return all values if any promise rejects', async () => {
    const promises = [Promise.resolve('one'), Promise.reject('two')]

    await expect(resolveAllPromises(promises)).rejects.toEqual([
      { resolved: true, result: 'one', error: null },
      { resolved: false, result: null, error: 'two' }
    ])
  })
})
