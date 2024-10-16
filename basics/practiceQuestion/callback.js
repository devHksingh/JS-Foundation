/*
JavaScript Callbacks

A callback is a function that is passed as an argument to another function and is executed after the completion of that main function.

In simple terms, a callback function is called at the end of a task to either deliver results or perform an action. You pass this callback function to the main function, and once the main function completes, it invokes the callback to proceed with the next steps.

Why use Callbacks?
Callbacks are used for managing the outcomes of asynchronous tasks without blocking the program’s execution.

*/

let numbers = [1, 2, 3, 4, 5, 6];

function mainFunction(callback) {
  console.log("Printing square of numbers");
  numbers.forEach(callback);
}
function callbackFunction(number) {
  console.log(`Square of ${number} is ${number * number}`);
}

mainFunction(callbackFunction);

/*
Explanation:
We first define an array of numbers numbers.
We then define a mainFunction that takes a callback as an argument.
The mainFunction uses Array.forEach to loop through the numbers array and call the callback function for each element in the array.
We then define a callbackFunction that logs each number in the numbers array.
Finally, we call the mainFunction with the callbackFunction as its argument.
In conclusion, callbacks are an important aspect of JavaScript programming and are used to handle the results of asynchronous operations in a non-blocking manner.
*/
