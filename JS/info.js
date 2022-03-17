//texto Sobre nosotros
let txt = document.getElementById('text--inicial');
let parrafo5 = document.getElementById('p5');
let parrafo6 = document.getElementById('p6');
let parrafo7 = document.getElementById('p7');
let parrafo8 = document.getElementById('p8');
let parrafo9 = document.getElementById('p9');
let parrafo10 = document.getElementById('p10');

txt.innerHTML = `Te dijeron que volar es para unos pocos, que es difícil e impagable, que viajar en avión es la excepción y no la regla.
Somos FlyFromHouse y estamos acá para cambiarlo.                        
Podés ser de los que no creen que esto sea posible en Argentina, o ser uno de los que se animan a perseguir sus sueños. Con los pies sobre la tierra, se puede volar.                        
Somos los que no dejan que las distancias nos separen de los que más queremos.                        
Somos los que hoy estamos acá y mañana podemos estar allá.                        
Somos un equipo trabajando para que todos los Argentinos podamos tener "la libertad volar”.`

parrafo5.innerHTML = `Proveer las tarifas más bajas, un servicio amigable y una operación de excelencia en el mercado aéreo Argentino.`;

parrafo6.innerHTML = `Ser la línea aérea de bajo costo líder de Argentina, operando vuelos de cabotaje y regionales.`;

parrafo7.innerHTML = `Si todavía no sabés cuándo preferís viajar, algunas aerolíneas permiten dejar tu ticket abierto. Esto significa que mantendrás el valor que pagaste como crédito y podrás planificar tu nuevo viaje con tranquilidad.
                        
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

parrafo8.innerHTML = `Somos una compañía orientada a la mejora continua. Desafiamos la zona de confort y el sistema. Somos curiosos. Cuestionamos, investigamos e innovamos. Buscamos continuamente optimizar                     nuestros procesos.
                        
Somos una compañía ágil con procesos simples. Evitamos la burocracia. Planeamos. Evitamos los retrabajos. Comunicándonos, evitamos desvíos. Somos prudentes y cuidadosos con los recursos.                  Fomentamos la cultura digital. No utilizamos papel.

Somos una compañía ultra low cost. Debemos tener siempre el costo por asiento más bajo del mercado. Somos perseverantes en gestionar con los costos más bajos posibles. Hacemos nuestro mejor esfuerzo por negociar el mejor contrato y los mejores precios.`;

parrafo9.innerHTML = `Somos personas que nos preocupamos por los pasajeros y nuestro equipo. Nos interesamos por el otro. Somos cercanos y amigables. Colaboramos. Somos facilitadores. Queremos que los pasajeros                    alcancen sus sueños. Ayudamos a nuestros compañeros a cumplir sus objetivos. Cumplimos lo acordado.
                        
Somos personas que aceptamos al otro. Somos humanos, ninguno es mejor o más importante que el otro. Somos sinceros y transparentes. Cada persona tiene un rol fundamental en la compañía.                   Aprendemos de nuestros errores, así crecemos y evitamos que se repitan.`;

parrafo10.innerHTML =  `Somos personas apasionadas que contagiamos energía. Disfrutamos lo que hacemos. Somos alegres en nuestras palabras, en nuestras acciones, en nuestras decisiones. Disfrutar el camino es tan                    importante como llegar al objetivo. Fomentamos un ambiente de trabajo saludable, cómodo, donde las personas se sientan a gusto. Celebramos los logros.`;


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