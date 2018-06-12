'use strict';

var constraints = {
  video: true
}

var video = document.querySelector('video');

function handleSuccess(stream){
  window.stream = stream;
  video.srcObject = stream;
}

function handleError(error){
  console.log('getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);
