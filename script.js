const checkbox = document.getElementById('check');
const ul = document.querySelector('ul');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    ul.classList.add('show');
  } else {
    ul.classList.remove('show');
  }
});
