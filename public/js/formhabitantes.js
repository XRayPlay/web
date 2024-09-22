const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');


const expresiones = {
    cedula: /^[0-9]{7,8}$/,
    nombre: /^[a-zA-ZÁ-ÿ]{3,40}$/,
    nombres: /^[a-zA-ZÁ-ÿ]{3,40}\s[a-zA-ZÁ-ÿ]{3,40}\s?$/,
    apellido: /^[a-zA-ZÁ-ÿ]{3,40}$/,
    fechanacimiento: /^\d{2,4}\-\d{1,2}\-\d{1,2}$/
    
}

const campos = {
    cedula: false,
    nombre: false,
    apellido: false,
    sexo: false,
    fechanacimiento: false,
    familia: false,
    direccion: false,
    comunidad: false,   
}

const validarNombre = (expresion, input, campo) => {
    if(expresion.test(input.value) || expresiones.nombres.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}


const validarcampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}


const validarselect = (select, campo) => {
    if(select == null || select == 0 ) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }else{
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "cedula":
            validarcampo(expresiones.cedula, e.target, 'cedula');
        break;
        case "nombre":
            validarNombre(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarNombre(expresiones.apellido, e.target, 'apellido');
        break;
        case "fechanacimiento":
            validarcampo(expresiones.fechanacimiento, e.target, 'fechanacimiento');
        break;
    }
}

const validarFormularioS = (b) => {
    console.log(b.target.name);
    switch (b.target.name) {
        case "sexo":
            validarselect(b.target.value, 'sexo');
        break;
        case "familia":
            validarselect(b.target.value, 'familia');
        break;
        case "direccion":
            validarselect(b.target.value, 'direccion');
        break;
        case "comunidad":
            validarselect(b.target.value, 'comunidad');
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

selects.forEach((select) => {
    select.addEventListener('change', validarFormularioS);
})

formulario.addEventListener('submit', (e) => {

    if(campos.cedula && campos.nombre && campos.apellido && campos.fechanacimiento && campos.sexo && campos.familia && campos.direccion && campos.comunidad){

    }else{
        e.preventDefault();

    }
})