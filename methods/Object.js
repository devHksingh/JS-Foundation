// Object.entries()
const studentScores = { John: 70, Alice: 95, Bob: 85, Eve: 60 };
const highScorers = Object.entries(studentScores);
const scores = Object.entries(studentScores).map(([name, value]) => {
  // console.log(name,{marks:value});
  return { name, value };
});
// console.log(scores);

const graphData = {
  Mar: {
    totalOrders: 58,
    totalSale: 1965644,
  },
  Jan: {
    totalOrders: 9,
    totalSale: 200271,
  },
  Feb: {
    totalOrders: 6,
    totalSale: 2225,
  },
};
const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const test = Object.entries(graphData).map(([key,data])=>{
    return {month:key,...data}
}).sort((a,b)=>monthOrder.indexOf(a.month)-monthOrder.indexOf(b.month))
console.log(test);

