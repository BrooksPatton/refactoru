$(document).on('ready', function() {
  var templateSource = $('#my-template').html();

  var myTemplate = Handlebars.compile(templateSource);

  var output = myTemplate({
  	header: 'hello boulder',
  	message: 'This is a message from JavaScript'
  });

  var context2 = {
  	header: 'this is from context2',
  	message: 'hello again'
  };

  $('body').append(output);

  $('body').append( myTemplate(context2) );

  // List out our favorite games!!!
  var games = [
    {title: 'Braid', platform: 'all', price: '$5.00'},
    {title: 'Half Life 2', platform: 'pc'},
    {title: 'System Shock 2', platform: 'pc', price: '$10.99'}
  ];

  var gameItemSource = $('#item-template').html();
  var gameItemTemplate = Handlebars.compile(gameItemSource);

  for(var i = 0; i < games.length; i++) {
    $('#games-list').append( gameItemTemplate( games[i] ) );
  }

  // Using a worker helper
  var helperSource = $('#helper-template').html();
  var helperTemplate = Handlebars.compile(helperSource);
  $('#games-list-helper').append(helperTemplate({games: games}));
});