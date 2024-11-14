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




const url= `https://api.github.com/users/${userName}`
const userName = form 