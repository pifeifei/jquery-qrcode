(function( $ ){
	$.fn.qrcode = function(options) {
		// if options is string, 
		if( typeof options === 'string' ){
			options	= { text: options };
		}

		// set default values
		// typeNumber < 1 for automatic calculation
		options	= $.extend( {}, {
			// render		: "canvas",
			width		: 256,
			height		: 256,
			typeNumber	: -1,
			correctLevel : QRCode.CorrectLevel.H,//QRErrorCorrectLevel.H,
			background   : "#ffffff",
			foreground   : "#000000"
		}, options);

		return this.each(function(){
			new QRCode($(this)[0], options);
		});
	};
})( jQuery );
