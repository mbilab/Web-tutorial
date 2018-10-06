$(document).ready(function() { 
  $('#bug').click(function(e){
    setTimeout(() => {
      $('#A').html('A')
      console.log('A')
    }, 1000);
    setTimeout(() => {
      $('#B').html('B')
      console.log('B')
    }, 1000);
  })

  function demo(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });
  }

  function addPromise(){
    return new Promise(resolve => {
      demo('A').then((a) => {
        $('#promise_A').html(a)
        console.log(a)
        demo('B').then((b) => {
          $('#promise_B').html(b)
          console.log(b)
        })
      })
    });
  }

  $('#promise').click(function(e){
    addPromise().then((r) => {
      return
    });
  })

  async function addAsync(x) {
    const a = await demo('A');
    console.log(a)
    $('#async_A').html(a)
    const b = await demo('B');
    $('#async_B').html(b)
    console.log(b)
  }

  $('#async').click(function(e){
    addAsync().then((r) => {
      return
    });
  })
})
