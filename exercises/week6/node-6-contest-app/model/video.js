var _ = require('underscore');

var videoContest = (function() {
	var videoList = [];
	var videoId = 0;

	var generateYoutubeUrl = function(url) {
		var newUrl = url.replace('watch?v=', 'embed/');
		var arr = newUrl.split('&');
		newUrl = arr[0]
		return newUrl;
	};

	var generateVideoId = function() {
		return videoId++;
	};

	var getTwoRandomVideos = function() {
		var videoListCopy = _.shuffle(videoList);
		return [
			videoListCopy[0],
			videoListCopy[1]
		];
	};

	var voteOnVideo = function(id) {
		var id = Number(id);
		console.log(id);
		var videoListIndex = _.findWhere(videoList, {id: id});
		console.log(videoListIndex);
	};

	return {
		videoList: videoList,
		generateYoutubeUrl: generateYoutubeUrl,
		generateVideoId: generateVideoId,
		getTwoRandomVideos: getTwoRandomVideos,
		voteOnVideo: voteOnVideo
	};
})();

module.exports = videoContest;