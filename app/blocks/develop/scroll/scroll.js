

function addListenerScroll(){
	let scrolles = document.getElementsByClassName('scroll');
	[].forEach.call(scrolles,function(el){
		el.addEventListener('click', function (e) {
			location.href="#about"
		})
	});

}