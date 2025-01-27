console.log("hello js");
let randomValue = { name: "Lydia" };
randomValue = 23;
console.log("randomValue ", randomValue);
console.log("randomValue ", typeof randomValue);
if (!typeof randomValue === "string") {
  console.log("It's not a string!");
} else {
  console.log("Yay it's a string!");
}
