const form = document.getElementById('form-numeros')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(num1.value < num2.value){
        document.getElementById('mensagem-sucesso').style.display = 'block'
        } else {
        document.getElementById('mensagem-error').style.display = 'block'
    }
    num1.value = ''
    num2.value = ''
})

num1.addEventListener('keyup', function(e){
    document.getElementById('mensagem-sucesso').style.display = 'none'
    document.getElementById('mensagem-error').style.display = 'none'
    })
    num2.addEventListener('keyup', function(e){
        document.getElementById('mensagem-sucesso').style.display = 'none'
        document.getElementById('mensagem-error').style.display = 'none'
})