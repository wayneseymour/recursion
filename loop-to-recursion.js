
// Old school
let arr = ['Wayne', 'Francine', 'Selena']
for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i])
}

// Recursion school :-)
// immutableSay :: [names] -> void
const immutableSay = names => {
  if (names.length) {
    console.log(names.slice(0, 1))
    return immutableSay(names.slice(1, names.length))
  }
}
immutableSay(arr)

// say :: [names] -> void
const say = names => {
  if (names.length) {
    console.log(names.splice(0, 1))
    return say(names)
  } 
}
say(arr)