const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){
    if (txtNumber.value.length==0){
    return false;
    }//lenght==0

    if(isNaN(txtNumber.value)){
        return false;
    }//isNaN

    if(Number(txtNumber.value)<=0){
        return false;
    }//<=0

    return true;
}//validarCantidad()

btnAgregar.addEventListener("click", function (event){
    event.preventDefault();
        txtNombre.style.border="";
        txtNumber.style.border="";
        alertValidaciones.innerHTML="";
        alertValidacionesTexto.style.display="none";
//Validar el nombre del producto.    
    if(txtNombre.value.length<3){
        txtNombre.style.border="solid red medium";
        alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto.<br/>";
        alertValidaciones.style.display="block";
        //return false;
    }//if length<3

//Validar la cantidad.    
if(! validarCantidad()){
    txtNumber.style.border="solid red medium";
    alertValidacionesTexto.innerHTML="La <strong>Cantidad</strong> no es correcta.<br/>";
    alertValidaciones.style.display="block";
}//! validarCantidad

}); //btnAgregar.addEventListener
// evento blur es cuando un campo pierde el foco, se sale del campo.
textNombre.addEventListener("blur", function(event){
    txtNombre.vaue = txtNombre.value.trim();
}); //txtNombre.addEventListener