// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '390',
		width: '640',
		videoId: 'M7lc1UVf-VE',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 6000);
		done = true;
	}
}

function stopVideo() {
  player.stopVideo();
}

function playVideo(){
   player.playVideo();
}

function pauseVideo(){
   player.pauseVideo();
}

function muteVideo(){
   player.mute();
}

function unmuteVideo(){
   player.unMute();
}

function volume1(){
   player.setVolume(30);
}

function volume2(){
   player.setVolume(80);
}

function volume3(){
   player.setVolume(100);
}

function videoStatus(){
  status = player.getPlayerState();

  if(status == -1){
      console.log("PLAYER UNSTARTED")
  } else if (status == 0){
      console.log("PLAYER ENDED")
  } else if (status == 1){
      console.log("PLAYER PLAYING")
  } else if (status == 2){
      console.log("PLAYER PAUSED")
  } else if (status == 3){
      console.log("PLAYER BUFFERING")
  } else if (status == 5){
      console.log("PLAYER CUED")
  } else {
      console.log("PLAYER NO STATUS")
  }
}

$("#videoPlay").click(function() {
   playVideo();
});

$("#videoPause").click(function() {
   pauseVideo();
});

$("#videoStop").click(function() {
   stopVideo();
});

$("#videoMute").click(function() {
   muteVideo();
});

$("#videoUnmute").click(function() {
   unmuteVideo();
});

$("#videoVolume1").click(function() {
   volume1();
});

$("#videoVolume2").click(function() {
   volume2();
});

$("#videoVolume3").click(function() {
   volume3();
});

$("#videoFullScreen").click(function() {
   //playVideo();
});

$("#checkStatus").click(function() {
   videoStatus();
});