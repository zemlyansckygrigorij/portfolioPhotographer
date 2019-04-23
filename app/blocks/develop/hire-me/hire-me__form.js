let formHire ;
let formName ;
let formEmail ;
let formMessage ;
let buttonSend ;
function getForm(){
	formHire = document.forms[0]; 
	formName = formHire.elements.name;
	formEmail = formHire.elements.email;
	formMessage = formHire.elements.message;
	buttonSend = formHire.elements.buttonSend;

	formName.addEventListener('focus', function (e) {
			formName.value = "";
	});
	formEmail.addEventListener('focus', function (e) {
			formEmail.value = "";
	});
	formMessage.addEventListener('focus', function (e) {
			formMessage.value = "";
	});
	
	buttonSend.addEventListener('click', sendData);
	
	$(".popup").on('click', function(event){
		event.stopPropagation();
		event.stopImmediatePropagation();
		$( ".popup" ).addClass( "hidden" );
	});
	
	
}

let sendData = function(){
	event.preventDefault();
	if(!validateForm){
		return false;
	}
	
	let sendData = {
		name: formName.value,
		email: formEmail.value,
		message: formMessage.value
	};
	let jsonData = JSON.stringify(sendData);
	
	console.log(jsonData);
	$.ajax({
        url: "http://127.0.0.1:3000",
        contentType: "application/json",
        method: "POST",
        data: jsonData,
        success: function () {

			$( ".popup" ).removeClass( "hidden" );
            alert('success connection');
        }
    })
}




let validateForm = function(){
	event.preventDefault();
	if(name.value == ""|name.value == "*Your name" ){
		alert("Введите имя");
		return false;
	}
	if(email.value == ""|email.value == "*Your Email"){
		alert("Введите e-mail");
		return false;
	}
	if(message.value == ""|message.value == "Your Messages"){
		alert("Введите сообщение");
		return false;
	}
	
	if(!validateEmail(email)){
		return false;
	}
	return true;
}

function validateEmail(email){
	let r = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
	if (!r){
		alert('Уверены что email введен верно?')
		return false;
	}
	return true;
	
}

//popup



/*
//------correct
$email[] = '123456@i.ru';
$email[] = '123456@ru.name.ru';
$email[] = 'login@i.ru';
$email[] = 'логин-1@i.ru';
$email[] = 'login.3@i.ru';
$email[] = 'login.3-67@i.ru';
$email[] = '1login@ru.name.ru';
//----- wrong
$email[] = '1login_@i.ru';
$email[] = '_login@i.ru';
$email[] = '_login@ru.name.ru';
$email[] = 'логинlogin@i.ru';
$email[] = 'loginлогин@i.ru';
$email[] = '.123456@i.ru ';
$email[] = '123456-@i.ru';
$email[] = '@123456@i.ru';
$email[] = '123456@.ru';
$email[] = '123456@ru';
$email[] = 'login@.ru';
$email[] = '123456@ru.name.ru.ua';
$email[] = '123456@i.ру';
$email[] = '123456@ru.name.ру';




*/
