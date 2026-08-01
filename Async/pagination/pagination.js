const URL = 'https://jsonplaceholder.typicode.com/posts';
const statusSpan = document.querySelector('.status');
const list = document.querySelector('.posts-list');
const current = document.querySelector('.current-page');
const nextBtn = document.querySelector('.next-button');
const prevBtn = document.querySelector('.prev-button');
const total = document.querySelector('.total-pages');

let posts = null;

async function getPosts() {
  statusSpan.textContent = 'Загрузка...';

  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`Error with status: ${res.status}`);
  }

  return res.json();
}

async function showPosts() {
  prevBtn.disabled = true;
  nextBtn.disabled = true;

  try {
    posts = await getPosts();
    statusSpan.textContent = '';
    renderHtml();
  } catch (error) {
    statusSpan.textContent = error.message;
    console.error(error.message);
  }

  return posts;
}
let start = 0;
let end = 5;
let currentPage = 1;
let totalPages = 0;

function renderHtml() {

  list.innerHTML = posts.slice(start, end).map(({ id, title, body }) => {
    return `<li>
       <h2>${id} ${title}</h2>
       <p>${body}</p>
     </li>`
  }).join('');

  totalPages = Math.ceil(posts.length / 5);
  console.log(totalPages);

  current.innerHTML = currentPage;
  total.innerHTML = totalPages;

  if (currentPage === 1) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (currentPage === totalPages) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

nextBtn.addEventListener('click', () => {
  start += 5;
  end += 5;
  currentPage++;
  renderHtml();
})

prevBtn.addEventListener('click', () => {
  start -= 5;
  end -= 5;
  currentPage--;
  renderHtml();
})

showPosts();