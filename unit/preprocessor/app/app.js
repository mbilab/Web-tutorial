import './app.sass'
import '@babel/polyfill'

// use something new in js
// here we choose `async` at Nov 2017
const f = async () => {
    document.getElementById('title').style.color = 'red'
}
f()
