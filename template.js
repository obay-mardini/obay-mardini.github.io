const path = require('path');
const fs = require('fs');

String.prototype.replaceAll = function(search, replacement) {
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

const include = (html, part) => {
  return html.replaceAll(`__INCLUDE_${part.toUpperCase()}__`, fs.readFileSync(path.resolve(`html/partials/${part}.html`), 'utf8'));
}

module.exports = (page) => {
  let html = fs.readFileSync(path.resolve(`html/${page}.html`), 'utf8');
  html = include(html, 'head');
  html = include(html, 'sidebar');
  html = include(html, 'content_head');
  html = include(html, 'js');
  html = include(html, 'preloader');
  return html;
};