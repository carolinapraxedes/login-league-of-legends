//Início da codificação dos inputs de username e senha
const inputs = document.querySelectorAll('.input');
const button = document.querySelectorAll('.loginButton');

const handleFocus = ({target}) =>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');

    // eu estou pegando o irmao anterior do input que é o span
    //Quando o span for clicado, a class span-active é acionada
}

const handleFocusOut = ({target}) =>{

    if(target.value == ''){
        // Se tiver nada no input, pode remover o span-active
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }

    
}

//Fim da codificação dos inputs de username e senha

// Início de verificação se os inputs estão com value null ou não
// o Botão de logar vai mudar de estilização de acordo com os values de username e senha

const handleChange = () => {
    const [username, password] = inputs;   
    if(username.value && password.value.length >= 8){
        console.log('passou');
        
        button[0].removeAttribute('disabled');
    }else{
        button[0].setAttribute('disabled','');
    }
   

}


inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

// Fim de verificação se os inputs estão com value null ou não