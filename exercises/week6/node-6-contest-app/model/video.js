var videoContest = (function() {
	var videoList = [];

	var generateYoutubeUrl = function(url) {
		var newUrl = url.replace('watch?v=', 'embed/');
		var arr = newUrl.split('&');
		newUrl = arr[0]
		return newUrl;
	};

	return {
		videoList: videoList,
		generateYoutubeUrl: generateYoutubeUrl,
	};
})();

module.exports = videoContest;