navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
}).then(stream => {
  // window.stream = stream
  document.querySelector('#stream-video').srcObject = stream
}).catch(err => console.log(err))

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
