/* asociaciones al DOM */
let op1 = document.getElementById("op1")
let op2 = document.getElementById("op2")

let btsum = document.getElementById("sumabtn")
let btres = document.getElementById("restabtn")
let btmul = document.getElementById("multbtn")
let btdiv = document.getElementById("divbtn")

let res = document.getElementById("ipres")


/* Eventos para botones de operaciones */ 
btsum.addEventListener("click", (a , b)=>{
    if(op1.value==""||op2.value==""){
        errorVacio()
    }else{
        let resu = parseFloat(op1.value) + parseFloat(op2.value)
        res.value = `${resu}`
        op1.value = "" 
        op2.value = ""
        op1.focus()
    }
})

btres.addEventListener("click", (a , b)=>{
    if(op1.value==""||op2.value==""){
        errorVacio()
    }else{
        let resu = parseFloat(op1.value) - parseFloat(op2.value)
        res.value = `${resu}`
        op1.value = ""
        op2.value = ""
        op1.focus()
    }
})

btmul.addEventListener("click", (a , b)=>{
    if(op1.value==""||op2.value==""){
        errorVacio()
    }else{
        let resu = parseFloat(op1.value) * parseFloat(op2.value)
        res.value = `${resu}`
        op1.value = ""
        op2.value = ""
        op1.focus()
    }
})

btdiv.addEventListener("click", (a , b)=>{
    if(op1.value==""||op2.value==""){
        errorVacio()
    }else{
        let resu = parseFloat(op1.value) / parseFloat(op2.value)
        res.value = `${resu}`
        op1.value = ""
        op2.value = ""
        op1.focus()
    }
})

/* Función de validación solo para campo vacío, se restinge el acceso al input discriminando solo por números
y se logra una validación sencilla porque el caso lo permite, entiendo que usar restricciones desde HTML no es
recomendado ya pero considero que es ideal en algunos casos y lo mas dinámico usarlo como primera capa de validación, 
requiere menos uso de script*/
function errorVacio(){
    Swal.fire({
        title: 'Error, no puede haber campos vacíos',
        icon: 'error',
        allowOutsideClick: false,
        showCloseButton: true,
        confirmButtonText: 'Cerrar'
    })
}