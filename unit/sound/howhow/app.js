var player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('test')
}

$('#send').click(() => {
  data = {
    "word": $('#word').val()
  }
  $.ajax({
    url: 'https://luffy.ee.ncku.edu.tw:1299/test',
    method: 'GET',
    data: data,
    success: async function onPlayerReady(res) {
      await player.playVideo()
      res = await JSON.parse(res)
      for (let i = 0; i < res.length; i++){
        await player.seekTo(res[i].startSec)
        await timeout(res[i].duration * 1000)
      }
      player.pauseVideo()

    }
  })
})

const timeout = (time) => {
    return new Promise((resolve, reject) => {
        if (time) {
            setTimeout(() => {
                resolve()
            }, time)
        } else {
            reject()
        }
    })
}
// vi:et:ts=2
