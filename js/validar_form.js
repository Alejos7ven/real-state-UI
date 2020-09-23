$(document).ready(function () {
    
    $("#sgnup").validate({
        rules:{
            nombre:{required:true,lettersonly:true},
            dir:"required",
            tlf:"digits",
            persona_r:{required:true,lettersonly:true},
            interes:"required",
            tipo_e:"required",
            psw:{required:true,minlength:8,alphanumeric:true},
            c_psw:{required:true,equalTo:"#psw"}
        },
        messages:{
            nombre:{required:"Introduce un nombre válido.",lettersonly:"El nombre solo contiene letras."},
            dir:"Introduce una dirección",
            tlf:"Solo puede contener números.",
            persona_r:{required:"Introduce un nombre válido.",lettersonly:"El nombre solo contiene letras."},
            interes:"Selecciona al menos uno.",
            tipo_e:"Selecciona el tipo de empresa.",
            psw:{required:"Introduce una contraseña.",minlength:"Al menos 8 caracteres",alphanumeric:"Solo carácteres alfanuméricos."},
            c_psw:{required:"Confirma tu contraseña.",equalTo:"Las contraseñas NO coinciden."}
        },
        errorPlacement:function(error,element){//agregar mensaje error de los radio y checkbox al final
            if (element.is(":radio")||element.is(":checkbox")) {
                error.appendTo(element.parent());
            } else{
                error.insertAfter(element);
            }
        }
    });

    $("#sgnin").validate({
        rules:{
            num_c:{required:true,digits:true},
            pass:{required:true,alphanumeric:true}
        },
        messages:{
            num_c:{required:"introduce un número de cuenta válido",digits:"introduce un número de cuenta válido"},
            pass:{required:"introduce una contraseña válida",alphanumeric:"introduce una contraseña válida"}
        }
    });

    $("#poner_venta").validate({
        rules:{
            titulo:"required",
            dir:"required",
            descrip:"required",
            total:{required:true,number:true},
            cuotas:"required",
            tipo_im:"required",
            otro_tipo:{required:true,lettersonly:true} 
        },
        messages:{
            titulo:"Introduce un titulo válido.",
            dir:"Introduce una dirección válida.",
            descrip:"Introduce una descripción válida.",
            total:{required:"Introduce un monto válido.",number:"Introduce solo números."},
            cuotas:"Selecciona un plan de cuotas.",
            tipo_im:"Selecciona un tipo de inmueble.",
            otro_tipo:{required:"Introduce un tipo de inmueble válido",lettersonly:"El nombre solo contiene letras."} 
        }

    });

    $("#agg_emp").validate({
        rules:{
            nro:{required:true,digits:true},
            labor:"required"
        },
        messages:{
            nro:{required:"Introduzca un número válido.",digits:"Solo digitos."},
            labor:"Introduzca la labor del empleado."
        }
    });

    $("#asig").validate({
        rules:{
            cod_emp:"required",
            cod_inm:"required"
        },
        messages:{
            cod_emp:"Seleccione un empleado.",
            cod_inm:"Seleccione un inmueble."
        }
    });

    $("#form_cita").validate({
        rules:{
            fec:"required",
            hor:"required"
        },
        messages:{
            fec:"Selecciona una fecha.",
            hor:"Selecciona una hora."
        }
    });

    $("#form_cont").validate({
        rules:{
            pago:"required",
            tarjeta:{required:true,digits:true,minlength:16,maxlength:16},
            email:{required:true, email:true},
            fecha:"required",
            plan:"required"
        },
        messages:{
            pago:"Seleccionna tu método de pago.",
            tarjeta:{required:"Introduce tu número de tarjeta",digits:"Solo digitos.",minlength:"Introduce 16 digitos.",maxlength:"Introduce 16 digitos."},
            email:{required:"Introduce tu dirección de correo electronico asociada a PayPal", email:"Introduce un email válido"},
            fecha:"Introduce fecha de vencimiento de la tarjeta",
            plan:"Selecciona tu plan de cuotas a pagar."

        },
        errorPlacement:function(error,element){//agregar mensaje error de los radio y checkbox al final
            if (element.is(":radio")||element.is(":checkbox")) {
                error.appendTo(element.parent());
            } else{
                error.insertAfter(element);
            }
        }
    });

    $("#tipo").change(tipoCuenta); 
    $("#tipo_im").change(tipoInmueble);

    $("#paypal").click(function() {
        $("#email").css("display","block").val("");
        $("#email_l").css("display","block"); 
        
        $("#tarjeta").css("display","none").val("");
        $("#tarjeta_l").css("display","none"); 

        $("#fecha").css("display","none").val("");
       $("#fecha_l").css("display","none"); 
       $("#email").focus();
    });

    $("#master").click(function() {
        $("#email").css("display","none").val("");
        $("#email_l").css("display","none"); 
        
        $("#tarjeta").css("display","block").val("");
        $("#tarjeta_l").css("display","block"); 

        $("#fecha").css("display","block").val("");
       $("#fecha_l").css("display","block"); 
       $("#tarjeta").focus();
    });

    $("#visa").click(function() {
        $("#email").css("display","none").val("");
        $("#email_l").css("display","none"); 
        
        $("#tarjeta").css("display","block").val("");
        $("#tarjeta_l").css("display","block"); 

        $("#fecha").css("display","block").val("");
        $("#fecha_l").css("display","block"); 
        $("#tarjeta").focus();

    }); 
});

function tipoCuenta(){
    if($(this).val()=="empresa"){
       $(".responsable").css("display", "block");
       $(".intereses").hide();
       $("#tipo_e").css("display","block");
       $("#label_tipo").css("display","block");
       $("#label_interes").css("display","none");
    }else{
       $(".intereses").show();
       $("#tipo_e").css("display","none");
       $("#label_tipo").css("display","none");
       $("#label_interes").css("display","block");
       $(".responsable").css("display", "none");
    }
}
function tipoInmueble() {
    if($(this).val()=="otro"){
        $("#otro_tipo").css("display","block");
     }else{
        $("#otro_tipo").css("display", "none");
     }
}