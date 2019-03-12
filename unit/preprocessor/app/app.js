import './app.sass'
// step 5 : learn new Javascript standard
// Use new feature in es6, Module, importing './app.sass'.

// step 4 : use jQuery with Parcel
// Read : https://stackoverflow.com/questions/47968529/how-do-i-use-jquery-and-jquery-ui-with-parcel-bundler
const jquery = require("jquery")
window.$ = window.jQuery = jquery

// step 5 : learn new Javascript standard
// Read the following example and google es6.
// Here are `Spread operator` and `Template literals`

const stuendts = ['Jine', 'Tom', 'Anna']
const teachers = ['Tony', 'Aaron']
const people = [...teachers, ...stuendts]

$(document).ready(function() {
  $('button').click(()=>console.log(`There are ${people} in the classroom`))
})
