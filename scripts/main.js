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
		toHide[i].style.display = 'none';
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
		toShow[i].style.display = 'block';
	}
	fixLI();
}

function fixLI(){
	var li = $('li')
	for( var i = 0; i < li.length; i++){
		if( li[i].style.display == 'block' ){
			li[i].style.display = 'list-item';
		}
	}
}

function toggleDisplay(  ){
	var item = this.nextElementSibling;
	if( item.style.display == 'block' || item.style.display == '' ){
		item.style.display = 'none';
	}
	else if( item.style.display == 'none' ){
		item.style.display = 'block';
	}
}

function closeAll(){
	var items = $( '.toggleable' );
	for( var i = 0; i < items.length; i++ ){
		var item = items[i].nextElementSibling;
		if( item.style.display == 'block' || item.style.display == '' ){
			item.style.display = 'none';
		}
	}
}

function openAll(){
	var items = $( '.toggleable' );
	for( var i = 0; i < items.length; i++ ){
		var item = items[i].nextElementSibling;
		if( item.style.display == 'none'){
			item.style.display = 'block';
		}
	}
}

document.onreadystatechange = function (){
	var items = $( '.toggleable' );
	for( var i = 0; i < items.length; i++ ){
		items[i].addEventListener( 'click', toggleDisplay );
	}
}
