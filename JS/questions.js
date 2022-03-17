//texto
//Preguntas frecuentes
let parrafo1 = document.getElementById('p1');
let parrafo2 = document.getElementById('p2');
let parrafo3 = document.getElementById('p3');
let parrafo4 = document.getElementById('p4');


parrafo1.innerHTML = `En la sección Mis Viajes, encontrarás todas las opciones disponibles para gestionar tu reserva de manera rápida. Seguí los pasos a continuación:
                    
Ingresá a Mis Viajes y seleccioná tu viaje
Seleccioná "Gestionar mi viaje"
Oprimí "Ver opciones de cambio”
Elegí la opción deseada y seguí las instrucciones
Si estás desde la APP, chequeá este tutorial.

Al modificar tu reserva, podrá haber un cobro adicional sobre la tarifa. Eso se debe a las políticas de cada proveedor, que contemplan la diferencia de temporadas (alta y baja), cambio de clase y/o disponibilidad del producto.`;

parrafo2.innerHTML = `Sí. Si decidís no viajar, podés cancelar tu reserva, pero antes debes tener en cuenta de que en Flybondi no realizamos devoluciones de pasajes ni de opcionales, por lo que solo podrás pedir la devolución de tus tasas de embarque, (TQ Tasa de Seguridad y XR Tasa Aeroporturia).`;

parrafo3.innerHTML = `Si todavía no sabés cuándo preferís viajar, algunas aerolíneas permiten dejar tu ticket abierto. Esto significa que mantendrás el valor que pagaste como crédito y podrás planificar tu nuevo viaje con tranquilidad.
                    
En la sección Mis Viajes, encontrarás todas las opciones disponibles para gestionar tu reserva de manera rápida. Seguí los pasos a continuación:

Ingresá a Mis Viajes y seleccioná tu viaje
Seleccioná "Gestionar mi viaje"
Oprimí "Ver opciones para abrir mis tickets”
Elegí la opción deseada y seguí las instrucciones
*Encontrarás la fecha límite para elegir tu nuevo vuelo al hacer la simulación de tu ticket abierto en Mis Viajes.

Tips para elegir tu nuevo vuelo:

Seleccioná las fechas de tu vuelo con anticipación.
Evitá elegir los meses de alta temporada, en los cuales la diferencia tarifaria puede ser mayor.
Recordá revisar los protocolos de entrada en cada país en esta sección.`;

parrafo4.innerHTML = `De acuerdo al derecho de arrepentimiento, podés cancelar tu compra dentro de los 10 días corridos de haberla realizado. Recordá que, según la Resolución 329/2020 de ANAC, no se aplicará derecho de arrepentimiento a las compras de vuelos. Las mismas se rigen por la política de devolución informada en el voucher.`;



//funcion

let question = document.querySelectorAll('.question');
let btn = document.querySelectorAll('.question .more');
let answer = document.querySelectorAll('.answer');
let parrafo = document.querySelectorAll('.answer p');

for(let i = 0; i < btn.length; i++){

    let altoParrafo = parrafo[i].clientHeight;
    let contador = 0;

    btn[i].addEventListener('click', () => {

        if(contador == 0){
            answer[i].style.height = `${altoParrafo}px`;
            question[i].style.marginBottom = `10px`;
            btn[i].innerHTML = '<i>-</i>';
            contador++;
        } else if(contador == 1){
            answer[i].style.height = `0`;
            question[i].style.marginBottom = `0px`;
            btn[i].innerHTML = '<i>+</i>';
            contador--;
        }


    })

}
