let btn = document.getElementById("btnSub");
let email = document.getElementById("emailSub").value;

function nuevoSub(){

    
    btn.value = 'Enviando...';

    setTimeout(() => {
        btn.value = 'Registro guardado';
        setTimeout(() => {
            location.reload();
        }, 1500);
    }, 3000);
    
   
}

function redireccion(){
    window.location.href = "../pages/registro.html";
}