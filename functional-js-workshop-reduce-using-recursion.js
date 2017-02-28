const reduce = (arr, fn, initial) => {
  // Test to see if we've hit our base
  // case.  Run again if we are
  // not at the end of our arr.
  if (arr.length) {
    initial = fn(initial, arr[0]);
    // Remove the value we calculated,
    // so we dont have to keep track [in place mutation].
    arr.splice(0, 1);
    // Recurse
    return reduce(arr, fn, initial);
  } else {
    // Base case met, finished.
    return initial;
  }
};
module.exports = reduce;
