 function addListenerMenu(){
	let menu_elements = document.getElementsByClassName('menu_element');
	[].forEach.call(menu_elements,function(el){
		let text = el.innerHTML;
		let address = "";
		switch(text){
			case "Home":
				address = "#home";
				break;
			
			case "About":
				address = "#about";
				 break;
			
			case "Clients":
				address = "#happy-clients";
				 break;
			
			case "Portfolio":
				address = "#portfolio";
				 break;
			
			case "Blog":
				address = "#blog";
				 break;
			
		}
		el.addEventListener('click', function (e) {
			location.href = address;
		});
	});
 }