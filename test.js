var url = new URL(window.location.href);
var c = url.searchParams.get("url");
var audio = new Audio(c);
audio.play();
audio.ontimeupdate = function() {
	document.getElementById('prog').value = Math.ceil((audio.currentTime/audio.duration)*100);
};