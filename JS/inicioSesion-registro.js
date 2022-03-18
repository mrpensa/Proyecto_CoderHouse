let usuarios = [
    {nombre: 'mario', pass: "123", dni: 12312352, email: "mario123@gmail.com"},
    {nombre: 'moi', pass: "345", dni: 21243510, email: "moi345@gmail.com"},
    {nombre: 'marta', pass: "325", dni: 1341236, email: "marta325@gmail.com"},
    {nombre: 'luis', pass: "858", dni: 6354635, email: "luis858@gmail.com"},
    {nombre: 'edgardo', pass: "999", dni: 4353552, email: "edgardo999@gmail.com"},
    {nombre: 'karen', pass: "661", dni: 09238492, email: "karen661@gmail.com"},
    {nombre: 'camila', pass: "332", dni: 5235223, email: "camila332@gmail.com"},
    {nombre: 'fausto', pass: "005", dni: 12314978, email: "fausto005@gmail.com"},
    {nombre: 'claudia', pass: "656", dni: 428358322, email: "claudia656@gmail.com"},
    {nombre: 'guillermo', pass: "666", dni: 67396032, email: "guille66@gmail.com"},
];

function validar(){
        
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;
   
    for(busqueda of usuariosRegistrados){
        if(busqueda.nombre == usuario && busqueda.pass == password){            
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Bienvenido de regreso ' + busqueda.nombre,
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(() => {
                location.href = "../index.html";
            }, 1600);
            
            return false;
        }else {
            Swal.fire({
                title: 'Error!',
                text: 'usuario o cotraseña incorrecta',
                icon: 'error',
                timer: 1500
            })
                    
            return false;
        }
    }

};

let boton = document.getElementById("botonRegistro")

if(boton) boton.addEventListener("click", nuevoUsuario)

let usuariosRegistrados = JSON.parse(localStorage.getItem("registro"));

function nuevoUsuario(){
    
    if(usuariosRegistrados.length > 0){
        usuarios = [...usuariosRegistrados, ...usuarios];
    }
    

    let nuevoUsuario = document.getElementById("nuevoUsuario").value;
    let nuevaPass = document.getElementById("nuevaPass").value;
    let verificacionPass = document.getElementById("verificacionPass").value;
    let nuevoDni = document.getElementById("nuevoDni").value;
    let nuevoEmail = document.getElementById("nuevoEmail").value;

     if(nuevoUsuario.length == 0 || nuevoDni.length == 0 || nuevoEmail.length == 0){
        Swal.fire({
            title: 'Error!',
            text: 'No puedes dejar campos vacios',
            icon: 'error',
            timer: 1500
        })    
    }else if(nuevaPass != verificacionPass ){
        Swal.fire({
            title: 'Error!',
            text: 'Las contraseñas no son iguales',
            icon: 'error',
            timer: 1500
        })
        return false;
    }    else {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Se ha completado el registro!!!',
            showConfirmButton: false,
            timer: 1500
        })
        const usuarioARegistrar = {nombre: nuevoUsuario, pass: nuevaPass, dni: nuevoDni, email: nuevoEmail};
        
        let usuariosRegistrados = JSON.parse(localStorage.getItem("registro"));
        usuariosRegistrados = [usuarioARegistrar, ...usuariosRegistrados];
        localStorage.setItem("registro", JSON.stringify(usuariosRegistrados));
        usuarios.push(usuarioARegistrar);
        location.reload();
    
    }
}