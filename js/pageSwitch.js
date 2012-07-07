
<!-- /////////////////////////////////////////////////////////////////////
     // PAGE SWITCHING : GLOBAL FUNCTIONS ////////////////////////////////
     ///////////////////////////////////////////////////////////////////// -->
	 
	// These functions will allow you to switch pages based on data-roles.
	
	// Global function to use for the standard page switching
	function changePage(pane, page){
		//console.log('going to Pane: '+pane+' Page: '+page);
		if(!$('[data-role="pane"][data-pane="'+pane+'"]').is(":visible")){
		//	console.log('change both');
			$('[data-role="pane"]').hide();
			$('[data-role="page"]').hide();
			$('[data-page="'+page+'"]').show();
			$('[data-pane="'+pane+'"]').fadeIn();
			//$('[data-page="'+page+'"]').fadeIn();
			return true;
		}
		if(!$('[data-pane="'+pane+'"] [data-page="'+page+'"]').is(':visible')){
			console.log('change just page');
			$('[data-role="page"]').hide();
			$('[data-page="'+page+'"]').fadeIn();
			
		}
	}
	
	function getPaneTitle(pane){
		var temp = $('[data-role="pane"][data-pane="'+pane+'"]').attr('data-title');
		if(temp == 'HOME'){
			$('#paneTitle').hide();
		} else {
			$('#paneTitle').show();
			$('#paneTitle p').html(temp);
		}
	}
	
	// Global function to use for the modal page switching
	function changeModal(id){
		if(!$(id).is(':visible')){
			$('[data-role="modal_page"]').hide();
			$(id).fadeIn();
		}		
	}
	
	// Global function to use for image switching
	function changeImage(id){
		if(!$(id).is(':visible')){
			$('[data-role="image_page"]').hide();
			$(id).fadeIn();
		}		
	}
	
	function changePane(pane){
		//console.log(pane);
	//	console.log($('[data-pane="'+pane+'"]').is(':visible'));
		if(!$('[data-pane="'+pane+'"]').is(':visible')){
			$('[data-role="pane"]').hide();
			$('[data-pane="'+pane+'"]').fadeIn();
			$('[data-role="page"]').hide();
			$('[data-page="1"]').fadeIn();
		}
	}
	
	function checkNav(pane, currentPage){
		var count = $('[data-pane="'+pane+'"] [data-role="pages"]').children().length;
		var nextPage = currentPage + 1;
		var previousPage = currentPage - 1;
		//console.log('Nav Check: Count['+count+'] Previous['+previousPage+'] Next['+nextPage+']');
		if(nextPage > count){
			$('[data-pane="'+pane+'"] [data-role="next"]').hide();
		} else {
			$('[data-pane="'+pane+'"] [data-role="next"]').show();
		}
		if(previousPage < 1){
			$('[data-pane="'+pane+'"] [data-role="previous"]').hide();
		} else {
			$('[data-pane="'+pane+'"] [data-role="previous"]').show();
		}
	}
	
<!-- /////////////////////////////////////////////////////////////////////
     // BEGIN DOC.READY //////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////// -->
	 	
	$(document).ready(function(){
		checkNav('1',1);
		getPaneTitle(1);
	// Move to next page within a defined set

	
	// Move to previous page within a defined set
	$('body').on('click', '[data-role="previous"], .swipe_area', function(){
		var $temp;
		var currentPane = $(this).parent().attr('data-pane');
		var $pane = '[data-pane="'+$(this).parent().attr('data-pane')+'"]';
		var pages = $($pane+' [data-role="pages"]').children();
		var count = pages.length;

		$.each(pages, function(){
			if($(this).is(":visible")){
			$temp = $(this);
			}
		});
		
		var currentPage = parseInt($temp.attr('data-page'));
		var previousPage = currentPage-1;

		if(previousPage < 1){
			previousPage = count;
			return true;
		}
		changePage(currentPane, previousPage.toString())
		checkNav(currentPane, previousPage);
	});
	
	$('body').on('click', '[data-role="nav"]', function(){
		//$('.toggle').trigger('click');
		if($(this).attr('data-pane') && $(this).attr('data-page')){
			var pane = $(this).attr('data-pane');
			var page = $(this).attr('data-page');
			changePage(pane, page);
			checkNav(pane, page);
			getPaneTitle(pane);
		}
		if($(this).attr('data-pane') && !$(this).attr('data-page')){
			//console.log('PANE');
			var pane = $(this).attr('data-pane');
		//	console.log(pane);
			changePage(pane, '1');
			checkNav(pane, 1);
			getPaneTitle(pane);
		}
		if(!$(this).attr('data-pane') && $(this).attr('data-page')){
			var pane;
			$.each('[data-role="pane"]', function(){
				if($(this).is(':visible')){
					pane = $(this).attr('data-pane');
				}
			});
			var page = $(this).attr('data-page');
			changePage(pane, page);
			checkNav(pane, page);
			getPaneTitle(pane);
		}
	});
	
	


<!-- /////////////////////////////////////////////////////////////////////
     // END DOC.READY ////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////// -->
	
	});

