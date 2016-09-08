let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

var array = {};

app.post('/users', (req, res) => {
    console.log(req.body);
    var my_response = {
        status : '100',
        visits : 0
    };
    if(req.body.email in array) {
        array[req.body.email]+=1;
        my_response.visits = array[req.body.email];
        res.send( my_response );
    } else {
        array[req.body.email] = 1;
        my_response.visits = array[req.body.email];
        my_response.status = '200';
        res.send( my_response );
    }
    // TODO: вернуть количество обращений
    // Сколько пользователей с таким э-мейлом уже обращалось
    //https://learn.javascript.ru/object
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
