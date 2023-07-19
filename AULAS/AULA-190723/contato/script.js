const email = document.querySelector("#email");
const campos = document.querySelectorAll("input, textarea")
function validarEmail() {
    const valor = email.value; // captura o valor digitado no campo
    if(valor.includes("@")){
        email.style.borderColor = "green";
    } else {
        email.style.borderColor = "red";
    }
    

}

function validarCampoVazio(e){ //event
    const campo = e.target
    const valor = campo.value;
    if(valor == ""){
        campo.style.borderColor = "red";
    } else {
        campo.style.borderColor = "green";
    }
}

function validarCampoVazio2(e){ //event
    const campo = e.target
    const valor = campo.value;
    if(valor == ""){
        campo.style.borderColor = "red";
    } else {
        campo.style.borderColor = "#767676";
    }
}

for(let campo of campos){
    campo.addEventListener("keyup", validarCampoVazio)
}

email.addEventListener("keyup", validarEmail) //verifica o email a cada botão pressionado
email.addEventListener("change", validarEmail)

for(let campo of campos){
    campo.addEventListener("blur", validarCampoVazio2) //blur -> evento perde o foco
}

