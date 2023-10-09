$(document).ready(function() {  
    
    
    $('form').on('submit', function(e){
        e.preventDefault();  
        alert('Tudo certo!')     ; 
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'XXX.XXX.XXX-XX'
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX) XXXXX-XXXX'
    })

    $('#cep').mask('00000-000', {
        placeholder: 'XXXXX-XXX'
    })

    $('#form-cadastro').validate({
        rules: {
            NomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            NomeCompleto: 'Por favor, insira seu nome completo',
            email: 'Insira um email válido',
            telefone: 'Preencha o campo telefone',
            cpf: 'Preencha o campo CPF',
            endereco: 'Peeencha o endereço completo',
            cep: 'Preencha o CEP do endereço'
        }
    })

})