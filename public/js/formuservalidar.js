const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-ZÁ-ÿ]{3,40}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/
}

const campos = {
    usuario: false,
    password: false
}

const validarcampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        username.style.border_bottom = "5px solid #adadad";
        campos[campo] = true;
    } else {
        username.style.border_bottom = "2px solid #ff0808";
        campos[campo] = false;
    }
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarcampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "password":
            validarcampo(expresiones.password, e.target, 'password');
        break;

    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    if(campos.usuario && campos.password){
        formulario.reset();
    }
})










/*
const formulario = document.getElementById('formulario')
const cedula = document.getElementById('cedula')
const nombres = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const sexo = document.getElementById('sexo')
const fechanacimiento = document.getElementById('fechanacimiento')
const lugarnacimiento = document.getElementById('lugarnacimiento')
const condicion = document.getElementById('condicionvivienda')
const actextra = document.getElementById('catedra')
const aulaintegrada = document.getElementById('aulaintegrada')
const parrafo = document.getElementById('warnings')

formulario.addEventListener("submit", e=>{

    let warnings = ""
    let enter = false
    // expresiones Regulares
    

    if(!expresioncedula.test(cedula.value)){
        e.preventDefault()
        warnings += '- La cedula tiene que comenzar con V, E, J o P y tiene que tener entre 7 y 8 digitos. <br>'
        enter = true
    }
    if(!expresionnombre.test(nombres.value)){
        e.preventDefault()
        warnings += '- El nombre no es valido. <br>'
        enter = true
    }
    if(!expresionapedillo.test(apellido.value)){
        e.preventDefault()
        warnings += '- El apellido no es valido. <br>'
        enter = true
    }
    if(!expresionlugarnacimiento.test(lugarnacimiento.value)){
        e.preventDefault()
        warnings += '- No has seleccionado el lugar de nacimiento. <br>'
        enter = true
    }
    if(sexo.value == ""){
        e.preventDefault()
        warnings += '- No has seleccionado el sexo. <br>'
        enter = true
    }
    if(condicion.value==""){
        e.preventDefault()
        warnings += '- No has seleccionado el estado de vivienda. <br>'
        enter = true
    }
    if(!expresionactextra.test(actextra.value)){
        e.preventDefault()
        warnings += '- No has seleccionado la actividad extra catedra. <br>'
        enter = true
    }
    if(aulaintegrada.value == 1){
        e.preventDefault()
        warnings += '- No has seleccionado el aula integrada. <br>'
        enter = true
    }
    if(enter){
        parrafo.innerHTML = warnings
    }
})*/