'use strict';
function onSubmit(form) {
    var data = {
        user: form.elements['user'].value,
        email: form.elements['email'].value
    };
    let result = request('/users', data);

    if(result =='100') {
         form.hidden = true;
    }
    request('/users', data);
    console.log(data);
}
