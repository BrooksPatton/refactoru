$(document).on('ready', function() {
  $('.container').append(starcraft.generateTable(data));
  $('#table_id').DataTable();
});