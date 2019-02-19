var form = $('.form-ajax');
if(form.length) {
    
    $(".form-ajax").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
    });

    form.submit(function() {
        $form = $(this);
        var postdata = $form.serialize();
        event.preventDefault();


    if (form.valid()) { 
            swal.fire({
                title: 'Enviando!',
                timer: 2000,
            });
            swal.showLoading();

            $.ajax({
                type: 'POST',
                url: $form.attr( 'action' ),
                data: postdata,
                dataType: 'json',
                success: function(response) {
                    console.log(response);
                    if (response.result) {
                        swal.fire({
                            title: 'Obrigado!',
                            text: 'mensagem enviada com sucesso',
                            type: 'success',
                        })
                        $form[0].reset();
                        $('.modal').modal('hide');
                    } else {
                        swal.fire({
                            title: 'Erro Ao Enviar!',
                            text: 'Caso o erro persista entre em contato pelo nosso e-mail: contato@Maternitta.com.br',
                            type: 'error',
                        })
                    }
                }
            });
        }
    }); 

}