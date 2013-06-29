(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

 module('jQuery#loadStates', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
		}
	});

	test('is chainable', function() {
	  expect(1);
	  strictEqual(this.elems.loadStates(), this.elems, 'should be chainable');
	});	  
 }
  
  module('jQuery#loadStates.US', function() {
	  test('is selected', function() {
		expect(1);
		strictEqual(this.selectStates.loadStates({currentState: 'WA'}).children(':selected').text(), 'Washington', 'should be selected');
	  });
	  
	  asyncTest('', function() {
		expect(1);
		$.getJSON('../json/US.json', function(data) {
			deepEqual(data['WA'], 'Washington', 'should be one of states');
			start();
		});
	  });
	  
	  test('is all US states', function() {
		expect(1);
		strictEqual(this.selectStates.loadStates().children('option').length, 50, 'should be 50 states');
	  });
 
 });
 
  module('jQuery#loadStates.CA', function() {
  	  test('is selected', function() {
		expect(1);
		strictEqual(this.selectStates.loadStates({currentState: 'BC'}).children(':selected').text(), 'British Columbia', 'should be selected');
	  });

	asyncTest('', function() {
		expect(1);
		$.getJSON('../json/CA.json', function(data) {
			deepEqual(data['BC'], 'British Columbia', 'should be one of provinces');
			start();
		});
	});
  
    test('is all Canadian provinces and territories', function() {
		expect(1);
		strictEqual(this.selectStates.loadStates().children('option').length, 13, 'should be 10 provinces and 3 territories');
	});
  }

}(jQuery));
