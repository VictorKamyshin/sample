'use strict';
function onSubmit(form) {
    var data = {
        user: form.elements['user'].value,
        email: form.elements['email'].value
    };
    let result = JSON.parse(request('/users', data));
    let visits = result.visits; 
   // form.hidden = true;
    helloWorld.innerHTML = hello(data.user, visits);
    console.log(data);
    console.log(result);
}

function plural (number) {
    switch(number) {
        case 0:
            return 'Здравствуй, дух';
            break;
        case 1:
            return 'Рады приветствовать на нашем курсе!';
            break;
        case 2:
            return 'Кликай дальше!! Еще осталось 13 раз(а)';
            break;
        case 13:
            return 'Кликай дальше!! Еще осталось 2 раз(а)';
            break;
        case 15:
            return '01001000 01101001 00101100 00100000 01100010 01110010 01101111';
            break;
        case 100:
            return '01001000 01101001 00101100 00100000 01100010 01110010 01101111';
            break;
    }
}

function hello (text, visits) {
    //if ( isCyrillic(text) ) {
	if ( visits != undefined ) {
            return 'Привет, ' + text + '. Вы посетили страницу ' + visits + ' '+ my_plural(visits);
	} else {
	    return 'Привет, ' + text;
	}
    /*} else {
        if ( visits != undefined ) {
            return 'Hello, ' + text + ' . You visited this page ' + visits + ' ' +my_plural_eng(visits);
        } else {
            return 'Hello, ' + text;
        }
    }*/
}

function my_plural ( number ) {
    if (number % 10  > 1 && number % 10 < 5 && (number > 20 || number < 10) ) {
        return 'раза.';
    } else {
        return 'раз.';
    }
}

function my_plural_eng ( number ) {
    if (number > 1) {
        return 'times.';
    } else {
        return 'time.';
    }
}

var isCyrillic = function (my_text) {
     return /[а-я]/i.test(my_text);
}

if (typeof exports ==='object') {
    exports.hello = hello; 
}

if (typeof exports == 'object') {
    exports.plural = plural;
}

function filter(str) {

    let rules = window.rules;

    rules = rules.map(rule=> {
        return {
            regexp: new RegExp(`\\b${rule}\\b`,'g'),
            length: rule.length
        };
    });

    rules.forEach(rule=> {
        str = str.replace(rule.regexp, (new Array(rule.length +1)).join('*'))
    }); 

    return str;
}

if (typeof exports == 'object') {
    exports.filter = filter;
}


