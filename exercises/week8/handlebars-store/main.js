$(document).on('ready', function() {
  var handlebarsTemplate = $('#handlebars-template').html();
  var template = Handlebars.compile(handlebarsTemplate);
  $('#product-container').append(template({data: productsData.productsList}));
});