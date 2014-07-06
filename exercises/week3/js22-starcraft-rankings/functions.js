var starcraft = (function namespace() {
	var generateTable = function generateTable(data) {
		insertTableShell();
		var totalGames = addTotalGames(data.data);
		addTotalGamesTitle(data.cols);
		var dataColumns = prepDataColumns(data.cols);
		initTable(dataColumns, data.data);
		generateStatistics(data, totalGames);
	};

	var insertTableShell = function insertTableShell() {
		$('.container').append('<table class="display" id="starcraft"</table>');
	};

	var addTotalGames = function addTotalGames(data) {
		var total = 0;
		for(var i = 0; i < data.length; i++) {
			var games = _.filter(data[i], function(element) {
				return typeof(element) === 'number';
			});
			var totalGames = _.reduce(games, function(memo, num) {return memo + num;}, 0);
			data[i].push(totalGames);
			total += totalGames;
		}
		return total;
	};

	var addTotalGamesTitle = function addTotalGamesTitle(data) {
		data.push('games played');
	};

	var prepDataColumns = function prepDataColumns(items) {
		var cols = [];
		items.forEach(function(title) {
			cols.push({title: title});
		});
		return cols;
	}

	var initTable = function initTable(columnTitles, data) {
		$('#starcraft').DataTable({
			columns: columnTitles,
			data: data,
			pagingType: 'full_numbers',
			lengthMenu: [10, 20, 50, 100],
			pageLength: 20
		});
	};

	var generateStatistics = function generateStatistics(data, totalGames) {
		var totalPlayers = getTotalPlayers(data.data);
		var popularRace = getPopularRace(data.data);
		displayTotalPlayers(totalPlayers);
		displayTotalGames(totalGames);
		displayPopularRace(popularRace);
	};

	var getTotalPlayers = function getTotalPlayers(data) {
		return data.length;
	};

	var getPopularRace = function getPopularRace(data) {
		var races = [];
		var popularRace;
		data.forEach(function(player) {
			races.push(player[3]);
		});
		var gaussCollection = new gauss.Collection(races);
		gaussCollection.mode(function(race) {
			popularRace = race;
		});
		return popularRace;
	};

	var displayTotalPlayers = function displayTotalPlayers(total) {
		$('#total-players').text(total);
	};

	var displayTotalGames = function displayTotalGames(total) {
		$('#total-games').text(total);
	};

	var displayPopularRace = function displayPopularRace(race) {
		$('#popular-race').text(race);
	};

	return {
		generateTable: generateTable,
		generateStatistics: generateStatistics
	};

})();