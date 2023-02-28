const btn = document.getElementById("btn");
const form = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

const formVaild = {
    nombre: false,
    email: false,
    mensaje: false
}

const validarFormulario = (e) => {
    const formValues = Object.values(formVaild);
    const valid = formValues.findIndex(value => value == false);
    if(valid == -1) form.submit()
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFormulario();
})

nombre.addEventListener('change', (e) => {
    if(e.target.value.length > 0) formVaild.nombre = true;
})

email.addEventListener('change', (e) => {
    if(e.target.value.length > 0) formVaild.email = true;
})

mensaje.addEventListener('change', (e) => {
    if(e.target.value.length > 0) formVaild.mensaje = true;
})
