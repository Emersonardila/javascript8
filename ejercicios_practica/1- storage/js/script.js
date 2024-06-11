"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá realizar los siguientes enunciados todos en este
    script de javascript. Cada enunciado agrega una funcionalidad
    extra al programa.
/*

/* 1 - Enunciado

- Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.

*/
let userlogeado=document.getElementById("usuarioLogeado");
let emailLogeado=document.getElementById("emailLogeado");

let usuario=document.getElementById("usuario");
let email=document.getElementById("email");

let logout=document.querySelector("logout");
let login=document.getElementById("login");

let boton=document.getElementById("btnIngresar");
let boton2=document.getElementById("btnSalir");

let valorU="";
let valorE="";
boton.onclick=()=>
{
   
    valorU = usuario.value;
    valorE =  email.value;

    localStorage.setItem("usuario",valorU);
    localStorage.setItem("email",valorE);

    userlogeado.textContent=valorU;
    
    emailLogeado.textContent=valorE;

    login.classList.add("hidden");
    logout.classList.remove("hidden");
    
};
boton2.onclick=()=>{

    localStorage.clear;
    location.reload();

}


    

/* 2 - Enunciado
 Debera capturar el evento "onclick" del boton "Ingresar"
y leer los datos ingresados en "usuario" y "email".
- Tome esos datos y almacenelo en memoria permanente del explorador.
- Deberá completar las etiquetas <p> de id "usuarioLogeado" y "emailLogeado"
con los datos almacenados en memoria, a fin de darle la bienvenida al usuario logeado.
*/

/* 3 - Enunciado

- Debera capturar el evento "onclick" del boton "Salir". Cuando este
botón sea presionado deberá borrar de memoria las variables de este programa.
- Luego deberá refrescar la página (desde javascript, con window.location.reload()) y al
volverse a cargar debería aparecer nuevamente la sección de bienvenida
ya que no debería haber más datos en memoria cargados.

*/
