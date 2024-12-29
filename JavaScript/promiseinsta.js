async function likeCode() {
  let like = true;
  return new Promise((resolve, reject) => {
    if (like) {
      resolve("Liked the post successfully.");
    } else {
      reject("Failed to like the post.");
    }
  });
}

async function commentCode() {
  let comment = true;
  return new Promise((resolve, reject) => {
    if (comment) {
      resolve("Commented on the post successfully.");
    } else {
      reject("Failed to comment on the post.");
    }
  });
}

async function shareCode() {
  let share = true;
  return new Promise((resolve, reject) => {
    if (share) {
      resolve("Post is shared successfully.");
    } else {
      reject("Failed to share the post.");
    }
  });
}

async function createPost() {
  const post = new Promise((resolve) => {
    resolve("Post created successfully.");
  });

  try {
    const [posts, comment, like, share] = await Promise.all([
      post,
      commentCode(),
      likeCode(),
      shareCode(),
    ]);
    console.log(posts);
    console.log(comment);
    console.log(like);
    console.log(share);
  } catch (error) {
    console.error("Error during post creation:", error);
  }
}

createPost();
