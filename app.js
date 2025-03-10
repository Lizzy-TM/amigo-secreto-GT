// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//console.log("Hola Galia");
// Creamos  una lista de amigos:
const inputAmigo=document.getElementById("amigo");
const listaAmigos=[];
// let listaAmigos=[];
const ullistaAmigos=document.getElementById("listaAmigos");
const ulResultado=document.getElementById("resultado");


//creamos una función para captura la lista de nombre que ingresa del input(caja del html)
function agregarAmigo(){
    if (inputAmigo.value!=="")   
            //  {alert('Debes ingresar un nombre válido')}
     
    //Captura los nombres del html q se ingresan del boton Anadir
    {listaAmigos.push(inputAmigo.value);} else
     { alert("Debe ingresar un nombre");}

   ullistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
   inputAmigo.value="";
    } 

    function sortearAmigo(){
        const random=Math.floor(Math.random()*listaAmigos.length);
        const amigoSecreto=listaAmigos[random];
        ulResultado.innerHTML=`<li>El amigo secreto es: ${amigoSecreto}</li>`;
       /*ullistaAmigos.innerHTML="";*/
    }
    function reiniciarAmigo(){
        ullistaAmigos.innerHTML="";
        ulResultado.innerHTML="";
        listaAmigos.length=0;
        // listaAmigos.length=[];  (si se hubiera definido let listaAmigos=[];)         
    }
