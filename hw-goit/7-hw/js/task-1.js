const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(item => {

  const elements = item.querySelectorAll('li');
  const title = item.querySelector('h2').textContent;

  console.log(`Category: ${title}${'\n'}Elements: ${elements.length}`);
});


