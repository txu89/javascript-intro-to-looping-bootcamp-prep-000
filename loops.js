function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array[i] = `I am ${i} strange loop.`
  }
  return array
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num)
  }
  return "done"
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop()
  } while (maybeTrue())
}