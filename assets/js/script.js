const btn = document.querySelector("[data-button]");
const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
//evaluar si dejan el campo vacio cambiar de campo
inputs.forEach( input => {
    input.addEventListener("blur", (input) =>{
        evaluarVacio(input.target);
    });
    input.addEventListener("keyup", (input) =>{
        evaluarTipo(input.target)
    })
});
textarea.addEventListener("blur", (textarea) =>{
    evaluarVacio(textarea.target);
});
textarea.addEventListener("keyup", (textarea) =>{
    evaluarTipo(textarea.target)
})
//clic enviar
btn.addEventListener("click", function(event){
    inputs.forEach( input =>{
        evaluarVacio(input, event);
    });
    evaluarVacio(textarea, event);
});

//evaluar si esta vacio el input
function evaluarVacio(input, event){
    let label = input.nextElementSibling;
    let span = input.nextElementSibling.nextElementSibling;
    if(input.value == ""){
        input.classList.add("formcontacto__invalid");
        label.classList.add("formcontacto__label__invalid");
        span.textContent = `${input.placeholder} es un campo requerido.`
        span.classList.remove("hide");
        event.preventDefault();
    }else{
        input.classList.remove("formcontacto__invalid");
        label.classList.remove("formcontacto__label__invalid");
        span.textContent = "";
        span.classList.add("hide");
        //si no esta vacio evalua el tipo de input
        evaluarTipo(input);
    }
}
//evaluar tipo d input
function evaluarTipo(input){
    let label = input.nextElementSibling;
    let span = input.nextElementSibling.nextElementSibling;
    //en base al placeholder
    switch (input.placeholder){
        //si es el input nombre
        case "Nombre":
            if(input.validity["patternMismatch"]){
                input.classList.add("formcontacto__invalid");
                label.classList.add("formcontacto__label__invalid");
                span.textContent = `${input.placeholder} no debe contener simbolos ni debe ser mayor a 50 caracteres.`
                span.classList.remove("hide");
            }else{
                span.textContent = "";
                span.classList.add("hide");
            }
            break;
        //si es el input correo
        case "Correo":
            if(input.validity["typeMismatch"]){
                input.classList.add("formcontacto__invalid");
                label.classList.add("formcontacto__label__invalid");
                span.textContent = `${input.placeholder} debe ser una direccion valida, ejemplo: "texto@texto.com".`
                span.classList.remove("hide");
            }else{
                span.textContent = "";
                span.classList.add("hide");
            }
            break;
        //si es el input asunto
        case "Asunto":
            if(input.validity["patternMismatch"]){
                input.classList.add("formcontacto__invalid");
                label.classList.add("formcontacto__label__invalid");
                span.textContent = `${input.placeholder} no debe ser mayor a 50 caracteres.`
                span.classList.remove("hide");
            }else{
                span.textContent = "";
                span.classList.add("hide");
            }
            break;
        //si es el input mensaje
        case "Mensaje":
            if(input.value.length > 300){
                input.classList.add("formcontacto__invalid");
                label.classList.add("formcontacto__label__invalid");
                span.textContent = `${input.placeholder} no debe ser mayor a 300 caracteres.`;
                span.classList.remove("hide");
            }else{
                span.textContent = "";
                span.classList.add("hide");
            }
            break;
        default: 
        break;
    }
}