var element = document.querySelector('#menu');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    element.classList.add('!py-4', 'backdrop-blur-sm');
  } else {
    element.classList.remove('!py-4', 'backdrop-blur-sm');
  }
});