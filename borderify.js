window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
	if (e.target.tagName=="A" && e.target.href.endsWith(".wav")) {
		browser.runtime.sendMessage(e.target.href); 
		e.preventDefault();
	}
}

console.log("script inserted");