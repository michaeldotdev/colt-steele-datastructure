// ######### Power #########

function power(base, expo) {
  if (expo === 0) return 1;
  return base * power(base, expo - 1);
}

// ######### Factorial #########

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// ######### productOfArray #########

function productOfArray(array) {
  if (array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}

// ######### Recursive Range #########

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// ######### Fib #########

function fib(num) {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
}
