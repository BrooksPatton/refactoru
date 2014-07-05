var starcraft = (function namespace() {
	var generateTable = function generateTable(data) {
		insertTableShell();
		addTotalGames(data.data);
		addTotalGamesTitle(data.cols);
		var dataColumns = prepDataColumns(data.cols);
		initTable(dataColumns, data.data);
	};

	var insertTableShell = function insertTableShell() {
		$('.container').append('<table class="display" id="starcraft"</table>');
	};

	var addTotalGames = function addTotalGames(data) {
		for(var i = 0; i < data.length; i++) {
			var games = _.filter(data[i], function(element) {
				return typeof(element) === 'number';
			});
			var totalGames = _.reduce(games, function(memo, num) {return memo + num;}, 0);
			data[i].push(totalGames);
		}
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

	return {
		generateTable: generateTable,
	};

})();