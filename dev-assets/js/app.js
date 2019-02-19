try {
    //Bibliotecas
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
    require('owl.carousel');
    require('jquery-validation');
    window.swal = require('sweetalert2');

    //Scripts
    //Menssagens de validação de formulários
    require('./main');
    require('./form-ajax');
    require('./jquery-validation-messages');
} catch (e) {
    console.log('Fail to load Js Libs:', e)
}