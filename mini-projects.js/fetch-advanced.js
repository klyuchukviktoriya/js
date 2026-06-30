const URL_USERS = 'https://jsonplaceholder.typicode.com/users';
const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';

//! Есть два API:
//
// users:
// https://jsonplaceholder.typicode.com/users
//
// posts:
// https://jsonplaceholder.typicode.com/posts
//
// Получи оба списка.
//
// Верни массив объектов:
//
// [
//   {
//      user: "Leanne Graham",
//      posts: 10
//   },
//   ...
// ]
//
// То есть нужно посчитать,
// сколько постов написал каждый пользователь.

async function getUsersWithPostsCount() {
    try {
        // // const usersData = await fetch(URL_USERS);
        // // const postsData = await fetch(URL_POSTS);
        // const [usersData, postsData] = await Promise.all([
        //     fetch(URL_USERS),
        //     fetch(URL_POSTS),
        // ]);
        // // const users = await usersData.json();
        // // const posts = await postsData.json();
        // const [users, posts] = await Promise.all([
        //     usersData.json(),
        //     postsData.json(),
        // ]);
        const [users, posts] = await Promise.all([
            fetch(URL_USERS).then((response) => response.json()),
            fetch(URL_POSTS).then((response) => response.json()),
        ]);
        const postsByUserId = posts.reduce((acc, obj) => {
            const userId = obj.userId;
            if (!acc[userId]) {
                acc[userId] = 0;
            }
            acc[userId]++;
            return acc;
        }, {});
        return users.map((obj) => {
            return {
                user: obj.name,
                posts: postsByUserId[obj.id],
            };
        });
    } catch (error) {
        console.log(error);
    }
}
getUsersWithPostsCount().then((info) => console.log(info));
