
<!-- /////////////////////////////////////////////////////////////////////
     // BEGIN DOC.READY //////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////// -->

	$(document).ready(function(){

<!-- /////////////////////////////////////////////////////////////////////
     // ACCORDION MENU ///////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////// -->

	// Store variables
			
	var menu_head = $('.menu > li > a'),
		menu_body = $('.menu li > .sub-menu');

	// Open the first tab on load

	menu_head.eq(0).addClass('active').next().slideDown('normal');

	// Click function

	menu_head.on('click', function(event) {
		// Disable header links		
		event.preventDefault();
		// Show and hide the tabs on click
			if ($(this).attr('class') != 'active'){
				menu_body.slideUp('normal');
				$(this).next().stop(true,true).slideToggle('normal');
				menu_head.removeClass('active');
				$(this).addClass('active');
			}
	});
	
<!-- /////////////////////////////////////////////////////////////////////
     // GAME ACCORDION MENU //////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////// -->

	// Store variables
	
	var g_menu_head = $('.game_menu > li > a'),
			g_menu_body = $('.game_menu li > .game_sub_menu');
	
		// Open the first tab on load
	
		// g_menu_head.eq(0).addClass('active').next().slideDown('normal');
	
		// Click function
	
		g_menu_head.on('click', function(event) {
			// Disable header links		
			event.preventDefault();
			// Show and hide the tabs on click
				if ($(this).attr('class') != 'active'){
					g_menu_body.slideUp('normal');
					$(this).next().stop(true,true).slideToggle('normal');
					g_menu_head.removeClass('active');
					$(this).addClass('active');
				}
		});
	
	

<!-- /////////////////////////////////////////////////////////////////////
     // END DOC.READY ////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////// -->
	
	});