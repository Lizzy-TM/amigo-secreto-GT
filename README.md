# Proyecto Amigo Secreto
### Descripción:
<p> En este proyecto se desarrolló una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

  El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla. </p>
### Funcionalidad:

- **Agregar nombres:** Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
- **Validar entrada:** Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
- **Visualizar la lista:** Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
- **Sorteo aleatorio:** Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
  
``` ***Nota:*** El archivo html y el archivo css ya se conocen, solo se trabajará en el archivo js```
### Cambios en el archivo app.js:
<ol>
  <li> Creamos arreglo const listaAmigos=[]; para contener los nombre de todos los amigos que son ingresados por el usuario para el sorteo. </li>
  <li> Declaramos como const la variable inputAmigo y la asociamos con el botón input con id=”amigo” dado en el html y obtemos:</li>
    
  ``` const inputAmigo=document.getElementById("amigo");```
  <li>Declaramos las variables: ullistaAmigos y ulResultado como const y las asociamos con la lista  desordenada "ul" que se usa para agrupar los elementos "li" que son los ítems de la lista), identificado por el id=listaAmigos. Lo mismo hacemos con la lista identificada por el id=resultado, así obtenemos: </li>
  
```const ullistaAmigos=document.getElementById("listaAmigos");```

```const ulResultado=document.getElementById("resultado");```

  <li>Luego creamos la función agregar amigo según las indicación del id=”agregarAmigo” del html, asociado al botón Añadir.
  <ul>
    <li>Utilizamos el comando “if” que mediante una alerta se indique que debe ingresar un nombre si el input es vacío.
      
  **if (inputAmigo.value!=="") {listaAmigos.push(inputAmigo.value);} else{ alert("Debe ingresar un nombre");}** </li>
    <li>Se agrega un nuevo elemento a la lista de amigos mediante el comando:
    
  **ullistaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`**  </li>
    <li>luego se vacia el campo de entrada para poder ingresar otro nombre con el comando:
    
  **inputAmigo.value="";**   </li>
  </ul>  
 </li>
  <li> Para poder reiniciar el sorteo se creo el botón “Reiniciar Sorteo” y se creó la función reiniciarAmigo(); que básicamente reinicia todo el juego dejando en vacía la casilla de entrada, el resultado de la lista en pantalla y la lista de amigos; mediante los siguientes comandos:</li>
  
  ```ullistaAmigos.innerHTML="";```
  
```ulResultado.innerHTML="";```

```listaAmigos.length=0;```

</ol>

### Vista del resultado final del proyecto:

![Imagen final del proyecto amigo-secreto!](/amigo-secreto-GT/assets/Imagen-ProyectoF.png "Proyecto-Final-Amigo-Secreto")

