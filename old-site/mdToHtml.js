const fs = require('fs');
const path = require('path');
const request = require('request');
const showdown = require('showdown');

const docs = [

];

request('https://raw.githubusercontent.com/yokyak/react-agent/master/README.md', (error, response, body) => {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(body);
  fs.writeFileSync('./source/README.html', html);
});