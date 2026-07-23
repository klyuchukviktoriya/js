const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
  } else {

    console.log({
      email: email,
      password: password
    });

    form.reset();
  }

})

