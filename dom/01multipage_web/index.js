let fetchRes;
const fetchPost = async function () {
  // const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  //                     .then(res => res.json())
  //                     .then(data => {
  //                         console.log(data)
  //                         return data
  //                     })
  //                     .catch(err=> console.log(err))
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from server Response status :${response.status}`
      );
    }
    // console.log("response", response);
    const jsonData = await response.json();
    // console.log("jsonData", jsonData);
    fetchRes = jsonData;
    // console.log(fetchRes);
    // return jsonData
  } catch (error) {
    console.error(error.message);
  }
};
fetchPost();

const postDivEl = document.querySelector(".post-container");

const anchorTagEl = document.querySelector(".genrate-post");

const paginationEl = document.querySelector(".pagination");

// anchorTagEl.addEventListener("click", (e) => {
//   if (fetchRes) {
//     for (let i = 0; i <= fetchRes.length; i++) {
//       const postTitleEl = document.createElement("h3");
//       const postBodyEl = document.createElement("p");
//       const postId = document.createElement("p");
//       postId.classList.add("post-id");
//       postTitleEl.textContent = fetchRes[i].title;
//       postBodyEl.textContent = fetchRes[i].body;
//       postId.textContent = `post id : ${fetchRes[i].id}`;

//       const singlePostDivEl = document.createElement("div");
//       singlePostDivEl.classList.add("post");
//       postDivEl.appendChild(singlePostDivEl);
//       singlePostDivEl.appendChild(postTitleEl);
//       console.log(singlePostDivEl);

//       singlePostDivEl.appendChild(postBodyEl);
//       singlePostDivEl.appendChild(postId);
//     }
//   }
// });

// add pagination

let currentPage = 1;
let blogsPerPage = 10;

// Function to display blogs for the current page

function displayBlogs(page) {
  const startIndex = (page - 1) * blogsPerPage;
  const endIndex = page * blogsPerPage;
  if (fetchRes) {
    const bolgsToShow = fetchRes.slice(startIndex, endIndex);
    postDivEl.innerHTML = ""; // clear bog container
    bolgsToShow.forEach((blog) => {
      const postTitleEl = document.createElement("h3");
      const postBodyEl = document.createElement("p");
      const postId = document.createElement("p");
      postId.classList.add("post-id");
      postTitleEl.textContent = blog.title;
      postBodyEl.textContent = blog.body;
      postId.textContent = `post id : ${blog.id}`;

      const singlePostDivEl = document.createElement("div");
      singlePostDivEl.classList.add("post");

      singlePostDivEl.appendChild(postTitleEl);
      singlePostDivEl.appendChild(postBodyEl);
      singlePostDivEl.appendChild(postId);

      postDivEl.appendChild(singlePostDivEl);
    });
  }
}

// Function to display items for the current page

function setupPagination() {
  const totalPages = Math.ceil(fetchRes.length / blogsPerPage);
  const lastPage = totalPages;
  paginationEl.innerHTML = "";

  const prevBtn = document.createElement("li");
  const nextBtn = document.createElement("li");
  prevBtn.textContent = "Previous";
  prevBtn.classList.add("pagination-btn");
  nextBtn.textContent = "Next";
  nextBtn.classList.add("pagination-btn");

  paginationEl.appendChild(prevBtn);
  paginationEl.appendChild(nextBtn);

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayBlogs(currentPage);
    } else if (currentPage === 0) {
      displayBlogs(1);
    }
  });
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayBlogs(currentPage);
    } else if (currentPage === lastPage) {
      displayBlogs(lastPage);
    }
  });
}

anchorTagEl.addEventListener("click", () => {
  displayBlogs(currentPage);
  setupPagination();
});

const formEl = document.querySelector('#number-form')
const inputEl = document.querySelector('#num-input')
const isPrimeEl = document.querySelector('#isPrime')
const isOddEl = document.querySelector('#isOdd')
const isEvenEl = document.querySelector('#isEven')
const sumOfDigitEl = document.querySelector('#sumOfDigit')
const numberOfDigitEl = document.querySelector('#numberOfDigit')
const isPalidromeEl = document.querySelector('#isPalidrome')


formEl.addEventListener('submit',handleFormSubmit)

let userValue
let userValueArr
let isPrime=""
let isOdd=""
let isEven=""
let sumOfDigit = ""
let numberOfDigit=""
let isPalidrome=""
function handleFormSubmit(e){
  e.preventDefault()
  userValueArr= (inputEl.value).split('')
  const revUserArr =[]
  let OfSum =0
  for(let i=userValueArr.length-1;i>=0;i--){
    revUserArr.push(userValueArr.at(i))
  }
  
  isPalidrome = revUserArr.join('') === inputEl.value
  
  numberOfDigit= userValueArr.length
  // console.log(numberOfDigit);
  let sum =userValueArr.map((num)=>(OfSum=parseInt(num)+OfSum))
  
  sumOfDigit=sum.at(-1)
  isEven=parseInt(inputEl.value)%2===0?true:false
  isOdd= !isEven

  console.log("isEven",isEven);
  console.log("isOdd",isOdd);
  
  
  userValue = parseInt(inputEl.value)
  isPrime= checkPrime(parseInt(inputEl.value))
  console.log("isPrime",isPrime);
  
  isPrimeEl.textContent=isPrime?"true":"false"
  isEvenEl.textContent=isEven?"true":"false"
  isOddEl.textContent=isOdd?"true":"false"
  isPalidromeEl.textContent=isPalidrome?"true":"false"
  sumOfDigitEl.textContent=sumOfDigit
  numberOfDigitEl.textContent=numberOfDigit
}

function checkPrime(num){
  if(num<=1){
    return false
  }
  if(num === 2 || num === 3){
    return true
  }
  if(num %2 ===0 || num %3===0){return false}
  for(let i=5;i*i<=num;i+=6){
    if(num%i ===0 || num %(i+2)===0){
      return false
    }
  }
  return true
}

