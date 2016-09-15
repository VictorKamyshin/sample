let assert = require('assert');
let hello = require('./public/main').hello;
let plural = require('./public/main').plural;
let filter = require('./public/main').filter;


global.window = {
    rules: ['orange', 'apple']
}

assert.equal(filter('orange'), '******');
assert.equal(filter('orange asdasd'), '****** asdasd');
assert.equal(filter('orangeasdasd'), 'orangeasdasd');
assert.equal(filter('asdasd orange'), 'asdasd ******');
assert.equal(filter('asdasdorange'), 'asdasdorange');



assert.equal(hello('Test'), 'Привет, Test');

assert.equal(plural(0), 'Здравствуй, дух');
assert.equal(plural(1), 'Рады приветствовать на нашем курсе!');
assert.equal(plural(2), 'Кликай дальше!! Еще осталось 13 раз(а)');
assert.equal(plural(13), 'Кликай дальше!! Еще осталось 2 раз(а)');
assert.equal(plural(15), '01001000 01101001 00101100 00100000 01100010 01110010 01101111');
assert.equal(plural(100), '01001000 01101001 00101100 00100000 01100010 01110010 01101111');
//TODO: Кейсы для функции filter
// assert.equal(filter('КЕК'), '***');
