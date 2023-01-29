const path = require('path');
const fs = require('fs');

module.exports = (page) => {
  let html = fs.readFileSync(path.resolve(`html/${page}.html`), 'utf8');
  // html = include(html, 'head');
  // html = include(html, 'sidebar');
  // html = include(html, 'content_head');
  // html = include(html, 'js');
  // html = include(html, 'preloader');
  return html;
};