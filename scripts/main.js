function filter( str ){
	var buttons = document.getElementsByClassName('button')
	for( var i = 0; i < buttons.length; i++ ){
		buttons[i].className = 'button';
	}
	
	if( str == '' ){
		str = 'all';
	}
	var button = document.getElementById( str );
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
	var toHide = document.getElementsByClassName( className );
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

// Only works for block elements, inline elements will break
function showClass( className ){
	var toShow = document.getElementsByClassName( className );
	for( var i = 0; i < toShow.length; i++ ){
		toShow[i].style.display = 'block';
	}
	fixLI();
}

function fixLI(){
	var li = document.getElementsByTagName('li')
	for( var i = 0; i < li.length; i++){
		if( li[i].style.display == 'block' ){
			li[i].style.display = 'list-item';
		}
	}
}