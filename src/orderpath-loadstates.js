/*
 * orderpath-loadstates
 * https://github.com/deanyan/jquery-orderpath-loadstates
 *
 * Copyright (c) 2013 Dean Yan
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.awesome = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.awesome.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.awesome.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));

;(function( $, window, document, undefined ) {
	
	$.fn.loadStates = function(options) {
			var that = this;
		
			var defaults = {
					country: 'US',
					dom: '#states',
					currentState: ''
			};
			
			defaults.url  =  '../json/' + defaults.country + '.json';
			
			var opts = $.extend({}, defaults, options);

			if(!/^select$/gi.test(this.get(0).nodeName)) {
				return this;
			}
			
			var states = that.data(opts.country + '_states');
			
			console.log(states);
			
			if(states) {
				$(opts.dom).html(states);
					
			} else {
			
				$.getJSON(opts.url).done(function(data)  {
					
					var items = [];
					
					var domState = $(opts.dom),
						  required = domState.attr('required') || domState.data('required') || domState.hasClass('required') ? ' *' : '';
			
					items.push('<option value="">' + (opts.country === 'US' ? 'State' + required  :  'Province' + required) + '</option>');
					
					$.each(data, function(key, val) {
						items.push('<option value="' + key + '"' + (opts.currentState === key  ? ' selected' : '') + '>' + val + '</option>');
					});
					
					states = items.join('');
					
					$(opts.dom).html(states);
					
					states = states.replace(/selected/gi, '');
					
					that.data(opts.country + '_states', states);
						
				});
			}
			
			return this;
		}
	

	var methods = {

		loadCountries: function(options) {
			var that = this;
		
			var defaults = {
				currentCountry: ''
			};
			
			if(!/^select$/gi.test(this.get(0).nodeName)) {
				return this;
			}
			
			var opts = $.extend({}, defaults, options);
			
			$(this).find('option').each(function() {
				if( opts.currentCountry === $(this).val() ) {
					$(this).attr('selected', '');
				}
			});
			
			return this;
		},
		
	 /**
		*	@country: 'US', 'ca' Default value is US
		*   @dom:  'dom class or ID in HTML select tag.' Default value is #states
		*   @currentState: 'used set selected state when loading HTML' Default value is WA
		*   @url: 'JSON file url.' Default value is '..'/json/@country.json
		*/
		loadStates: function(options) {
			var that = this;
		
			var defaults = {
					country: 'US',
					dom: '#states',
					currentState: ''
			};
			
			defaults.url  =  '../json/' + defaults.country + '.json';
			
			var opts = $.extend({}, defaults, options);

			if(!/^select$/gi.test(this.get(0).nodeName)) {
				return this;
			}
			
			var states = that.data(opts.country + '_states');
			
			console.log(states);
			
			if(states) {
				$(opts.dom).html(states);
					
			} else {
			
				$.getJSON(opts.url).done(function(data)  {
					
					var items = [];
					
					var domState = $(opts.dom),
						  required = domState.attr('required') || domState.data('required') || domState.hasClass('required') ? ' *' : '';
			
					items.push('<option value="">' + (opts.country === 'US' ? 'State' + required  :  'Province' + required) + '</option>');
					
					$.each(data, function(key, val) {
						items.push('<option value="' + key + '"' + (opts.currentState === key  ? ' selected' : '') + '>' + val + '</option>');
					});
					
					states = items.join('');
					
					$(opts.dom).html(states);
					
					states = states.replace(/selected/gi, '');
					
					that.data(opts.country + '_states', states);
						
				});
			}
			
			return this;
		}
	};
	
	$.fn.orderpath = function(method){
		if(methods[method]) {
		
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			
		} else if (typeof method == 'object' || !method){
		
			return methods.init.apply(this, arguments);
			
		} else {
			$.error('Method' + method + 'does not exist on jQuery orderpath');
			
		}
	};
	
})( jQuery, window, document );