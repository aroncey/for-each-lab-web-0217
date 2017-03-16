function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const cats = ["Bob", "Leo", "Ron"]
  cats.forEach(callback)
  return cats
}

function doToArray(array, callback) {
  array.forEach(callback)
}
