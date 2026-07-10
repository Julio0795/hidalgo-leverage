(function () {
  var EMAIL = 'hidalgo.leverage@outlook.com';
  var dropdowns = document.querySelectorAll('.email-dropdown');

  function closeAll() {
    dropdowns.forEach(function (dropdown) {
      var toggle = dropdown.querySelector('.email-dropdown-toggle');
      var menu = dropdown.querySelector('.email-dropdown-menu');
      toggle.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    });
  }

  function openDropdown(dropdown) {
    var toggle = dropdown.querySelector('.email-dropdown-toggle');
    var menu = dropdown.querySelector('.email-dropdown-menu');
    toggle.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
  }

  dropdowns.forEach(function (dropdown) {
    var toggle = dropdown.querySelector('.email-dropdown-toggle');
    var copyBtn = dropdown.querySelector('.email-dropdown-copy');

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      closeAll();
      if (!isOpen) {
        openDropdown(dropdown);
      }
    });

    dropdown.querySelector('.email-dropdown-menu').addEventListener('click', function (e) {
      e.stopPropagation();
    });

    copyBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      navigator.clipboard.writeText(EMAIL).then(function () {
        var original = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(function () {
          copyBtn.textContent = original;
        }, 1500);
      });
    });
  });

  document.addEventListener('click', closeAll);
})();
