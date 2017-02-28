const reduce = require('../functional-js-workshop-reduce-using-recursion');
describe('reduce using recursion', () => {
  test('should be a function', () => {
    expect(typeof reduce).toEqual('function');
  });
  test('should sum a list of numbers', () => {
    const sum = reduce([1, 2, 3], (a, b) => a + b, 0);
    expect(sum).toEqual(6);
  });
});
