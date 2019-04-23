"use strict"


 window.onload = function() {
	removeNoJS();
	addListenerMenu();
	addListenerScroll();
	addListenerUps()	;
	getForm();
 }
 
 function removeNoJS() {
   let apps = document.getElementsByClassName('app_no_js');
	[].forEach.call(apps,function(el){
		el.classList.add('app_js');
		el.classList.remove('app_no_js');
	});
}