 
<!-- BEGIN PAGE SETUP PLUGIN ========================== -->
<!-- ================================================== -->

	(function($){
	$.fn. extend({

<!-- DEFINE DEFAULT OPTIONS =========================== -->
<!-- ================================================== -->

	pageSetup: function(options) {
	
		var defaults = {
			header			: 'false',		// options: true, false
			headerHeight	: 0,			// pixel value
			
			footer			: 'false',		// options: true, false
			footerHeight	: 0,			// pixel value
			
			menu			: '',			// options: true, false
			menuPosition	: '',			// options: top, right, bottom, left
			menuStyle		: '',			// options: push, overlay
			menuOnLoad		: '',			// options: show, hide
			menuHeight		: 0,			// will only be applied to a menu positioned to the top or bottom
			menuWidth		: 0,			// will only be applied to a menu positioned to the left or right
			
			retractSpeed	: '1500',		// millisecond value for hiding menu
			expandSpeed		: '1500',		// millisecond value for showing menu
		};
		
<!-- EXTEND DEFINED OPTIONS TO DEFAULTS =============== -->
<!-- ================================================== -->
			
		var options = $.extend(defaults, options);
		
		return this.each(function() {
			var o		= options;
			var obj		= $(this);
			var toggle	= $(this).attr('rel');
			var pageMenu	=	$('section-menu');
			
	<!-- REPLACE HEADER VALUES ============================ -->
	<!-- ================================================== -->
			
		if(o.header == 'true') {
			$('#section-header', obj).css('display', 'block');
			$('#section-header', obj).css('height', o.headerHeight + 'px');
			};
			
		if(o.header == 'false') {
			$('#section-header', obj).css('display', 'none');
			$('#section-header', obj).css('height', 0);
			$(o.headerHeight = 0);
			};
				
	<!-- REPLACE FOOTER VALUES ============================ -->
	<!-- ================================================== -->
			
		if(o.footer == 'true') {
			$('#section-footer', obj).css('display', 'block');
			$('#section-footer', obj).css('height', o.footerHeight + 'px');
			};
			
		if(o.footer == 'false') {
			$('#section-footer', obj).css('display', 'none');
			$('#section-footer', obj).css('height', 0);
			$(o.footerHeight = 0);
			};
				
	<!-- REPLACE MENU VALUES ============================== -->
	<!-- ================================================== -->
	
		// ===========================================================================
		// POSITION:TOP || STYLE:PUSH || ONLOAD:SHOW || HEADER:TRUE ==================
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'top' && o.menuStyle == 'push' 
			&& o.menuOnLoad == 'show' && o.header == 'true') {
		
			// set menu placement
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				top		: o.headerHeight + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set the initial padding for the display area so it appears below the menu	
			$('#section-display-area', obj).css('padding-top', o.menuHeight + 'px');
			
			// set animation for toggle
			$('.toggle').toggle(
				// hide menu
				function(){
					$('#section-menu').animate({
						top: '-=' + o.menuHeight
						}, o.retractSpeed);
					$('#section-display-area').animate({
						paddingTop: '-=' + o.menuHeight
						}, o.retractSpeed);
				},
				// show menu
				function(){
					$('#section-menu').animate({
						top: '+=' + o.menuHeight
						}, o.expandSpeed);
					$('#section-display-area').animate({
						paddingTop: '+=' + o.menuHeight
						}, o.expandSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:TOP || STYLE:PUSH || ONLOAD:HIDE || HEADER:TRUE ==================
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'top' && o.menuStyle == 'push' 
			&& o.menuOnLoad == 'hide' && o.header == 'true') {
		
			// set menu placement
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				top		: '-' + (o.menuHeight - o.headerHeight) + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set animation for toggle
			$('.toggle').toggle(
				// show menu
				function(){
					$('#section-menu').animate({
						top: '+=' + o.menuHeight
						}, o.expandSpeed);
					$('#section-display-area').animate({
						paddingTop: '+=' + o.menuHeight
						}, o.expandSpeed);
				},
				// hide menu
				function(){		
					$('#section-menu').animate({
						top: '-=' + o.menuHeight
						}, o.retractSpeed);
					$('#section-display-area').animate({
						paddingTop: '-=' + o.menuHeight
						}, o.retractSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:TOP || STYLE:OVERLAY || ONLOAD:SHOW || HEADER:TRUE ===============
		// ===========================================================================
			
		if(o.menu == 'true' && o.menuPosition == 'top' && o.menuStyle == 'overlay' 
			&& o.menuOnLoad == 'show' && o.header == 'true') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				top		: o.headerHeight + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set animation for toggle
			$('.toggle').toggle(
				// hide menu
				function(){
					$('#section-menu').animate({
						top: '-=' + o.menuHeight
						}, o.retractSpeed);
				},
				// show menu
				function(){
					$('#section-menu').animate({
						top: '+=' + o.menuHeight
						}, o.expandSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:TOP || STYLE:OVERLAY || ONLOAD:HIDE || HEADER:TRUE ===============
		// ===========================================================================
			
		if(o.menu == 'true' && o.menuPosition == 'top' && o.menuStyle == 'overlay' 
			&& o.menuOnLoad == 'hide' && o.header == 'true') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				top		: '-' + (o.menuHeight - o.headerHeight) + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set animation for toggle
			$('.toggle').toggle(
				// show menu
				function(){
					$('#section-menu').animate({
						top: '+=' + o.menuHeight
						}, o.expandSpeed);
				},
				// hide menu
				function(){
					$('#section-menu').animate({
						top: '-=' + o.menuHeight
						}, o.retractSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:TOP || STYLE:PUSH || ONLOAD:SHOW || HEADER:FALSE =================
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'top' && o.menuStyle == 'push' 
			&& o.menuOnLoad == 'show' && o.header == 'false') {
		
			// set menu placement
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				top		: 0 + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set the initial padding for the display area so it appears below the menu	
			$('#section-display-area', obj).css('padding-top', o.menuHeight + 'px');
			
			// set animation for toggle
			$('.toggle').toggle(
				// hide menu
				function(){
					$('#section-menu').animate({
						top: '-=' + o.menuHeight
						}, o.retractSpeed);
					$('#section-display-area').animate({
						paddingTop: '-=' + o.menuHeight
						}, o.retractSpeed);
				},
				// show menu
				function(){
					$('#section-menu').animate({
						top: '+=' + o.menuHeight
						}, o.expandSpeed);
					$('#section-display-area').animate({
						paddingTop: '+=' + o.menuHeight
						}, o.expandSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:TOP || STYLE:PUSH || ONLOAD:HIDE || HEADER:FALSE =================
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'top' && o.menuStyle == 'push' 
			&& o.menuOnLoad == 'hide' && o.header == 'false') {
		
			// set menu placement
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				top		: '-' + (o.menuHeight) + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set animation for toggle
			$('.toggle').toggle(
				// show menu
				function(){
					$('#section-menu').animate({
						top: '+=' + o.menuHeight
						}, o.expandSpeed);
					$('#section-display-area').animate({
						paddingTop: '+=' + o.menuHeight
						}, o.expandSpeed);
				},
				// hide menu
				function(){		
					$('#section-menu').animate({
						top: '-=' + o.menuHeight
						}, o.retractSpeed);
					$('#section-display-area').animate({
						paddingTop: '-=' + o.menuHeight
						}, o.retractSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:TOP || STYLE:OVERLAY || ONLOAD:SHOW || HEADER:FALSE ==============
		// ===========================================================================
			
		if(o.menu == 'true' && o.menuPosition == 'top' && o.menuStyle == 'overlay' 
			&& o.menuOnLoad == 'show' && o.header == 'false') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				top		: 0 + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set animation for toggle
			$('.toggle').toggle(
				// hide menu
				function(){
					$('#section-menu').animate({
						top: '-=' + o.menuHeight
						}, o.retractSpeed);
				},
				// show menu
				function(){
					$('#section-menu').animate({
						top: '+=' + o.menuHeight
						}, o.expandSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:TOP || STYLE:OVERLAY || ONLOAD:HIDE || HEADER:FALSE ==============
		// ===========================================================================
			
		if(o.menu == 'true' && o.menuPosition == 'top' && o.menuStyle == 'overlay' 
			&& o.menuOnLoad == 'hide' && o.header == 'false') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				top		: '-' + (o.menuHeight) + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set animation for toggle
			$('.toggle').toggle(
				// show menu
				function(){
					$('#section-menu').animate({
						top: '+=' + o.menuHeight
						}, o.expandSpeed);
				},
				// hide menu
				function(){
					$('#section-menu').animate({
						top: '-=' + o.menuHeight
						}, o.retractSpeed);
				}
			); // end toggle
		}; // end if

		
		// ===========================================================================
		// POSITION:BOTTOM || STYLE:PUSH || ONLOAD:SHOW || FOOTER:TRUE ===============
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'bottom' && o.menuStyle == 'push' 
			&& o.menuOnLoad == 'show' && o.footer == 'true') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'left',
				bottom	: o.footerHeight + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set the initial padding for the display area so it appears below the menu	
			$('#section-display-area', obj).css('padding-bottom', o.menuHeight + 'px');
			
			// set toggle animation
			$('.toggle').toggle(
				// hide menu
				function(){
					$('#section-menu').animate({
						bottom: '-=' + o.menuHeight
						}, o.retractSpeed);
					$('#section-display-area').animate({
						paddingBottom: '-=' + o.menuHeight
						}, o.retractSpeed);
				},
				// show menu
				function(){
					$('#section-menu').animate({
						bottom: '+=' + o.menuHeight
						}, o.expandSpeed);
					$('#section-display-area').animate({
						paddingBottom: '+=' + o.menuHeight
						}, o.expandSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:BOTTOM || STYLE:PUSH || ONLOAD:HIDE || FOOTER:TRUE ===============
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'bottom' && o.menuStyle == 'push' 
			&& o.menuOnLoad == 'hide' && o.footer == 'true') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'left',
				bottom	: '-' + (o.menuHeight - o.footerHeight) + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set toggle animation
			$('.toggle').toggle(
				// show menu
				function(){
					$('#section-menu').animate({
						bottom: '+=' + o.menuHeight
						}, o.expandSpeed);
					$('#section-display-area').animate({
						paddingBottom: '+=' + o.menuHeight
						}, o.expandSpeed);
				},
				// hide menu
				function(){
					$('#section-menu').animate({
						bottom: '-=' + o.menuHeight
						}, o.retractSpeed);
					$('#section-display-area').animate({
						paddingBottom: '-=' + o.menuHeight
						}, o.retractSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:BOTTOM || STYLE:OVERLAY || ONLOAD:SHOW || FOOTER:TRUE ============
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'bottom' && o.menuStyle == 'overlay' 
			&& o.menuOnLoad == 'show' && o.footer == 'true') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'left',
				bottom	: o.footerHeight + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set toggle animation
			$('.toggle').toggle(
				// hide menu
				function(){
					$('#section-menu').animate({
						bottom: '-=' + o.menuHeight
						}, o.retractSpeed);
				},
				// show menu
				function(){
					$('#section-menu').animate({
						bottom: '+=' + o.menuHeight
						}, o.expandSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:BOTTOM || STYLE:OVERLAY || ONLOAD:HIDE || FOOTER:TRUE ============
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'bottom' && o.menuStyle == 'overlay' 
			&& o.menuOnLoad == 'hide' && o.footer == 'true') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'left',
				bottom	: '-' + (o.menuHeight - o.footerHeight) + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set toggle animation
			$('.toggle').toggle(
				// show menu
				function(){
					$('#section-menu').animate({
						bottom: '+=' + o.menuHeight
						}, o.expandSpeed);
				},
				// hide menu
				function(){
					$('#section-menu').animate({
						bottom: '-=' + o.menuHeight
						}, o.retractSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:BOTTOM || STYLE:PUSH || ONLOAD:SHOW || FOOTER:FALSE ==============
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'bottom' && o.menuStyle == 'push' 
			&& o.menuOnLoad == 'show' && o.footer == 'false') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'left',
				bottom	: 0 + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set the initial padding for the display area so it appears below the menu	
			$('#section-display-area', obj).css('padding-bottom', o.menuHeight + 'px');
			
			// set toggle animation
			$('.toggle').toggle(
				// hide menu
				function(){
					$('#section-menu').animate({
						bottom: '-=' + o.menuHeight
						}, o.retractSpeed);
					$('#section-display-area').animate({
						paddingBottom: '-=' + o.menuHeight
						}, o.retractSpeed);
				},
				// show menu
				function(){
					$('#section-menu').animate({
						bottom: '+=' + o.menuHeight
						}, o.expandSpeed);
					$('#section-display-area').animate({
						paddingBottom: '+=' + o.menuHeight
						}, o.expandSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:BOTTOM || STYLE:PUSH || ONLOAD:HIDE || FOOTER:FALSE ==============
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'bottom' && o.menuStyle == 'push' 
			&& o.menuOnLoad == 'hide' && o.footer == 'false') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'left',
				bottom	: '-' + o.menuHeight + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set toggle animation
			$('.toggle').toggle(
				// show menu
				function(){
					$('#section-menu').animate({
						bottom: '+=' + o.menuHeight
						}, o.expandSpeed);
					$('#section-display-area').animate({
						paddingBottom: '+=' + o.menuHeight
						}, o.expandSpeed);
				},
				// hide menu
				function(){
					$('#section-menu').animate({
						bottom: '-=' + o.menuHeight
						}, o.retractSpeed);
					$('#section-display-area').animate({
						paddingBottom: '-=' + o.menuHeight
						}, o.retractSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:BOTTOM || STYLE:OVERLAY || ONLOAD:SHOW || FOOTER:FALSE ===========
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'bottom' && o.menuStyle == 'overlay' 
			&& o.menuOnLoad == 'show' && o.footer == 'false') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'left',
				bottom	: 0 + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set toggle animation
			$('.toggle').toggle(
				// hide menu
				function(){
					$('#section-menu').animate({
						bottom: '-=' + o.menuHeight
						}, o.retractSpeed);
				},
				// show menu
				function(){
					$('#section-menu').animate({
						bottom: '+=' + o.menuHeight
						}, o.expandSpeed);
				}
			); // end toggle
		}; // end if
		
		// ===========================================================================
		// POSITION:BOTTOM || STYLE:OVERLAY || ONLOAD:HIDE || FOOTER:FALSE ===========
		// ===========================================================================
		
		if(o.menu == 'true' && o.menuPosition == 'bottom' && o.menuStyle == 'overlay' 
			&& o.menuOnLoad == 'hide' && o.footer == 'false') {
			
			// set menu position
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'left',
				bottom	: '-' + o.menuHeight + 'px',
				left	: 0 + 'px',
				width	: 100 + '%',
				height	: o.menuHeight + 'px',
			});
			
			// set toggle animation
			$('.toggle').toggle(
				// show menu
				function(){
					$('#section-menu').animate({
						bottom: '+=' + o.menuHeight
						}, o.expandSpeed);
				},
				// hide menu
				function(){
					$('#section-menu').animate({
						bottom: '-=' + o.menuHeight
						}, o.retractSpeed);
				}
			); // end toggle
		}; // end if

		// ===========================================================================
		// POSITION:LEFT || STYLE:PUSH || ONLOAD:SHOW ================================
		// ===========================================================================
		
		// set menu position
		if(o.menu == 'true' && o.menuPosition == 'left' && o.menuStyle == 'push' && o.menuOnLoad == 'show') {
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				left	: 0 + 'px',
				width	: o.menuWidth + 'px',
				top		: o.headerHeight + 'px',
				bottom	: o.footerHeight + 'px',
			});	
			
			// set the initial padding for the display area so it appears right of the menu
			$('#section-display-area', obj).css('padding-left', o.menuWidth + 'px');
			
			$('#section-menu', obj).addClass('open-left');
			$('#section-menu', obj).addClass('push');
			
		}; // end if
		
		// ===========================================================================
		// POSITION:LEFT || STYLE:PUSH || ONLOAD:HIDE ================================
		// ===========================================================================
		
		// set menu position
		if(o.menu == 'true' && o.menuPosition == 'left' && o.menuStyle == 'push' && o.menuOnLoad == 'hide') {
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				left	: '-' + (o.menuWidth + 5) + 'px',
				width	: o.menuWidth + 'px',
				top		: o.headerHeight + 'px',
				bottom	: o.footerHeight + 'px',
			});	
			
			$('#section-menu', obj).addClass('hide-left');
			$('#section-menu', obj).addClass('push');
			
		}; // end if
		
		// ===========================================================================
		// POSITION:LEFT || STYLE:OVERLAY || ONLOAD:SHOW =============================
		// ===========================================================================
		
		// set menu position
		if(o.menu == 'true' && o.menuPosition == 'left' && o.menuStyle == 'overlay' && o.menuOnLoad == 'show') {
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				left	: 0 + 'px',
				width	: o.menuWidth + 'px',
				top		: o.headerHeight + 'px',
				bottom	: o.footerHeight + 'px',
			});	
			
			$('#section-menu', obj).addClass('show-left');
			$('#section-menu', obj).addClass('overlay');
			
		}; // end if
		
		// ===========================================================================
		// POSITION:LEFT || STYLE:OVERLAY || ONLOAD:HIDE =============================
		// ===========================================================================
		
		// set menu position
		if(o.menu == 'true' && o.menuPosition == 'left' && o.menuStyle == 'overlay' && o.menuOnLoad == 'hide') {
			$('#section-menu', obj).css({
				display : 'block',
				float	: 'left',
				left	: '-' + (o.menuWidth + 7) + 'px',
				width	: o.menuWidth + 'px',
				top		: o.headerHeight + 'px',
				bottom	: o.footerHeight + 'px',
			});	
			
			$('#section-menu', obj).addClass('hide-left');
			$('#section-menu', obj).addClass('overlay');
			
		}; // end if
			
		// ===========================================================================
		// POSITION:RIGHT || STYLE:PUSH || ONLOAD:SHOW ===============================
		// ===========================================================================
		
		// set menu position
		if(o.menu == 'true' && o.menuStyle == 'push' && o.menuPosition == 'right' && o.menuOnLoad == 'show') {
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'right',
				right	: 0 + 'px',
				width	: o.menuWidth + 'px',
				top		: o.headerHeight + 'px',
				bottom	: o.footerHeight + 'px'
			});	
			
			// set the initial padding for the display area so it appears left of the menu
			$('#section-display-area', obj).css('padding-right', o.menuWidth + 'px');
			
			$('#section-menu', obj).addClass('show-right');
			
		}; //end if
		
		// ===========================================================================
		// POSITION:RIGHT || STYLE:PUSH || ONLOAD:HIDE ===============================
		// ===========================================================================
		
		// set menu position
		if(o.menu == 'true' && o.menuStyle == 'push' && o.menuPosition == 'right' && o.menuOnLoad == 'hide') {
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'right',
				right	: '-' + o.menuWidth + 'px',
				width	: o.menuWidth + 'px',
				top		: o.headerHeight + 'px',
				bottom	: o.footerHeight + 'px'
			});
			
			$('#section-menu', obj).addClass('hide-right');
			
		}; //end if
		
		// ===========================================================================
		// POSITION:RIGHT || STYLE:OVERLAY || ONLOAD:SHOW ============================
		// ===========================================================================
		
		// set menu position
		if(o.menu == 'true' && o.menuStyle == 'overlay' && o.menuPosition == 'right' && o.menuOnLoad == 'show') {
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'right',
				right	: 0 + 'px',
				width	: o.menuWidth + 'px',
				top		: o.headerHeight + 'px',
				bottom	: o.footerHeight + 'px'
			});	
			
			$('#section-menu', obj).addClass('show-right');
			
		}; //end if
		
		// ===========================================================================
		// POSITION:RIGHT || STYLE:OVERLAY || ONLOAD:HIDE ============================
		// ===========================================================================
		
		// set menu position
		if(o.menu == 'true' && o.menuStyle == 'overlay' && o.menuPosition == 'right' && o.menuOnLoad == 'hide') {
			$('#section-menu', obj).css({
				display : 'block',
				position: 'fixed',
				float	: 'right',
				right	: '-' + o.menuWidth + 'px',
				width	: o.menuWidth + 'px',
				top		: o.headerHeight + 'px',
				bottom	: o.footerHeight + 'px'
			});
			
			$('#section-menu', obj).addClass('hide-right');
			
		}; //end if
			
		// MENU : FALSE ==================================================
			
		if(o.menu == 'false') {
			$('#section-menu', obj).css('display', 'none');
			$('#section-menu', obj).css('height', 0);
			$('#section-menu', obj).css('width', 0);
			$(o.menuHeight = 0);
			$(o.menuWidth = 0);
		};
		
		// MENU : TOGGLE ==================================================
		
		// set toggle animation
		
		if($('#section-menu').hasClass('open-left push')){
		
			$('.toggle').toggle(
				// hide menu
				function(){
					$('#section-menu').animate({
						left: '-=' + (o.menuWidth + 7)
						}, o.retractSpeed);
					$('#section-display-area').animate({
						paddingLeft: '-=' + o.menuWidth
						}, o.retractSpeed);
				},
				// show menu
				function(){
					$('#section-menu').animate({
						left: '+=' + (o.menuWidth + 7)
						}, o.expandSpeed);
					$('#section-display-area').animate({
						paddingLeft: '+=' + o.menuWidth
						}, o.expandSpeed);
				}
			);
		};
		
		if($('#section-menu').hasClass('hide-left overlay')){
		
			$('.toggle').toggle(
				// show menu
				function(){
					$('#section-menu').animate({
						left: '+=' + (o.menuWidth + 7)
						}, o.retractSpeed);
				},
				// hide menu
				function(){
					$('#section-menu').animate({
						left: '-=' + (o.menuWidth + 7)
						}, o.expandSpeed);
				}
			);
		};
		
		if($('#section-menu').hasClass('open-left overlay')){
		
			$('.toggle').toggle(
				// hide menu
				function(){
					$('#section-menu').animate({
						left: '-=' + (o.menuWidth + 7)
						}, o.retractSpeed);
				},
				// show menu
				function(){
					$('#section-menu').animate({
						left: '+=' + (o.menuWidth + 7)
						}, o.expandSpeed);
				}
			);
		};

	
	<!-- REPLACE DISPLAY AREA VALUES ====================== -->
	<!-- ================================================== -->
	
		$('#section-display-area', obj).css('top', o.headerHeight + 'px');
		$('#section-display-area', obj).css('bottom', o.footerHeight + 'px');
			
<!-- CLOSING ========================================== -->
<!-- ================================================== -->
				
		}); // End return
			
	} // End pageSetup
	
	}); // End .fn. extend
	
}) (jQuery); // End function



