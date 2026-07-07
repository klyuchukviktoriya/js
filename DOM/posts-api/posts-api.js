// API:
// https://jsonplaceholder.typicode.com/posts
// Сделай страницу со списком постов.
// Нужно:
// - получить посты с API;
// - вывести только первые 10;
// - показать:
//     - title
//     - body
// Добавить поиск по title.
// Дополнительно:
// - возле каждого поста сделать кнопку "Show comments";
// - при нажатии загрузить комментарии именно этого поста:
//   https://jsonplaceholder.typicode.com/posts/ID/comments

// - повторное нажатие скрывает комментарии.

// Важно:

// - комментарии не должны загружаться заранее;
// - загружать их только после клика;
// - если комментарии уже были загружены один раз — повторный запрос делать не нужно.

// HTML и CSS придумай сама.

// const URL = 'https://jsonplaceholder.typicode.com/posts';
// const list = document.querySelector('.list');
// const input = document.querySelector('.input');
// const search = document.querySelector('.search');
// let html = '';

// async function getPosts() {
//     try {
//         const res = await fetch(URL);
//         if (!res.ok) {
//             throw new Error(`Failed with status: ${res.status}`);
//         }
//         const posts = await res.json();

//         posts.slice(0, 10).forEach(addPostHTML);
//         list.innerHTML = html;
//         addPostListeners();
//         search.addEventListener('click', () => {
//             const value = input.value.toLowerCase().trim();
//             html = '';
//             posts
//                 .filter((obj) => obj.title.toLowerCase().trim().includes(value))
//                 .forEach((obj) => addPostHTML(obj));

//             list.innerHTML = html;
//             addPostListeners();
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function getComments(postId) {
//     try {
//         const res = await fetch(
//             `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
//         );
//         if (!res.ok) {
//             throw new Error(`Failed with status: ${res.status}`);
//         }
//         const comments = await res.json();
//         return comments;
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function showComments(postId, commentsDiv) {
//     const comments = await getComments(postId);
//     let commentsHTML = '';

//     comments.forEach((comment) => {
//         commentsHTML += `<p>${comment.body}</p>`;
//     });

//     commentsDiv.innerHTML = commentsHTML;
// }

// function addPostHTML(obj) {
//     html += ` <li>
//               <h2>Title: ${obj.title}</h2>
//               <p>${obj.body}</p>
//               <button class='show-comment' data-id=${obj.id}>Показать комментарии</button>
//               <div class='comments-div'></div>
//             </li>`;
// }

// function buttonCallback(event, commentsDiv) {
//     if (event.target.tagName === 'BUTTON') {
//         const button = event.target;
//         const shown = 'Показать комментарии';
//         const hidden = 'Скрыть комментарии';

//         if (button.textContent === shown) {
//             button.textContent = hidden;
//             const postId = button.dataset.id;

//             if (commentsDiv.innerHTML) {
//                 commentsDiv.hidden = false;
//             } else {
//                 showComments(postId, commentsDiv);
//             }
//         } else {
//             button.textContent = shown;
//             commentsDiv.hidden = true;
//         }
//     }
// }

// function addPostListeners() {
//     const post = document.querySelectorAll('li');
//     post.forEach((li) => {
//         li.addEventListener('click', (event) => {
//             const commentsDiv = li.querySelector('.comments-div');
//             buttonCallback(event, commentsDiv);
//         });
//     });
// }

// getPosts();

//! refactoring

const URL = 'https://jsonplaceholder.typicode.com/posts';
const list = document.querySelector('.list');
const input = document.querySelector('.input');
const search = document.querySelector('.search');
const shown = 'Показать комментарии';
const hidden = 'Скрыть комментарии';
let posts = [];

async function getPosts() {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Failed with status: ${res.status}`);
    }
    posts = await res.json();

    list.innerHTML = posts.slice(0, 10).map(showPosts).join('');
    list.addEventListener('click', showComments);
    search.addEventListener('click', showFiltered);

  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getComments(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    if (!res.ok) {
      throw new Error(`Failed with status: ${res.status}`);
    }
    const comments = await res.json();

    return comments;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function showComments(event) {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const postId = button.dataset.id;
    const li = button.closest('li');
    const commentsDiv = li.querySelector('.comments-div');

    if (button.textContent === shown) {
      button.textContent = hidden;
      if (commentsDiv.innerHTML) {
        commentsDiv.hidden = false;
      } else {
        const comments = await getComments(postId);

        commentsDiv.innerHTML = comments
          .map((comment) => `<p>${comment.body}</p>`)
          .join('');

        commentsDiv.hidden = false;
      }
    } else {
      button.textContent = shown;
      commentsDiv.hidden = true;
    }
  }
}

function showPosts(obj) {
  return `<li>
              <h2>Title: ${obj.title}</h2>
              <p>${obj.body}</p>
              <button class='show-comment' data-id=${obj.id}>Показать комментарии</button>
              <div class='comments-div'></div>
            </li>`;
}

function showFiltered() {
  const value = input.value.toLowerCase().trim();
  const filteredPosts = posts
    .slice(0, 10)
    .filter((obj) => obj.title.toLowerCase().includes(value));
  list.innerHTML = filteredPosts.map(showPosts).join('');

}

getPosts();
