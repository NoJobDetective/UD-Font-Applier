(function() {
  // UDフォントを適用するCSSルールを追加
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '* { font-family: "UD Font", sans-serif; }';
  document.head.appendChild(style);
})();
