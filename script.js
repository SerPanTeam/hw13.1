let posts = [];
function sendPost(event) {
  event.preventDefault();
  let postText = document.querySelector("#textPost");
  document.body.appendChild(document.createElement("div")).textContent =
    postText.value;
  posts.push({
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    text: postText.value,
  });

  postText.value = "";
}

function showPost(post){

}
