import './app.sass'
import '@babel/polyfill'

const jquery = require("jquery");
window.$ = window.jQuery = jquery;

// use something new in js
// here we choose`Spread operator` and `Template literals`

const stuendts = ['Jine', 'Tom', 'Anna']
const teachers = ['Tony', 'Aaron']
const people = [...teachers, ...stuendts]

$(document).ready(function() {
  $('#button').click(()=>console.log(`There are ${people} in the classroom`))
})
