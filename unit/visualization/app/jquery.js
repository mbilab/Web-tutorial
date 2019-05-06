// Step 1
const data = {
  N2: [.2, .2, .2, .2, .2],
  P7: [.2, .2, .2, .2, .1, .1],
}

$(() => {
  $('button').click(e => {
    const code = $(e.target).data('code')
    console.log(data[code])

    //Step 3

    //Step 2

  })
})


// vi:et
