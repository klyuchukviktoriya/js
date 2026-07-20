//! 1 =========================================

// async function divide(a, b) {
//   if (b === 0) {
//     throw new Error('Division by zero');
//   }

//   return a / b;
// }

// async function main() {
//   try {
//     const result = await divide(6, 2);
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }

//   try {
//     const result = await divide(6, 0);
//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// main();

//! 2 =========================================

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         id: 1,
//         name: 'Vika'
//       }
//       )
//     }, 1000)
//   })
// }

// async function showUser() {
//   const user = await getUser();
//   console.log(user);
// }

// showUser();

//! 3 =========================================

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: 'Vika' });
//     }, 2000);
//   });
// }

// function getPosts(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([{ id: 10, title: 'Hello' }]);
//     }, 2000);
//   });
// }

// function getComments(postId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(['Nice!', 'Cool!']);
//     }, 2000);
//   });
// }

// async function fullInfo() {
//   try {
//     const user = await getUser();
//     const posts = await getPosts(user.id);
//     const comments = await getComments(posts[0].id);

//     console.log(`User: ${user.name}
//       Post: ${posts[0].title}
//       Comments:
//       - ${comments.join('\n- ')}`);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// fullInfo();

//! 4 =========================================

// async function loadData() {
//   console.log('Loading...');
//   return new Promise((resolve, reject) => {
//     resolve('Happy');
//   });
// }

// async function getResult() {
//   try {
//     const result = await loadData();
//     console.log(result);
//   } catch {
//     console.log('Nothing');

//   } finally {
//     console.log('Loading finished');
//   }
// }

// getResult();

//! 5 =========================================

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Vika' });
    }, 1000);
  });
}

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Post 1', 'Post 2']);
    }, 1000);
  });
}

function getSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: 'dark' });
    }, 1000);
  });
}

async function getResult() {
  const [user, posts, settings] = await Promise.all([getUser(), getPosts(), getSettings()]);

  console.log(user);
  console.log(posts);
  console.log(settings);
}

getResult();


//! Запомнить
// Promise.all() → нужны все результаты.
// Promise.race() → нужен самый быстрый (успех или ошибка).
// Promise.allSettled() → дождаться всех, даже с ошибками.
// Promise.any() → нужен первый успешный результат.