// upon further digging https://stackoverflow.com/a/31424853

const settle = async promise => {
  try {
    const result = await promise
    return {
      resolved: true,
      error: null,
      result
    }
  } catch (error) {
    return {
      resolved: false,
      result: null,
      error
    }
  }
}

const resolveAllPromises = promises => {
  return new Promise((resolve, reject) => {
    Promise.all(promises.map(settle)).then(results => {
      results.some(result => !result.resolved) ? reject(results) : resolve(results)
    })
  })
}

module.exports = resolveAllPromises
