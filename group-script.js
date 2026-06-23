//fetch and display post

const fetchButton = document.getElementById("fetchButton");
const errorMessage = document.getElementById("error");
const postList = document.getElementById("postList");

const postForm = document.getElementById("postForm");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const formError = document.getElementById("formError");
const formSuccess = document.getElementById("formSuccess");

function fetchPosts() {
    postList.innerHTML = "Loading..";
    errorMessage.textContent = "";

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            if (!response.ok) {
                throw new Error(": failed to fetch");
            }
            return response.json();
        })
        .then(function (posts) {
            renderPosts(posts);
        })
        .catch(function (error) {
            postList.innerHTML = "";
            errorMessage.textContent = "Error " + error.message;
        });
}

fetchButton.addEventListener("click", fetchPosts);

function renderPosts(posts) {
    postList.innerHTML = "";

    posts.forEach(function (eachitem) {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${eachitem.title}</h3>
            <p>${eachitem.body}</p>
            <hr>
        `;

        postList.appendChild(div);
    });
}

postForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const body = bodyInput.value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title,
            body
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Post submission unsuccessful");
            }
            alert("Form submitted!");
            return response.json();
        })
        .then(data => {
            formSuccess.textContent = "Post submitted!";
            formError.textContent = "";

            titleInput.value = "";
            bodyInput.value = "";
        })
        .catch(err => {
            formError.innerHTML = "Error submitting posts: " + err.message;
        });
});
