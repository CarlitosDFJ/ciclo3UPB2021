var enviarMensaje=[]
console.log(enviarMensaje)

/*var a={"user":"mail"}
enviarMensaje.push(a)
console.log(enviarMensaje)
*/
function enviarMensaje(){
    var nombre=document.getElementById('nombre').value
    var mail=document.getElementById('mail').value
    var enviarMensaje=document.getElementById('message').value
    var mensaje={"user":nombre,"mail":correo}
    enviarMensaje.push(mensaje)
    console.log(enviarMensaje)
    document.getElementById('nombre').value=""
    document.getElementById('mail').value=""
    document.getElementById('message').value=""
    
}