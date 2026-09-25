document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      toggle.textContent = isOpen ? '×' : '☰';
    });
  }

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var name = document.getElementById('name').value.trim();
      alert('Thanks, ' + name + '! Your project inquiry is ready. In a live website, this is where it would be sent to EliteCoat.');
      form.reset();
    });
  }
});
