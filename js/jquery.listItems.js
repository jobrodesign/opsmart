/*// Add missing javascript methods
Array.prototype.unique = function( b ) {
 var a = [], i, l = this.length;
 for( i=0; i<l; i++ ) {
  if( a.indexOf( this[i], 0, b ) < 0 ) { a.push( this[i] ); }
 }
 return a;
};

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};*/

// Define collection manipulation functions

function queryByCategory(collection, term){	
	return (collection.filter(function(element, index, array){
			return (element.category === term)
	}))
}

function queryByTags (collection, terms, method){
	switch (method){
		case 'inclusive':
			return(collection.filter(function(element, index, array){
				if(element.tags){
					if(element.tags.length > 0){
						//console.log(element.name);
						if(terms.some(function(e,i,a){
							if($.inArray(e, element.tags) > -1){
								//console.log(e+" found");
								return true
							}else{
								//console.log(e+" NOT found");
								return false
							}
						})){
							//console.log('Element has passed test as true');
							return element
						}
					}
				}
			}))
			break;
		case 'exclusive':
			return(collection.filter(function(element, index, array){
				//console.log(element);
				if(element.tags.length > 0){
					//console.log(element.name);
					if(terms.every(function(e,i,a){
						if($.inArray(e, element.tags) > -1){
							//console.log(e+" found");
							return true
						}else{
							//console.log(e+" NOT found");
							return false
						}
					})){
						//console.log('Element has passed test as true');
						return element
					}
				}
			}))
			break;
	}
}

function sortName(collection){
	return (collection.sort(function(a,b){
			var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
			if(nameA < nameB) //sort string ascending
				return -1
			if (nameA > nameB)
				return 1
			return 0 //default return value (no sorting)
	}))
}

function sortAlpha(collection){
	return (collection.sort())
}


function itemsByAttribute(collection, attribute, value){
	var Items = (collection.filter(function(element, index, array){
		if(element[attribute] === value){
			return element
		}
	}))
	return Items;
}

function optionalItems(collection){
	return (collection.filter(function(element, index, array){
			return (element.optional === true)
	}))
}

function getSkillList(skillprofileId){
	var skillProfile = itemById(assignments.skillprofiles, skillprofileId);
	//console.log(skillProfile[0].items);
	return skillProfile.items;
}

function selectionLaunch(id){
	var temp = itemsByAttribute(library.items, 'id', id);
	var selection = temp[0];
	var r = confirm('Would you like to view the selection now?');
	if(r == true){
		window.location = 'cellcast://action/assign/'+selection.selectionType+'/'+selection.id+'/true';
	} else {
		window.location = 'cellcast://action/assign/'+selection.selectionType+'/'+selection.id+'/false';
	}
	//smartRefresh();
}

(function ($){

$.fn.listItems = function(options){
	
	var defaults;
	var settings = $.extend(defaults, options);
	
	return this.each(function(){
		var $this = $(this);
		
		var render = function(collection, template){
			//console.log(collection);
			var that = this;
			$.each(collection, function(){
				var listItem = $(template).clone();
				
				listItem.find('[data-scurl="assignment"]').attr('href', "cellcast://"+this.assignType+"/"+this.id+"/true");
				listItem.find('[data-scurl="announcement"]').attr('href', "cellcast://announcement/"+this.id);
				listItem.find('[data-scurl="notification"]').attr('href', "cellcast://notification/"+this.id);
				listItem.find('[data-scurl="library"]').attr('href', "cellcast://action/assign/"+this.selectionType+"/"+this.id+"/true");
				listItem.find('[data-scurl="gameprofile"]').attr('href', 'cellcast://menu/gameprofiles/'+this.id);
				
				//listItem.find('[data-tmpl="launchBtn"]').attr('onclick', 'selectionLaunch('+this.id+')');
				
				if(listItem.find('[data-tmpl="action"]')){
					if(this.status){
						//assume this is an assignment
						listItem.find('[data-tmpl="action"]').attr('href', 'cellcast://'+this.assignType+'/'+this.id+'/true');
						listItem.find('[data-tmpl="actionTitle"]').html('view');
					} else {
						//assume this is a catalog item
						listItem.find('[data-tmpl="action"]').attr('onclick', 'selectionLaunch('+this.id+')');
						listItem.find('[data-tmpl="actionTitle"]').html('assign');
					}
				}

				if(listItem.find('[data-tmpl="thumb"]')){
					if(platform == 'android'){
						listItem.find('[data-tmpl="thumb"]').attr('src', imgpath+'thumbnail'+this.id);
					}
				}
				
				
				
				listItem.find('[data-tmpl="game_title"]').html(this.game_name);
				listItem.find('[data-tmpl="game_description"]').html(this.game_description);
				listItem.find('[data-tmpl="game_total_points"]').html(this.game_points);
				listItem.find('[data-tmpl="game_earned_points"]').html(this.user_points);
				listItem.find('[data-tmpl="game_progress"]').html((Math.floor(this.user_points/this.game_points)*100)+'%');
				
				listItem.find('[data-tmpl="title"]').html(this.name);
				listItem.find('[data-tmpl="description"]').html(this.description);
				listItem.find('[data-tmpl="status"]').html(this.status);
				listItem.find('[data-tmpl="duration"]').html(this.duration);
				if(this.metatags){
					listItem.find('[data-tmpl="metatags"]').html(this.metatags.join(" "));
				}
				
				if(this.image != null){
					listItem.find('[data-tmpl="thumb"]').attr('src', imgpath+'thumbnail'+this.id);
				} else {
					if(this.assignType == 'nugget'){
						if(this.type == 'video'){
							listItem.find('[data-tmpl="thumb"]').attr('src', 'img/thumbnails/video_icon.png');
						}
						if(this.type == 'audio'){
							listItem.find('[data-tmpl="thumb"]').attr('src', 'img/thumbnails/audio_icon.png');
						}
						if(this.type == 'powerpoint'){
							listItem.find('[data-tmpl="thumb"]').attr('src', 'img/thumbnails/ppt_icon.png');
						}
						if(this.type == 'cellcast'){
							listItem.find('[data-tmpl="thumb"]').attr('src', 'img/thumbnails/default.png');
						}
						if(this.type == 'html'){
							listItem.find('[data-tmpl="thumb"]').attr('src', 'img/thumbnails/html_icon.png');
						}
						if(this.type == 'pdf'){
							listItem.find('[data-tmpl="thumb"]').attr('src', 'img/thumbnails/PDF_icon.png');
						}
					}
					if(this.assignType == 'testset'){
						listItem.find('[data-tmpl="thumb"]').attr('src', 'img/thumbnails/quiz_icon.png');
					}
					if(this.assignType == 'course'){
						listItem.find('[data-tmpl="thumb"]').attr('src', 'img/thumbnails/html_icon.png');
					}
					listItem.find('[data-tmpl="thumb"]').attr('src', "img/content_images/default.png");
				}
				
				if(this.type){
					listItem.find('[data-tmpl="type"]').html(this.type);
					if(this.type == 'video'){
						listItem.find('[data-tmpl="type_icon"]').attr('src', 'img/thumbnails/video_icon.png');
					}
					if(this.type == 'audio'){
						listItem.find('[data-tmpl="type_icon"]').attr('src', 'img/thumbnails/audio_icon.png');
					}
					if(this.type == 'powerpoint'){
						listItem.find('[data-tmpl="type_icon"]').attr('src', 'img/thumbnails/ppt_icon.png');
					}
					if(this.type == 'cellcast'){
						listItem.find('[data-tmpl="type_icon"]').attr('src', 'img/thumbnails/default.png');
					}
					if(this.type == 'html'){
						listItem.find('[data-tmpl="type_icon"]').attr('src', 'img/thumbnails/html_icon.png');
					}
					if(this.type == 'pdf'){
						listItem.find('[data-tmpl="type_icon"]').attr('src', 'img/thumbnails/PDF_icon.png');
					}
				}


				
				
				
				//If this is a message
				listItem.find('[data-tmpl="msg_title"]').html(this.title);
				if(this.viewed){
					if(this.viewed == true){
						listItem.find('[data-tmpl="msg_status"]').attr('src', 'img/icons/message_read.png');
					} else {
						listItem.find('[data-tmpl="msg_status"]').attr('src', 'img/icons/message_unread.png');
					}
				}
				
				//if this is a completion status item
				if(this.status == 1){
					listItem.find('[data-tmpl="status-completion"]').attr('src', 'img/stdicons/complete_true.png');
				}
				if(this.status == 2){
					listItem.find('[data-tmpl="status-completion"]').attr('src', 'img/stdicons/complete_true.png');
				}
				if(this.status == 3){
					listItem.find('[data-tmpl="status-completion"]').attr('src', 'img/stdicons/complete_ip.png');
				}
				if(this.status == 4){
					listItem.find('[data-tmpl="status-completion"]').attr('src', 'img/stdicons/complete_ip.png');
				}
				if(this.status == 6){
					listItem.find('[data-tmpl="status-completion"]').attr('src', 'img/stdicons/complete_false.png');
				}
				
				//if this item has an associated test
				if(listItem.find('[data-tmpl="status-test"]')){
					if(this.tests){
						if(this.tests.length > 0){
							listItem.find('[data-tmpl="status-test"]').attr('src', 'img/stdicons/test.png');
							if(this.status == 1){
								listItem.find('[data-tmpl="status-test"]').attr('src', 'img/stdicons/test_true.png');
							}
							if(this.status == 3){
								listItem.find('[data-tmpl="status-test"]').attr('src', 'img/stdicons/test_false.png');
							}
						}else{
						listItem.find('[data-tmpl="status-test"]').parent().remove();
						}
					}else{
					listItem.find('[data-tmpl="status-test"]').parent().remove();
					}
				}
				
				listItem.children().appendTo($this); 
			});
		}
	
		var filter = function(settings, collection){
			//console.log(collection);
			if (settings.category || settings.tags){
				if(settings.category && settings.tags){
					console.log("both detected!");
					var catArray = queryByCategory(collection, settings.category);
					var tagArray = queryByTags(catArray, [settings.tags], settings.rule);
					var filtered = tagArray;
				}
				if(settings.category && !settings.tags){
					console.log("JUST category detected");
					var filtered = queryByCategory(collection, settings.category)	;
				}
				if(!settings.category && settings.tags){
					console.log("JUST tags detected");
					var filtered = queryByTags(collection, [settings.tags], settings.rule);
				}
				filtered = sortName(filtered);
				render(filtered, settings.template);
			} else {
				render(collection, settings.template);
			}
			 
		}
			
		var process = function(settings){
			if(settings.collection){
				switch (settings.collection){
					case 'library':
						var collection = library.items;
						break;
					case 'catalog':
						var collection = library.items.concat(assignments.assignments);
						break;
					case 'assignments':
						if(settings.subset){
							var collection = assignments[settings.subset];
						} else {
							var collection = assignments.assignments;
						}
						break;
					case 'games':
						var collection = games.games;
						break;
					case 'announcements':
						var collection = messages.announcements;
						break;
					case 'notifications':
						var collection = messages.notifications;
						break;
					case 'status':
						if(settings.subset){
							switch(settings.subset){
								case 'nuggets':
									var collection = mystatus.nuggets;
									break;
								case 'courses':
									var collection = mystatus.courses;
									break;
								case 'assessments':
									var collection = mystatus.assessments;
									break;
								case 'skillprofiles':
									var collection = mystatus.skillprofiles;
									break;
							}
						} else {
							var collection = mystatus.items;
						}
						break;
				}
			}
			if(settings.skillprofile){
				var spList = getSkillList(settings.skillprofile);
				var collection = [];
				$.each(spList, function(){
					var temp = itemById(assignments.assignments, this.id);
					collection.push(temp);
				});
			}
			if(settings.optional == true){
				var collection = optionalItems(assignments.assignments);
			}
			
			
			
			filter(settings, collection);
		}
		
		var init = function(){
			process(settings);
		};
		
		var clear = function(){
			console.log('Clear called');
			($this).html('');
		};
		
		init();
	});
	
};

})(jQuery);
