var starcraft = (function namespace() {
	var generateTable = function generateTable(data) {
		var table = $('<table class="display" id="table_id">');
		table.append(generateTableHead(data.cols));
		table.append(generateTableBody(data.data));
		return table;
	};

	var generateTableHead = function generateTableHead(data) {
		var head = $('<thead><tr>');
		data.forEach(function(item) {
			head.append('<td>' + item + '</td>');
		});
		return head;
	};

	var generateTableBody = function generateTableBody (data) {
		var body = $('<tbody>');
		data.forEach(function(player) {
			var row = $('<tr>');
			player.forEach(function(item) {
				var td = $('<td>' + item + '</td>');
				row.append(td);
			});
			body.append(row);
		});
		return body;
	};

	

	return {
		generateTable: generateTable
	};

})();