(function (window) {
var helloSpeaker ={};
var speakWord="Hello";
helloSpeaker.Speak = function(names) {
	console.log(speakWord+" "+names);
}
window.helloSpeaker=helloSpeaker;
	window.helloSpeaker.speak = helloSpeaker.speak;

})(window);