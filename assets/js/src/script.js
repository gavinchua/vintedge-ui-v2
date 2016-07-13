/*
Table of Contents:
==================
jQuery Ready
	
	- 
	
Functions
	


*/





/*	=============================================================================
	jQuery Ready
	========================================================================== */
	
	$( document ).ready( function(){
		/*	--------------------------------------------------
			:: Load Google Font
			-------------------------------------------------- */
			loadGoogleFontFN();
			
		/*	--------------------------------------------------
			:: Window Width
			-------------------------------------------------- */
			windowWidthFN();
	});



/*	=============================================================================
	jQuery Window Resize
	========================================================================== */
	
	$( window ).resize(function() {
		resizeEvent(function() {
			
		}, 100, '2572275020' );
	});
	
	var resizeEvent = (function() {
		var timers = {};
		return function( callback, ms, uniqueId ) {
			console.log(uniqueId);
			if ( !uniqueId ) {
				uniqueId = 'I_need_unique_ID';
			}
			if ( timers[uniqueId] ) {
				clearTimeout( timers[uniqueId] );
			}
			timers[uniqueId] = setTimeout( callback, ms );
		};
	})();



/*	=============================================================================
	Functions
	========================================================================== */
	
	/*	--------------------------------------------------
		:: Load Google Font
		-------------------------------------------------- */
		function loadGoogleFontFN() {
			WebFontConfig = {
				google: { families: [ 'Lato:300,700:latin' ] }
			};
			(function() {
				var wf = document.createElement('script');
				wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
				wf.type = 'text/javascript';
				wf.async = 'true';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(wf, s);
			})();
		}
		
	/*	--------------------------------------------------
		:: Window Width
		-------------------------------------------------- */
		function windowWidthFN() {
			var windowWidth =  $( window ).width();
			return windowWidth;
		}
		
	/*	--------------------------------------------------
		:: Window Height
		-------------------------------------------------- */
		function windowHeightFN() {
			var windowHeight =  $( window ).height();
			return windowHeight;
		}
		
	/*	--------------------------------------------------
		:: Body Height
		-------------------------------------------------- */
		function bodyHeightFN() {
			var bodyHeight =  $( 'body' ).height();
			return bodyHeight;
		}
		
	/*	--------------------------------------------------
		:: Avoid `console` errors
		-------------------------------------------------- */
		(function() {
			var method;
			var noop = function () {};
			var methods = [
				'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
				'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
				'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
				'timeStamp', 'trace', 'warn'
			];
			var length = methods.length;
			var console = (window.console = window.console || {});
		
			while (length--) {
				method = methods[length];
		
				// Only stub undefined methods.
				if (!console[method]) {
					console[method] = noop;
				}
			}
		}());