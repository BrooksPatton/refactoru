describe('Load Calendar Data', function() {
  it('should return an object', function() {
    expect( typeof(loadCalendarData() ) ).toEqual('object');
  });
});

describe('Generate a week', function() {
	it('should generate a week worth of calendar days', function() {
		expect( typeof(generateWeek( loadCalendarData(), new Date() ) ) ).toEqual('object');
	});
});