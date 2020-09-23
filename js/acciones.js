$(document).ready(function() {
    $(".float_form").hide();
    $("input#tipo_im").hide();

    $("#join").click(desplegarMenu);

    $("#mostrar_venta").click(desplegarMenu);

    $(".mostrar_venta").click(desplegarMenu);

     $(".mostrar_cita").click(desplegarMenu);
        
     $("#mostrar_cita").click(desplegarMenu);

     $("#volver").click(desplegarMenu);
        
     $(".mostrar_contrato").click(desplegarMenu);

     $("#mostrar_contrato").click(desplegarMenu);

     $("#ver_cont").click(desplegarMenu);

     $("#mostrar_fcita").click(desplegarMenu);

     $(".mostrar_fagg").click(desplegarMenu);
    
     $(".mostrar_asig").click(desplegarMenu);

     $("#mostrar_fcont").click(desplegarMenu);

    $("#sing_up").click(desplegarMenu);

     $("#sing_in").click(desplegarMenu);

     $("#float_a2").click(cambiarForm);

     $("#float_a1").click(cambiarForm);
    
     
     $("#pic1").click(efectoImagenes);
     $("#pic2").click(efectoImagenes);
    $("#pic3").click(efectoImagenes);

    $(".funciones").hide();

    $(".descripcion").hide();

    $(".wrapper_faq h3").toggle(mostrarFaq, ocultarFaq);
});
function desplegarMenu(){
    $(".float_form").fadeIn(500);
    $(".sing_up").css("display", "none");
    $(".sing_in").css("display", "none");
    $("#float_a2").css("text-decoration","none");
    $("#float_a1").css("text-decoration","none");
    $("#poner_venta").hide();
    $(".citas").hide();
    $(".contratos").hide();
    $(".form_cita").hide();
    $(".form_cont").hide();
    $(".float_cont").hide();
    $(".agg_emp").hide();
    $(".asig").hide();

    $(".overlay").css("display","block"); 
    $(".overlay").click( function () {
         $(".float_form").fadeOut(300);
         $(".overlay").css("display","none"); 
     });

    if ($(this).attr("id")=="mostrar_venta" || $(this).attr("class")=="mostrar_venta") {
        $("#poner_venta").show();
    }
    if ($(this).attr("id")=="mostrar_cita" || $(this).attr("class")=="mostrar_cita") {
        $(".citas").show();
    }
    if ($(this).attr("id")=="mostrar_contrato" || $(this).attr("class")=="mostrar_contrato") {
        $(".contratos").show();
    }
    if ($(this).attr("class")=="mostrar_fagg") {
        $(".agg_emp").show();
    }
    if ($(this).attr("class")=="mostrar_asig") {
        $(".asig").show();
    }
    if ($(this).attr("id")=="sing_up" ) {
        $(".sing_up").css("display", "block");
        $("#float_a1").css("text-decoration","underline");
    }
    if ($(this).attr("id")=="sing_in" ) {
        $(".sing_in").css("display", "block");
        $("#float_a2").css("text-decoration", "underline" );
    }
    if ($(this).attr("id")=="join" ) {
        $(".sing_up").css("display", "block");
        $("#float_a1").css("text-decoration", "underline" );
    }
    if ($(this).attr("id")=="mostrar_fcita" ) {
        $(".form_cita").show();
    }
    if ($(this).attr("id")=="mostrar_fcont" ) {
        $(".form_cont").show();
    }
    if ($(this).attr("id")=="ver_cont" ) {
        $(".float_cont").show();
    }
    if ($(this).attr("id")=="volver") {
        $(".contratos").show();
    }
}
function cambiarForm(){
    $("#float_a1").css("text-decoration","none");
    $("#float_a2").css("text-decoration","none");
    $(".sing_up").css("display", "none");
    $(".sing_in").css("display", "none");
    if ($(this).attr("id")=="float_a2") {
        $(".sing_in").css("display", "block");
        $("#float_a2").css("text-decoration","underline");
    }
    if ($(this).attr("id")=="float_a1") {
        $(".sing_up").css("display", "block");
        $("#float_a1").css("text-decoration","underline");
    }
}
function efectoImagenes() {
    $(".descrip").css("display", "none"); 
        $(this).animate({
            marginLeft:"50px",
            width:"300px",
            maxWidth:"300px", 
        },1500).delay(2000);
        $(this).animate({
           marginLeft:"0px",
           width:"120px",
           maxWidth:"120px", 
       },1500, function () {
        $(".descrip").css("display", "block");
        });
}
function mostrarFaq() {
    if ($(this).attr("id")=="vg") {
        $("#fvg").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fvg1") {
        $("#dvg1").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fvg2") {
        $("#dvg2").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fvg3") {
        $("#dvg3").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fvg4") {
        $("#dvg4").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fvg5") {
        $("#dvg5").fadeIn(300);
        $(this).addClass("cerrar");
    }

    if ($(this).attr("id")=="vu") {
        $("#fvu").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fvu1") {
        $("#dvu1").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fvu2") {
        $("#dvu2").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fvu3") {
        $("#dvu3").fadeIn(300);
        $(this).addClass("cerrar");
    }
    
    if ($(this).attr("id")=="ve") {
        $("#fve").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fve1") {
        $("#dve1").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fve2") {
        $("#dve2").fadeIn(300);
        $(this).addClass("cerrar");
    }

    if ($(this).attr("id")=="vr") {
        $("#fvr").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fvr1") {
        $("#dvr1").fadeIn(300);
        $(this).addClass("cerrar");
    }
    if ($(this).attr("id")=="fvr2") {
        $("#dvr2").fadeIn(300);
        $(this).addClass("cerrar");
    }
}
function ocultarFaq() {
    if ($(this).attr("id")=="vg") {
        $("#fvg").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fvg1") {
        $("#dvg1").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fvg2") {
        $("#dvg2").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fvg3") {
        $("#dvg3").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fvg4") {
        $("#dvg4").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fvg5") {
        $("#dvg5").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    
    if ($(this).attr("id")=="vu") {
        $("#fvu").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fvu1") {
        $("#dvu1").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fvu2") {
        $("#dvu2").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fvu3") {
        $("#dvu3").fadeOut(300);
        $(this).removeClass("cerrar");
    }

    if ($(this).attr("id")=="ve") {
        $("#fve").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fve1") {
        $("#dve1").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fve2") {
        $("#dve2").fadeOut(300);
        $(this).removeClass("cerrar");
    }

    if ($(this).attr("id")=="vr") {
        $("#fvr").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fvr1") {
        $("#dvr1").fadeOut(300);
        $(this).removeClass("cerrar");
    }
    if ($(this).attr("id")=="fvr2") {
        $("#dvr2").fadeOut(300);
        $(this).removeClass("cerrar");
    }
}