const type = 'audio' // try 'vedio'
const ext = 'video' === type ? 'mp4' : 'webm'
const recordedChunks = []
navigator.mediaDevices.getUserMedia({
  audio: true,
  video: 'vedio' === type,
}).then(stream => {
  if ('vedio' === type)
    document.querySelector('#stream-video').srcObject = stream
  window.recorder = new MediaRecorder(stream, {mimeType: `${type}/${ext}`})
  recorder.ondataavailable = event => {
    if (0 === event.data.size) return
    recordedChunks.push(event.data)
  }
}).catch(err => console.log(err))
const start = () => {
  recordedChunks.length = 0
  recorder.start(100) // a chunk per 100 ms
}
const stop = () => {
  if ('inactive' === recorder.state) return
  recorder.stop()
}
const download = () => {
  stop()
  let blob = new Blob(recordedChunks, {type: `${type}/${ext}`})
  let a = document.createElement('a')
  document.body.appendChild(a)
  a.download = `test.${ext}`
  a.href = window.URL.createObjectURL(blob)
  a.click()
  document.body.removeChild(a)
}

const speak = () => {
  const utter = new SpeechSynthesisUtterance()
  // console.log(speechSynthesis.getVoices()) // try enable this
  utter.voice = speechSynthesis.getVoices()
    .filter(v => v.name.includes('臺灣'))[0]
  utter.text = document.getElementById('text').value
  speechSynthesis.speak(utter)
}
// speak() // try enable this

// vi:et:ts=2
