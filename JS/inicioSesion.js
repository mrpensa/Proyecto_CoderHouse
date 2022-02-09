const usuarios = [
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
]

let boton = document.getElementById("botonInicio");
boton.addEventListener("click", validar);

function validar(){
    
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("contraseña").value;

    if( document.getElementById("usuario").value == "" || document.getElementById("contraseña").value == "" ){
        alert("Introduzca todos los datos");
    }
  
    for(busqueda of usuarios){
        if(busqueda.nombre == usuario && busqueda.pass == password){
            alert("Bienvenido " + busqueda.nombre);
            return false;
        }else {
            alert("nombre o cotraseña incorrectos");
            return false;
        }
    }
    
    
}