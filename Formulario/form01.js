

function destacar(ele){
    ele.style.backgroundColor = "#aaa"
}

function normal(ele){
    ele.style.backgroundColor = "white"
}

function funcao(){
    let validado = false;
    let stremail = document.getElementById('email').value;

    validado = stremail.includes('@');

    if(validado){
        window.alert('Formulário enviado com sucesso!')
    }else{
        window.alert('Digite um email válido')
    }
}