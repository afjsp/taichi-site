/* 全站 Nav Dropdown — hover intent + mobile click */
(function () {
  document.querySelectorAll('.has-dropdown').forEach(function (li) {
    var timer;

    /* 桌機：滑鼠進入立即開，離開等 200ms 再關 */
    li.addEventListener('mouseenter', function () {
      clearTimeout(timer);
      li.classList.add('open');
    });
    li.addEventListener('mouseleave', function () {
      timer = setTimeout(function () {
        li.classList.remove('open');
      }, 200);
    });

    /* 手機：點連結切換開關 */
    var topLink = li.querySelector(':scope > a');
    if (topLink) {
      topLink.addEventListener('click', function (e) {
        if (window.innerWidth <= 880) {
          e.preventDefault();
          li.classList.toggle('open');
        }
      });
    }
  });

  /* 點擊其他地方關閉 */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      document.querySelectorAll('.has-dropdown.open')
        .forEach(function (li) { li.classList.remove('open'); });
    }
  });
})();
