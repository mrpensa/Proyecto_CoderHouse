let usuarioIngresado;
let passwordVerificacion;
const usuarios = [
    {usuario: 'mario', pass: "123", dni: 12312352, email: "mario123@gmail.com"},
    {usuario: 'moi', pass: "345", dni: 21243510, email: "moi345@gmail.com"},
    {usuario: 'marta', pass: "325", dni: 1341236, email: "marta325@gmail.com"},
    {usuario: 'luis', pass: "858", dni: 6354635, email: "luis858@gmail.com"},
    {usuario: 'edgardo', pass: "999", dni: 4353552, email: "edgardo999@gmail.com"},
    {usuario: 'karen', pass: "661", dni: 09238492, email: "karen661@gmail.com"},
    {usuario: 'camila', pass: "332", dni: 5235223, email: "camila332@gmail.com"},
    {usuario: 'fausto', pass: "005", dni: 12314978, email: "fausto005@gmail.com"},
    {usuario: 'claudia', pass: "656", dni: 428358322, email: "claudia656@gmail.com"},
    {usuario: 'guillermo', pass: "666", dni: 67396032, email: "guille66@gmail.com"},
]


document.getElementById("exampleInputEmail1").value;
document.getElementById("exampleInputPassword1").value;

let boton = document.getElementById("botonInicioSesion");
boton.addEventListener("click", inicioSesion);

function inicioSesion(){
    
    const resultado = (usuarios.find((busqueda) => busqueda.usuario == ing) && usuarios.find((busqueda2) => busqueda2.pass == ing2) );

   if(resultado){
       alert("bienvenido de regreso " + usuario);
   } else {
       alert("Algun dato es erroneo");
  


}




