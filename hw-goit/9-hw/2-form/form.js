const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const formData = { email: '', message: '' };

let storage = JSON.parse(localStorage.getItem('feedback-form-state'));

if (storage) {
  email.value = storage.email;
  message.value = storage.message;
  formData.email = storage.email;
  formData.message = storage.message;
}

form.addEventListener('input', (e) => {
  let value;
  if (e.target.tagName === 'INPUT') {
    value = e.target.value.trim();
    formData.email = value;
  } else if (e.target.tagName === 'TEXTAREA') {
    value = e.target.value.trim();
    formData.message = value;
  }

  saveFormData();
});

function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData.email = '';
    formData.message = '';
  }
});
