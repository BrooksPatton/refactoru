var parkingLot = {
	rows: 4,
	cols: 2,
	slots: [
		null,
		{ owner: 'Jake', color: 'red' },
		null,
		null,
		{ owner: 'Russel', color: 'skyblue' },
		{ owner: 'Amber', color: 'gold' },
		null,
		null
	] 
};

// searches the parking lot for a bike with the given owner
var getBikeByOwner = function(parkingLotData, owner) {
	for(var i=0; i<parkingLotData.slots.length; i++) {
		var currentBike = parkingLotData.slots[i];
		if(currentBike && currentBike.owner === owner) {
			return currentBike;
		}
	}
	return null;
};

/* Accessing individual values in the nested data structure
parkingLot.rows // 4
parkingLot.cols // 2
parkingLot.slots[0] // null
parkingLot.slots[1] // { owner: 'Jake', color: 'red' }
parkingLot.slots[5].color // gold
*/

var createParkingLot = function(parkingLotData) {
	var table = $('<table class="parking-lot">');

	// create each row
	for(var i=0; i<parkingLotData.rows; i++) {
		var row = $('<tr>');
		table.append(row);

		// create the cells within the row
		for(var j=0; j<parkingLotData.cols; j++) {
			var cellIndex = i*parkingLotData.cols + j;
			var cell = $('<td>');
			row.append(cell);

			// if there's a bike in the slot, render it
			if(parkingLotData.slots[cellIndex]/* !== null*/) {
				cell.attr('data-owner', parkingLotData.slots[cellIndex].owner);
				cell.append('<span class="bike">o-}o</span>');
				cell.css('color', parkingLotData.slots[cellIndex].color || 'black')

				// add color swatches
				var blackSwatch = $('<a href="#" class="swatch">').css('background-color', 'black');
				var redSwatch = $('<a href="#" class="swatch">').css('background-color', 'red');
				var blueSwatch = $('<a href="#" class="swatch">').css('background-color', 'skyblue');
				var greenSwatch = $('<a href="#" class="swatch">').css('background-color', 'gold');
				cell.append(blackSwatch, redSwatch, blueSwatch, greenSwatch);
			}
		}
	}

	return table;
};

$(document).on('ready', function() {

	// attach handlers
	$(document).on('click', '.swatch', function(e) {
		e.preventDefault();

		// get swatch color
		var swatchColor = $(this).css('background-color');

		// access the td
		var td = $(this).closest('td');

		// change the color of the td
		td.css('color', swatchColor);

		// get the bike object associated with this cell
		// get the owner
		var owner = td.attr('data-owner');
		var bike = getBikeByOwner(parkingLot, owner);
		bike.color = swatchColor;
	});

	// create table
	var table = createParkingLot(parkingLot);
	$('body').append(table);

});