function getUserMedia(options, successCallback, failureCallback) {
    var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (api) {
      return api.bind(navigator)(options, successCallback, failureCallback);
    }
    alert('User Media API not supported.');
}

var theStream;
var theRecorder;
var recordedChunks = [];


function getStream(){
  var constraints = {video: true, audio: true};
  getUserMedia(constraints, function (stream) {
    var mediaControl = document.querySelector('video');
    if (navigator.mozGetUserMedia) {
      mediaControl.mozSrcObject = stream;
    }
    else{
      mediaControl.srcObject = stream;
      mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
    }

    theStream = stream;
    try {
      recorder = new MediaRecorder(stream, {mimeType: 'video/webm'});
    } catch (e) {
      console.error('Exception while creating MediaRecorder: ' + e);
      return;
    }
    theRecorder = recorder;
    console.log('MediaRecorder created');
    recorder.ondataavailable = recorderOnDataAvailable;
    recorder.start(100);
  }, function(err){
    alert('Error: ', err);
  });
}

function recorderOnDataAvailable (event){
  if (event.data.size == 0) return;
  recordedChunks.push(event.data);
}

function stop(){
  theStream.getTracks().forEach((track) => {track.stop();})
}

function download() {
  console.log('Saving data');
  theRecorder.stop();
  theStream.getTracks()[0].stop();

  var blob = new Blob(recordedChunks, {type: "video/webm"});
  var url = (window.URL || window.webkitURL).createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = 'test.webm';
  a.click();
}
