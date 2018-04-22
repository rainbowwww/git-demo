#!/usr/bin/env node
var fs = require('fs')

var dirName = process.argv[2] 

fs.mkdirSync("./" + dirName)
process.chdir("./" + dirName) 
fs.mkdirSync('css') 
fs.mkdirSync('js') 

fs.writeFileSync("./index.html", "")
fs.writeFileSync("css/style.css", "")
fs.writeFileSync("./js/main.js", "")
  try {
    fs.appendFileSync('./index.html', ' <!DOCTYPE><title>Hello</title><h1>Hi</h1>');
    console.log('The " <!DOCTYPE><title>Hello</title><h1>Hi</h1>" was appended to file!');
  } catch (err) {
    /* Handle the error */
  }
  try {
    fs.appendFileSync('css/style.css', 'h1{color: red;}');
    console.log('The "h1{color: red;}" was appended to file!');
  } catch (err) {
    /* Handle the error */
  }
  try {
    fs.appendFileSync('./js/main.js', 'var string = "Hello World"alert(string)');
    console.log('The "var string = "Hello World"alert(string)" was appended to file!');
  } catch (err) {
    /* Handle the error */
  }
process.exit(0)