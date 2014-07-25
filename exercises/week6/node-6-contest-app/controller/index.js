var videoContest = require('../model/video.js');

var indexController = (function() {
	var MAX_VIDEOS_PER_VOTE = 8;

	var loadIndex = function(req, res) {
		res.render('index');
	};

	var submit = function(req, res) {
		res.render('submit', {
			videoSubmissions: videoContest.videoList.length
		});
	};

	var submitVideoForm = function(req, res) {
		if(!isAtMaxVideos()) {
			var video = req.body;
			video.url = videoContest.generateYoutubeUrl(video.url);
			video.id = videoContest.generateVideoId();
			video.votes = 0;
			videoContest.videoList.push(video);
			res.redirect('/submit');
		}
		else {
			res.redirect('vote');
		}
	};

	var isAtMaxVideos = function() {
		if(videoContest.videoList.length < MAX_VIDEOS_PER_VOTE) {
			return false;
		}
		return true;
	};

	var vote = function(req, res) {
		if( isAtMaxVideos() ) {
			var videosToVoteOn = videoContest.getTwoRandomVideos();
			res.render('vote', {
				videos: videosToVoteOn
			});
		}
		else {
			res.render('vote', {
				message: 'Not enough videos'
			});
		}
	};

	return {
		loadIndex: loadIndex,
		submit: submit,
		submitVideoForm: submitVideoForm,
		vote: vote
	};
})();

module.exports = indexController;