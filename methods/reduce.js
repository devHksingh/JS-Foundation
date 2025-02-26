let expenses = [
  { description: "Groceries", amount: 60, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

const totalAmount = expenses.reduce(
  (acc, currentValue) => ({
    amount: acc.amount + currentValue.amount,
  }),
  { amount: 0 }
);

// console.log(totalAmount);

const total = expenses.reduce(
  (acc, currentValue) => acc + currentValue.amount,
  0
);
// console.log(total);

const tottalByCat = expenses.reduce(
  (acc, currentValue) => {
    acc[currentValue.category] += currentValue.amount;
    // console.log(acc);
    return acc;
  },
  { Food: 0, Utilities: 0 }
);
// console.log(tottalByCat);

const num1 = [1, -2, 3, 4, -5];

// {postive:0,negative:0}
const sumOfPosttivenUM = num1.reduce((acc, currentValue) => {
  // console.log("acc currentValue :",acc,currentValue);
  // console.log("currentValue>0?currentValue:0 :",currentValue>0?currentValue:0);
  // console.log("acc + (currentValue>0?currentValue:0) :",acc + (currentValue>0?currentValue:0));

  const sum = acc + (currentValue > 0 ? currentValue : 0);
  // console.log("sum",sum);
  return sum;
});

const num2 = [
  { num: 1, isPositvie: true },
  { num: 2, isPositvie: false },
  { num: 3, isPositvie: true },
  { num: 4, isPositvie: true },
  { num: 5, isPositvie: false },
];
console.log(sumOfPosttivenUM);

const reportOfNum = num2.reduce((acc, currentValue) => {
  // console.log("currentValue.isPositvie ? currentValue.num : 0 :",currentValue.isPositvie ? currentValue.num : 0);

  return acc + (currentValue.isPositvie ? currentValue.num : 0);
}, 0);
// console.log(reportOfNum);

const reportOfNum1 = num2.reduce(
  (acc, currentValue) => {
    currentValue.isPositvie
      ? (acc.Positive += currentValue.num)
      : (acc.Negative += currentValue.num);
    return acc;
  },
  {
    Positive: 0,
    Negative: 0,
  }
);

console.log("reportOfNum1", reportOfNum1);

const num3 = [
  { num: 1, category: "Positive" },
  { num: 2, category: "Negative" },
  { num: 3, category: "Positive" },
  { num: 4, category: "Negative" },
  { num: 5, category: "Positive" },
];

const result3 = num3.reduce(
  (acc, currentValue) => {
    acc[currentValue.category] += currentValue.num;
    return acc;
  },
  { Positive: 0, Negative: 0 }
);

console.log(result3);

// Implement filter Using reduce
// Filtering out odd numbers from [1, 2, 3, 4]
const num4 = [1, 2, 3, 4];

const oddNum = num4.reduce((acc, currentValue) => {
  console.log("acc,currentValue", acc, currentValue);
  if (currentValue % 2 !== 0) {
    console.log("currentValue :", currentValue);

    acc.push(currentValue);
  }
  return acc;
}, []);
console.log("oddNum :", oddNum);

const evenAndOdd = num4.reduce(
  (acc, currentValue) => {
    currentValue % 2 === 0
      ? acc.even.push(currentValue)
      : acc.odd.push(currentValue);
    return acc;
  },
  { even: [], odd: [] }
);

console.log("evenAndOdd :", evenAndOdd);

// Calculate Running Totals:
// Example: [1, 2, 3, 4] should yield [1, 3, 6, 10].

const num5 = [1, 2, 3, 4];

const runningTotal = num5.reduce((acc, currentValue) => {
  if (!acc.length) {
    acc.push(currentValue);
    return acc;
  }
  const lastElementValue = acc[acc.length - 1];
  console.log("lastElementValue", lastElementValue);
  const sum = lastElementValue + currentValue;
  console.log("sum", sum);
  acc.push(sum);
  return acc;
}, []);

console.log("runningTotal : ", runningTotal);

// Remove Duplicates:
// Example: [1, 2, 2, 3, 4, 4, 5] should yield [1, 2, 3, 4, 5].

const num6 = [1, 2, 2, 3, 4, 4, 5];
console.log(num6.filter((num) => num !== 6));
console.log(num6.includes(6));

const removeDuplicate = num6.reduce((acc, currentValue) => {
  if (!acc.includes(currentValue)) {
    acc.push(currentValue);
    return acc;
  }
  return acc;
}, []);

console.log("removeDuplicate :", removeDuplicate);
