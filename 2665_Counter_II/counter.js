// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter = (init) => {
  if (init < -1000 || init > 1000) {
    throw new Error("Initial value must be between -1000 and 1000");
  }
  let current_value = init;

  const increment = () => {
    if (current_value < 1000) {
      current_value++;
      return current_value;
    }
    throw new Error("Counter cannot exceed 1000");
  };

  const decrement = () => {
    if (current_value < 1000) {
      current_value--;
      return current_value;
    }
    throw new Error("Counter cannot be less than -1000");
  };

  const reset = () => {
    current_value = init;
    return current_value;
  };

  return {
    increment,
    decrement,
    reset,
  };
};

const example1 = (init, calls) => {
  if (calls.length > 1000) {
    throw new Error("Number of calls cannot exceed 1000, you fool");
  }
  const counter = createCounter(init);
  calls.forEach((call) => {
    if (call === "increment") {
      console.log(counter.increment());
    } else if (call === "decrement") {
      console.log(counter.decrement());
    } else if (call === "reset") {
      console.log(counter.reset());
    } else {
      throw new Error("Invalid call type");
    }
  });
};

const example2 = (init, calls) => {
  if (calls.length > 1000) {
    throw new Error("Number of calls cannot exceed 1000, you fool");
  }
  const counter = createCounter(init);
  calls.forEach((call) => {
    if (call === "increment") {
      console.log(counter.increment());
    } else if (call === "decrement") {
      console.log(counter.decrement());
    } else if (call === "reset") {
      console.log(counter.reset());
    } else {
      throw new Error("Invalid call type");
    }
  });
};

try {
  example1(5, ["increment", "decrement", "reset"]);
} catch (error) {
  console.error(error.message);
}
try {
  example2(0, ["increment", "increment", "decrement", "reset", "reset"]);
} catch (error) {
  console.error(error.message);
}
