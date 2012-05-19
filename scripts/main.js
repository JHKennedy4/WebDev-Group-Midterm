function filter( str ){
	var buttons = $('.button');
	for( var i = 0; i < buttons.length; i++ ){
		buttons[i].className = 'button';
	}
	
	if( str == '' ){
		str = 'all';
	}
	var button = $(str);
	button.className = 'button current';
	if( str != 'all' ){
		hideAll();
		showClass( str );
	}
	else{
		showAll();
	}
}

function hideAll(){
	hideClass('topic');
	hideClass( 'exercise' );
	hideClass( 'deadline' );
	hideClass( 'resource' );
}

function hideClass( className ){
	var toHide = $('.'+className);
	for( var i = 0; i < toHide.length; i++ ){
		$(toHide[i]).css('display', 'none');
	}
}

function showAll(){
	showClass('topic');
	showClass( 'exercise' );
	showClass( 'deadline' );
	showClass( 'resource' );
}

function showClass( className ){
	var toShow = $('.'+className);
	for( var i = 0; i < toShow.length; i++ ){
		$(toShow[i]).css('display', 'block');
	}
	fixLI();
}

function fixLI(){
	var li = $('li')
	for( var i = 0; i < li.length; i++){
		if( $(li[i]).css('display') == 'block' ){
			$(li[i]).css('display', 'list-item');
		}
	}
}

function toggleDisplay(  ){
	var item = $(this).next();
	if( item.css('display') == 'block' || item.css('display') == '' ){
		item.css('display', 'none');
	}
	else if( item.css('display') == 'none' ){
		item.css('display', 'block');
	}
}

function closeAll(){
	var items = $( '.toggleable' );
	for( var i = 0; i < items.length; i++ ){
		var item = $(items[i]).next();
		if( item.css('display') == 'block' || item.css('display') == '' ){
			item.css('display', 'none');
		}
	}
}

function openAll(){
	var items = $( '.toggleable' );
	for( var i = 0; i < items.length; i++ ){
		var item = $(items[i]).next();
		if( item.css('display') == 'none'){
			item.css('display', 'block');
		}
	}
}

$(document).ready(function(){
	var items = $( '.toggleable' ).on( 'click', toggleDisplay );
});
