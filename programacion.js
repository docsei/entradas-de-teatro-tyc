(function () {
  var buttons = document.querySelectorAll('.day-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var day = btn.getAttribute('data-day');
      buttons.forEach(function (b) {
        var active = b.getAttribute('data-day') === day;
        b.style.background = active ? '#f8a7c9' : 'transparent';
        b.style.color = active ? '#4b1528' : '#f8a7c9';
      });
      document.querySelectorAll('.day-panel').forEach(function (p) {
        p.style.display = p.id === 'panel-' + day ? 'flex' : 'none';
      });
    });
  });
})();
