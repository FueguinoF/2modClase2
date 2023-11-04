let op1 = document.getElementById("op1")
let op2 = document.getElementById("op2")

let btsum = document.getElementById("sumabtn")
let btres = document.getElementById("restabtn")
let btmul = document.getElementById("multbtn")
let btdiv = document.getElementById("divbtn")

let res = document.getElementById("ipres")



btsum.addEventListener("click", (a , b)=>{
    let resu = parseInt(op1.value) + parseInt(op2.value)
    res.value = `${resu}`
    op1.value = ""
    op2.value = ""
    op1.focus()
})


btres.addEventListener("click", (a , b)=>{
    let resu = parseInt(op1.value) - parseInt(op2.value)
    res.value = `${resu}`
    op1.value = ""
    op2.value = ""
    op1.focus()
})


btmul.addEventListener("click", (a , b)=>{
    let resu = parseInt(op1.value) * parseInt(op2.value)
    res.value = `${resu}`
    op1.value = ""
    op2.value = ""
    op1.focus()
})


btdiv.addEventListener("click", (a , b)=>{
    let resu = parseInt(op1.value) / parseInt(op2.value)
    res.value = `${resu}`
    op1.value = ""
    op2.value = ""
    op1.focus()
})