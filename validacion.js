var formulario = document.getElementsByName('formulario')[0],
elementos = formulario.elements,
boton = document.getElementById('btn');

var validarNombre = function(e){
if (formulario.nombre.value == 0){
    alert("Complete el nombre");
    e.preventDefault();

}
};

var validarApellido = function(e){
    if (formulario.apellido.value == 0){
        alert("Complete el apellido");
        e.preventDefault();
    
    }
    };
var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Complete el email");
            e.preventDefault();
        
        }
        };

var validarMensaje = function(e){
            if (formulario.mensaje.value == 0){
                alert("Complete el campo mensaje");
                e.preventDefault();
            
            }
            };
                       
var validarRadio = function(e){
if (formulario.conoce[0].checked == true || 
    formulario.conoce[1].checked == true){
                } else{
                    alert("Complete cómo nos conoció");
                    e.preventDefault();
                }
            };

var validar = function(e){
validarNombre(e);
validarApellido(e);
validarEmail(e);
validarMensaje(e);
validarRadio(e);

};
formulario.addEventListener("submit", validar);

