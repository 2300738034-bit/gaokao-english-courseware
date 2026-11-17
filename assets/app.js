// 高考英语·课件集 —— 前端渲染逻辑
(function () {
  var C = window.CATALOG;
  var app = document.getElementById('app');

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function totalCount() {
    return C.books.reduce(function (sum, b) { return sum + b.coursewares.length; }, 0);
  }

  function renderHome() {
    var cards = C.books.map(function (b) {
      return '' +
        '<a class="book-card c-' + b.color + '" href="#/book/' + b.id + '">' +
          '<span class="book-dot"></span>' +
          '<span class="book-name">' + esc(b.name) + '</span>' +
          '<span class="book-count">' + b.coursewares.length + ' 个课件</span>' +
        '</a>';
    }).join('');

    app.innerHTML =
      '<header class="site-header">' +
        '<h1 class="site-title">' + esc(C.siteTitle) + '</h1>' +
      '</header>' +
      '<div class="section-label">六大板块</div>' +
      '<main class="grid">' + cards + '</main>' +
      '<footer class="site-footer">共收录 ' + totalCount() + ' 个课件</footer>';
  }

  function renderBook(id) {
    var b = C.books.filter(function (x) { return x.id === id; })[0];
    if (!b) { renderHome(); return; }

    var items = b.coursewares.length
      ? b.coursewares.map(function (cw) {
          return '' +
            '<a class="cw-item" href="' + esc(cw.file) + '" target="_blank" rel="noopener">' +
              '<span class="cw-bar c-' + b.color + '"></span>' +
              '<span class="cw-info">' +
                '<span class="cw-title">' + esc(cw.title) + '</span>' +
                '<span class="cw-date">添加于 ' + esc(cw.added) + '</span>' +
              '</span>' +
              '<span class="cw-open">打开课件 →</span>' +
            '</a>';
        }).join('')
      : '<div class="empty">这本书还没有课件，敬请期待～</div>';

    app.innerHTML =
      '<header class="site-header">' +
        '<a class="back" href="#/">← 返回首页</a>' +
        '<h1 class="site-title">' + esc(b.name) + '</h1>' +
        '<p class="site-subtitle">共 ' + b.coursewares.length + ' 个课件</p>' +
      '</header>' +
      '<main class="list">' + items + '</main>';
  }

  function route() {
    var hash = location.hash.replace(/^#\/?/, '');
    var m = hash.match(/^book\/(.+)$/);
    if (m) { renderBook(decodeURIComponent(m[1])); }
    else { renderHome(); }
  }

  window.addEventListener('hashchange', route);
  route();
})();
