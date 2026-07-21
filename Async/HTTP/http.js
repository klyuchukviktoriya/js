const URL = 'https://jsonplaceholder.typicode.com';

async function fetchJSON(url, options = {}) {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  if (res.status === 204) {
    return null;
  }

  return res.json();
}

async function getUsers() {
  return fetchJSON(`${URL}/users`);
}

async function getUserById(id) {
  return fetchJSON(`${URL}/users/${id}`);
}

async function createPost(post) {
  return fetchJSON(`${URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
}

// createPost({
//   title: 'My new post',
//   body: 'HTTP control work',
//   userId: 1
// }).then(console.log);

async function replacePost(id, post) {
  return fetchJSON(`${URL}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
}

// replacePost(1, {
//   title: 'Completely replaced title',
//   body: 'Completely replaced body',
//   userId: 1,
// }
// ).then(console.log);

async function updatePost(id, changes) {
  return fetchJSON(`${URL}/posts/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(changes),
  });
}

// updatePost(1, {
//   title: 'Updated title'
// }).then(console.log);

async function deletePost(id) {
  return fetchJSON(`${URL}/posts/${id}`, {
    method: 'DELETE',
  });
}

// deletePost(1).then(console.log);

async function getUserWithPosts(userId) {
  const [user, posts] = await Promise.all([
    fetchJSON(`${URL}/users/${userId}`),
    fetchJSON(`${URL}/posts?userId=${userId}`),
  ]);

  return { user, posts };
}

// getUserWithPosts(3).then(console.log);

async function runControlWork() {
  try {
    console.log(await getUsers());

    console.log(await getUserById(1));

    console.log(
      await createPost({
        title: 'My new post',
        body: 'HTTP control work',
        userId: 1,
      })
    );

    console.log(
      await replacePost(1, {
        title: 'Completely replaced title',
        body: 'Completely replaced body',
        userId: 1,
      })
    );

    console.log(
      await updatePost(1, {
        title: 'Updated title',
      })
    );

    console.log(await deletePost(1));

    console.log(await getUserWithPosts(3));

    console.log(await getError());


  } catch (error) {
    console.error(error.message);
  }
}

async function getError() {
  return fetchJSON(`${URL}/users/999999`);
}

runControlWork();