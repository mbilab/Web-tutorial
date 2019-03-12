import "babel-polyfill"
// let/const
// Default Parametersi and Arrow Function
const func1 = (v='default') => {console.log(v)}
func1()
// Spread Operator and Template Literals
const stuendts = ['Jine', 'Tom', 'Anna']
const teachers = ['Tony', 'Aaron']
const people = [...teachers, ...stuendts]

console.log(`There are ${people} in the classroom`)

// Promise, async, and await
// modify from mozilla.org
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/async_function
const resolveAfter2Seconds = (x) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 2000)
  })
}

const synchronization = async() => {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(20);
  return a + b
}

const asynchronization = async(x) => {
  const a = resolveAfter2Seconds(20);
  const b = resolveAfter2Seconds(20);
  return await a + await b
}

(async () => {
  console.log('synchronization() start. Wait 4 seconds')
  const syn = await synchronization()
  console.log(syn)

  console.log('asynchronization() start. Wait 2 seconds')
  const asyn = await asynchronization()
  console.log(asyn)
})()

