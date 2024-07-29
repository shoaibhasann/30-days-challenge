// T1
function parent(){
    let house = "Whitehouse";

    function child(){
        let car = "Mustang";
        console.log("I have: ", house, car);
    }

    return child;
}

const legacy = parent();
console.log(typeof legacy); // output: function
legacy();

// T2
function createCounter(){
    let counter = 0;

    return {
        increment: function (){
            counter += 1;
            return counter;
        },
        getValue: function (){
            return counter;
        }
    }
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getValue()); // output: 2

// T3
function IdGenerator(){
    let lastId = Math.floor(Math.random() * 100) + 1;

    return function (){
        lastId += 1;
        return lastId;
    }
}

const generateID = IdGenerator();
console.log(generateID());
console.log(generateID());
console.log(generateID());



// T4
function user(username){
    return function greet(){
        console.log(`Hii ${username}`);
    }
}

const user1 = user("shoaib.hasann");
user1(); // calling inner greet function of user function

// T5
function createFunctionArray() {
  const functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push((function(index) {
      return function() {
        console.log(index);
      };
    })(i));
  }

  return functions;
}

const functionArray = createFunctionArray();

functionArray[0](); // Output: 0
functionArray[1](); // Output: 1
functionArray[2](); // Output: 2
functionArray[3](); // Output: 3
functionArray[4](); // Output: 4


// T6
function createItemManager() {
  
  const items = [];

  return {
    // Method to add an item to the collection
    addItem(item) {
      items.push(item);
    },

    // Method to remove an item from the collection
    removeItem(item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      } else {
        console.log('Item not found');
      }
    },

    // Method to list all items in the collection
    listItems() {
      return items.slice();
    }
  };
}

// Usage example:
const manager = createItemManager();
manager.addItem('Apple');
manager.addItem('Banana');
console.log(manager.listItems()); // Output: ['Apple', 'Banana']
manager.removeItem('Apple');
console.log(manager.listItems()); // Output: ['Banana']

// T7
/*
Memoization is technique which used to optimized functions by caching their previous
computed results. when function is called with older or same arguments memoized
version of function simple return result using cache data means no computing 
which leads to faster execution or function optimization. 
 */
function memoize(fn) {
  // Store the cached results in an object
  const cache = {};

  // Return a function that checks the cache before invoking the original function
  return function(...args) {
    // Create a unique key for the arguments (assuming they can be serialized)
    const key = JSON.stringify(args);

    // If the result is in the cache, return it
    if (cache[key] !== undefined) {
      return cache[key];
    }

    // Otherwise, compute the result and store it in the cache
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Usage example:

// A slow function (for demonstration)
function slowFunction(num) {
  console.log('Computing...');
  return num * num;
}

// Create a memoized version of the slow function
const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Output: 'Computing...' and 25
console.log(memoizedFunction(5)); // Output: 25 (no "Computing..." log since the result is cached)
console.log(memoizedFunction(6)); // Output: 'Computing...' and 36


// T8
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Usage example
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(6)); // Output: 720
console.log(memoizedFactorial(5)); // Output: 120 (retrieved from cache)

