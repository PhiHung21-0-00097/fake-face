export async function getAllPosts() {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];
  for (const file of files) {
    const post = await getPostBýlug(file);
    posts.push(post);
  }

  await wait(2000);

  return posts;
}
export async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
