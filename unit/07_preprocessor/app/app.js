import './index.pug'
import './app.sass'

// use something new in js
// here we choose `async` at Nov 2017
const f = async () => {
    document.getElementById('title').style.color = 'red'
}
f()
