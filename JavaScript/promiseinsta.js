async function likeCode() {
  return new Promise((like) => {
    like("Liked the posted Successfully.");
  });
}

async function commentCode() {
  return new Promise((commentPosted) => {
    commentPosted("Comment the posted Successfully");
  });
}

async function createPost() {
  var post = new Promise((cPost) => {
    cPost("Post Created Successfully");
  });
  var [posts, comment, like] = await Promise.all([
    post,
    commentCode(),
    likeCode(),
  ]);
  console.log(posts, comment, like);
}

createPost();
