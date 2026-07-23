import { images } from "./images.js";

const gallery = document.querySelector('.gallery');

function renderHtml({ preview, original, description }) {
  return `<li class="gallery-item">
  <a class="gallery-link" href='${original}'>
    <img
      class="gallery-image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</li>`
}

gallery.innerHTML = images.map(renderHtml).join('');

gallery.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    const source = e.target.dataset.source;
    const alt = e.target.getAttribute('alt');

    console.log(source);

    basicLightbox.create(`
		<img width="1112" height="640" src='${source}' alt='${alt}'>
	`).show()
  }
})