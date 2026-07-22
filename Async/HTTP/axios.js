import axios from "axios";

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

async function getUsers() {
  const { data: users } = await api.get('/users');
  return users;
}

async function getUserById(id) {
  const { data: user } = await api.get(`/users/${id}`);
  return user;
}

async function createPost(post) {
  const { data: createdPost } = await api.post('/posts', post);
  return createdPost;
}

async function replacePost(id, post) {
  const { data: replacedPost } = await api.put(`/posts/${id}`, post);
  return replacedPost;
}

async function updatePost(id, changes) {
  const { data: updatedPost } = await api.patch(`/posts/${id}`, changes);
  return updatedPost;
}

async function deletePost(id) {
  const { data: deletedPost } = await api.delete(`/posts/${id}`);
  return deletedPost;
}

async function getUserWithPosts(userId) {
  const [{ data: user }, { data: posts }] = await Promise.all([
    api.get(`/users/${userId}`),
    api.get(`/posts`, {
      params: {
        userId,
      },
    })
  ]);
  return { user, posts };
}

async function runControlWork() {
  try {
    const users = await getUsers();
    console.log(users);

    const user = await getUserById(1);
    console.log(user);

    const createdPost = await createPost({
      title: 'My new post',
      body: 'HTTP control work',
      userId: 1
    });
    console.log(createdPost);

    const replacedPost = await replacePost(1, {
      title: 'Completely replaced title',
      body: 'Completely replaced body',
      userId: 1,
    });
    console.log(replacedPost);

    const updatedPost = await updatePost(1, {
      title: 'Updated title'
    }
    );
    console.log(updatedPost);

    const deletedPost = await deletePost(1);
    console.log(deletedPost);

    const userPosts = await getUserWithPosts(1);
    console.log(userPosts);

  } catch (error) {
    console.error(error.message);
  }
}

runControlWork();

async function getError() {
  try {
    await api.get(`/users/${999999}`)
  } catch (error) {
    console.log(error.response.status);
    console.log(error.message);
  }
}

getError();