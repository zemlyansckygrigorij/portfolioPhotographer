let ups = document.getElementsByClassName('hire-me__up');
let homeDiv = document.getElementsByClassName('hero-area');

window.onscroll = function() {
	let scrolled =  document.documentElement.scrollTop;
	let width = window.innerWidth;
	if( 
		((width >= 1200)&&(scrolled > 700 && scrolled < 3740)) |
	    ((width < 1200 && width > 800 )&&(scrolled > 700 && scrolled < 6140)) |
	    (( width < 800 )&&(scrolled > 700 && scrolled < 7760)) 
	){
	   // alert(window.innerWidth);
		setFixed();
	}else{
		removeFixed();
	}


}


function setFixed(){
	[].forEach.call(ups,function(el){
		el.classList.add('hire-me__up_fixed');
		el.classList.remove('hire-me__up_position');
	});
}

function removeFixed(){
	[].forEach.call(ups,function(el){
			el.classList.add('hire-me__up_position');
			el.classList.remove('hire-me__up_fixed');
	});
}


function addListenerUps(){
	let ups = document.getElementsByClassName('hire-me__up');
	[].forEach.call(ups,function(el){
		el.addEventListener('click', function (e) {
			location.href="#home"
			document.documentElement.scrollTop = -100;
		})
	});
}