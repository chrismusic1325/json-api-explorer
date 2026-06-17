/*
Practice: JSON API Explorer

Instructions:
You will add interaction with a public API to the small web application in this repo.

API Used:
https://jsonplaceholder.typicode.com

Tasks:
1. Fetch and display posts
   - Use fetch() to retrieve posts from /posts
   - Convert the response to JSON
   - Dynamically render the post titles and bodies in the postList div

2. Create and send a new post
   - Add a form with title and body fields
   - Use fetch() with the POST method to send data as JSON to the API
   - Show a confirmation message with the response data

3. Add loading and error states
   - Show a loading message while data is being fetched
   - Display an error message if the fetch fails

Deliverables:
- A working fetch call that loads and displays posts
- A functional form that submits data using POST
- Error handling and user feedback
- Clean and commented JavaScript code
*/

// Select elements from the HTML
const fetchButton = document.getElementById("fetchButton");
const postList = document.getElementById("postList");
const errorMessage = document.getElementById("error");
const loadingMessage = document.getElementById("loading");

const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const formError = document.getElementById("formError");
const formSuccess = document.getElementById("formSuccess");

// Fetch and display posts from the API
async function fetchPosts() {
  postList.innerHTML = "";
  errorMessage.textContent = "";
  loadingMessage.textContent = "Loading posts...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Unable to fetch posts.");
    }

    const posts = await response.json();

    loadingMessage.textContent = "";

    posts.slice(0, 10).forEach(function(post) {
      const postDiv = document.createElement("div");

      const postTitle = document.createElement("h3");
      postTitle.textContent = post.title;

      const postBody = document.createElement("p");
      postBody.textContent = post.body;

      postDiv.appendChild(postTitle);
      postDiv.appendChild(postBody);
      postList.appendChild(postDiv);
    });
  } catch (error) {
    loadingMessage.textContent = "";
    errorMessage.textContent = "Error: " + error.message;
  }
}

// Send a new post to the API
async function createPost(event) {
  event.preventDefault();

  formError.textContent = "";
  formSuccess.textContent = "";

  const newPost = {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    });

    if (!response.ok) {
      throw new Error("Unable to submit post.");
    }

    const data = await response.json();

    formSuccess.textContent =
      "Post submitted successfully! New post ID: " + data.id;

    postForm.reset();
  } catch (error) {
    formError.textContent = "Error: " + error.message;
  }
}

// Event listeners
fetchButton.addEventListener("click", fetchPosts);
postForm.addEventListener("submit", createPost);
EOFcat > script.js <<'EOF'
/*
Practice: JSON API Explorer

Instructions:
You will add interaction with a public API to the small web application in this repo.

API Used:
https://jsonplaceholder.typicode.com

Tasks:
1. Fetch and display posts
   - Use fetch() to retrieve posts from /posts
   - Convert the response to JSON
   - Dynamically render the post titles and bodies in the postList div

2. Create and send a new post
   - Add a form with title and body fields
   - Use fetch() with the POST method to send data as JSON to the API
   - Show a confirmation message with the response data

3. Add loading and error states
   - Show a loading message while data is being fetched
   - Display an error message if the fetch fails

Deliverables:
- A working fetch call that loads and displays posts
- A functional form that submits data using POST
- Error handling and user feedback
- Clean and commented JavaScript code
*/

// Select elements from the HTML
const fetchButton = document.getElementById("fetchButton");
const postList = document.getElementById("postList");
const errorMessage = document.getElementById("error");
const loadingMessage = document.getElementById("loading");

const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const formError = document.getElementById("formError");
const formSuccess = document.getElementById("formSuccess");

// Fetch and display posts from the API
async function fetchPosts() {
  postList.innerHTML = "";
  errorMessage.textContent = "";
  loadingMessage.textContent = "Loading posts...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Unable to fetch posts.");
    }

    const posts = await response.json();

    loadingMessage.textContent = "";

    posts.slice(0, 10).forEach(function(post) {
      const postDiv = document.createElement("div");

      const postTitle = document.createElement("h3");
      postTitle.textContent = post.title;

      const postBody = document.createElement("p");
      postBody.textContent = post.body;

      postDiv.appendChild(postTitle);
      postDiv.appendChild(postBody);
      postList.appendChild(postDiv);
    });
  } catch (error) {
    loadingMessage.textContent = "";
    errorMessage.textContent = "Error: " + error.message;
  }
}

// Send a new post to the API
async function createPost(event) {
  event.preventDefault();

  formError.textContent = "";
  formSuccess.textContent = "";

  const newPost = {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    });

    if (!response.ok) {
      throw new Error("Unable to submit post.");
    }

    const data = await response.json();

    formSuccess.textContent =
      "Post submitted successfully! New post ID: " + data.id;

    postForm.reset();
  } catch (error) {
    formError.textContent = "Error: " + error.message;
  }
}

// Event listeners
fetchButton.addEventListener("click", fetchPosts);
postForm.addEventListener("submit", createPost);
