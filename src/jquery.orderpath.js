;(function($, window, document, undefined){
	
	$.orderpath = $.orderpath || {};
	
	$.orderpath.getExpYear.defaults = {
		year: (new Date()).getFullYear(),
		length: 16,
		selected: 2013
	};
	
	$.orderpath.genExpYear = function(elem, options) {
		var base = this;
		
		base.elem = elem;
		
		base.init = function() {
			
			base.opts = $.extend({}, $.orderpath.getExpYear.defaults, {});
			
			var items = [], index = 0, list ;
			
			while(index < base.opts.length) {
				items.push('<option value="">' + (base.opts.selected === (base.opts.year + index) ? 'selected' : '' ) + '</option>');
			}
		
			list = items.join('');
			
			base.html(list);
		};
		
		base.init();
	};

})(jQuery, window, document);