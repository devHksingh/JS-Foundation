let fetchRes
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
    fetchRes = jsonData
    // console.log(fetchRes);
    // return jsonData
    
  } catch (error) {
    console.error(error.message);
  }
}
fetchPost()


const postDivEl = document.querySelector(".post-container");

const anchorTagEl = document.querySelector(".genrate-post")

anchorTagEl.addEventListener('click',(e)=>{

    
    if(fetchRes){
        
        
        for (let i=0;i<=fetchRes.length;i++){
           
            const postTitleEl = document.createElement('h3')
            const postBodyEl = document.createElement('p')
            const postId = document.createElement('p')
            postId.classList.add('post-id')
            postTitleEl.textContent= fetchRes[i].title
            postBodyEl.textContent = fetchRes[i].body
            postId.textContent = `post id : ${fetchRes[i].id}`
            
            const singlePostDivEl = document.createElement('div')
            singlePostDivEl.classList.add("post")
            postDivEl.appendChild(singlePostDivEl)
            singlePostDivEl.appendChild(postTitleEl)
            console.log(singlePostDivEl);
            
            singlePostDivEl.appendChild(postBodyEl)
            singlePostDivEl.appendChild(postId)
            
        }
    }
})