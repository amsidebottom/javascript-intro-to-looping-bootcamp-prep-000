var array = []
function forLoop(array) {
  for (i = 0; i < 25; i++) {
  array.push("I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.");
  }
  return array
}


function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  var len
  do {console.log(array.pop())
  len = array.length
}
  while (len > 0 && maybeTrue() == false);
  return array
  }
