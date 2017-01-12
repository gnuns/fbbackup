chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		var commentable = document.getElementsByClassName("commentable_item");
		for (var postElIndex in commentable) {
			var postEl = commentable[postElIndex];
			postEl.innerHTML = 'EITAA';
		}

	}
	}, 10);
});
