/*
 * Copyright (c) 2012 Mike King @micjamking (http://dev.85pixels.com)
 * 
 * jQuery Menutron plugin
 * Version 1.0 (March 2012)
 *
 * Licensed under the MIT License
 */

(function($){
	$.fn.menutron = function(options) {

		var defaults = {
			maxScreenWidth: 600,
			menuTitle: 'Selecione...'
		};

		var options = $.extend(defaults, options);

		return this.each(function() {
			
			var menu = $(this).children();		
			var selectMenu = $('<select>').css("display", "none");
			var optGroup = $('<optgroup>').css("display", "none");

			init();

			function init() {
				checkWidth();
				createMenu();
				transformMenu();
			}
			
			function checkWidth(){
				
				// Media query for device screens (default: 600px)
				// *Note, I would like to use window.matchMedia(screenWidth).matches here, but it does not work on 		
				// Android 2.3 (Gingerbread). https://developer.mozilla.org/en/DOM/window.matchMedia#section_4
				if ($(window).width() < options.maxScreenWidth){

					// Hides the original menu list from the display
					$(selectMenu).css("display", "inline-block");

					// Hides the original menu list from the display
					$(menu).css("display", "none");				
				} else {

					// Hides the select menu from the display
					$(selectMenu).css("display", "none");

					// Show the original menu list
					$(menu).css("display", "block");
				}
			}

			function createMenu(){

				// Loop through the current list menu & adds the li's text
				// & the anchors url to the option & it's value respectively.
				$(menu).children().each(function() {
				
					// If using a descriptive list, 'dl',
					// this only adds 'dd' to selectMenu & skips over 'dt'
					if($(this).get(0).tagName !== 'DT'){
						
						if($(this).find('ul,ol,dl').length){
							
							$(optGroup).attr("label",$(this).children(':first').text());
							var option = $('<option>').text($(this).children(':first').text());
							var link = $(this).children("a").attr("href");
							$(option).attr("value", link);
							$(option).appendTo(optGroup);
							
							var nestedList = $(this).children().not(':first');
							
							$(nestedList).children().each(function(){
								var option = $('<option>').text($(this).text());
								var link = $(this).children("a").attr("href");
								$(option).attr("value", link);
								$(option).appendTo(optGroup);
							});
							console.log(optGroup);
							$(optGroup).appendTo(selectMenu);
						} else {
							var option = $('<option>').text($(this).text());
							var link = $(this).children("a").attr("href");
							$(option).attr("value", link);
							$(option).appendTo(selectMenu);
						}
					} 
				});

				var menuTitle = '<option selected="selected" value>' + options.menuTitle + '</option>';

				// Appends the newly created list to menu's container element
				$(selectMenu).prepend(menuTitle);
				selectMenu.appendTo($(menu).parent());

				// Change Window.location, ie. the current url,
				// to the value of the selected option
				selectMenu.change(function(){
					if($(this).val()!=''){
						window.location.href=$(this).val();
					}
				});
			}

			function transformMenu() {
				$(window).resize(function(){checkWidth();});	
			}

		});
	};
})(jQuery);