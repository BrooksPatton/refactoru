var starcraft = (function namespace() {
	var generateTable = function generateTable(data) {
		insertTableShell();
		var dataColumns = prepDataColumns(data.cols);
		initTable(dataColumns, data.data);
	};

	var insertTableShell = function insertTableShell() {
		$('.container').append('<table class="display" id="starcraft"</table>');
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