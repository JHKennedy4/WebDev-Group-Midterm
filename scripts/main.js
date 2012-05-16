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
}