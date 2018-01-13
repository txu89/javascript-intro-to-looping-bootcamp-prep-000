function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array[i] = `"I am ${i} strange loop."`
    } else {
      array[i] = `"I am ${i} strange loops."`
    }
  }
  return array
}

function whileLoop(num) {
  while (num > 0) {
    console.log(--num)
  }
  return "done"
}

function doWhileLoop(anArray) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
 
  do {
    anArray.pop()
  } while (anArray.length > 0 && maybeTrue())
 
  return anArray
}