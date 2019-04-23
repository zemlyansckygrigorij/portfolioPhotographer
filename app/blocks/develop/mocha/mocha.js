/*test*/
//Чит-лист для проверки поля email
describe("pow", function() {

	//Email в верхнем регистре   -> Операция проводится успешно

    it("EMAIL@yandex.ru - true", function() {
        assert.equal(validateEmail('EMAIL@yandex.ru'), true);
    });
	//Email в нижнем регистре   -> Операция проводится успешно


	it("email@yandex.ru - true", function() {
        assert.equal(validateEmail('email@yandex.ru'), true);
    });

	//Email с цифрами в имени аккаунта   -> Операция проводится успешно
	it("email1@yandex.ru - true", function() {
        assert.equal(validateEmail('email1@yandex.ru'), true);
    });

	//Email с цифрами в доменной части   -> Операция проводится успешно
	it("email1@yandex1.ru - true", function() {
        assert.equal(validateEmail('email1@yandex1.ru'), true);
    });

	//Email с дефисом в имени аккаунта   -> Операция проводится успешно
	it("email-1@yandex1.ru - true", function() {
        assert.equal(validateEmail('email-1@yandex1.ru'), true);
    });

	// Email с дефисом в доменной части   -> Операция проводится успешно
	it("email1@yandex-1.ru - true", function() {
        assert.equal(validateEmail('email1@yandex-1.ru'), true);
    });

	// Email со знаком подчеркивания в имени аккаунта   -> Операция проводится успешно
	it("email_@yandex.ru - true", function() {
        assert.equal(validateEmail('email_@yandex.ru'), true);
    });

	//Email со знаком подчеркивания в доменной части   -> Операция проводится успешно
	it("email1@yandex_.ru - true", function() {
        assert.equal(validateEmail('email1@yandex_.ru'), true);
    });


	// Email с точками в имени аккаунта   -> Операция проводится успешно
	it("email.ru.com@yandex.ru - true", function() {
        assert.equal(validateEmail('email.ru.com@yandex.ru'), true);
    });


// Email без точек в доменной части   -> Должно появится сообщение о неправильном или некорректном e-mail введеном в поле
	it("email@yandexuaru - false", function() {
        assert.equal(validateEmail('email@yandexru'), false);
    });
// Превышение длины email (>320 символов)   -> Должно появится сообщение о неправильном или некорректном e-mail введеном в поле
	it("длинный email - false", function() {
		let longEmail = 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqql@yandex.ru';
        assert.equal(validateEmail('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqql@yandex.ru'), false);
    });
// Отсутствие @ в email   -> Должно появится сообщение о неправильном или некорректном e-mail введеном в поле
	it("emailyandex.ru - false", function() {
        assert.equal(validateEmail('emailyandexru'), false);
    });
// Email с пробелами в имени аккаунта   -> Должно появится сообщение о неправильном или некорректном e-mail введеном в поле
	it("email w@yandex.ru - false", function() {
        assert.equal(validateEmail('email w@yandex.ru '), false);
    });
// Email с пробелами в доменной части   -> Должно появится сообщение о неправильном или некорректном e-mail введеном в поле
	it("email@yandex w.ru - false", function() {
        assert.equal(validateEmail('email@yandex w.ru '), false);
    });
// Email без имени аккаунта   -> Должно появится сообщение о неправильном или некорректном e-mail введеном в поле
	it("@yandex.ru - false", function() {
        assert.equal(validateEmail('@yandex.ru '), false);
    });
// Email без доменной части   -> Должно появится сообщение о неправильном или некорректном e-mail введеном в поле
	it("email@ - false", function() {
        assert.equal(validateEmail('email@ '), false);
    });
// Некорректный домен первого уровня (допустимо 2-6 букв после точки: .ru)   ->Должно появится сообщение о неправильном или некорректном e-mail введеном в поле
	it("email@yandex.rurururu - false", function() {
        assert.equal(validateEmail('email@yandex.rurururu '), false);
    });

});






