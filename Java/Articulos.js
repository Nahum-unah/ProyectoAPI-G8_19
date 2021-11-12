var urlGetArticulos = 'http://127.0.0.7:90/G8_19/controller/articulos.php?op=GetArticulos';
var urlPostArticulo = 'http://127.0.0.7:90/G8_19/controller/articulos.php?op=InsertArticulos';
var urlPutArticulos = '';
var urlPostArticulos = '';
//NOTA: Siempre que vaya a probar el api rest abrir el xampp
$(document).ready(function () {

    CargarArticulos();
});

function CargarArticulos() {
    $.ajax({
        url: urlGetArticulos,
        type: 'GET',
        datatype: 'JSON',
        success: function(response){
            var MiItems = response;
            var Valores = ''; //deposito los valores de response

            for(i=0;i<MiItems.length; i++){
                Valores +=   '<tr>'+
                '<td>'+MiItems[i].ID+'</td>'+
                '<td>'+MiItems[i].DESCRIPCION+'</td>'+
                '<td>'+MiItems[i].UNIDAD+'</td>'+
                '<td>'+MiItems[i].COSTO+'</td>'+
                '<td>'+MiItems[i].PRECIO+'</td>'+
                '<td>'+MiItems[i].APLICA_ISV+'</td>'+
                '<td>'+MiItems[i].PORCENTAJE_ISV+'</td>'+
                '<td>'+MiItems[i].ESTADO+'</td>'+
                '<td>'+MiItems[i].ID_SOCIO+'</td>'+
            '</tr>';
            $('.articulos').html(Valores);
            }
        }

    })
};

function AgregarArticulo(){
    var datosArticulos = {
        ID: $('#ID').val(),
        DESCRIPCION:$('#DESCRIPCION').val(),
        UNIDAD:$('#UNIDAD').val(),
        COSTO:$('#COSTO').val(),
        PRECIO:$('#PRECIO').val(),
        APLICA_ISV:$('#APLICA_ISV').val(),
        PORCENTAJE_ISV:$('#PORCENTAJE_ISV').val(),
        ESTADO: $('#ESTADO').val(),
        ID_SOCIO:$('#ID_SOCIO').val() //checar esta parte si funciona NOTA
    };
    var datosArticulosjson=JSON.stringify(datosArticulos);

    $.ajax({
        url: urlPostArticulo,
        type:'POST',
        data: datosArticulosjson,
        datatype: 'JSON',
        contenType:'aplication/json',
        success: function(response){
            console.log(response);

        }
    });
    alert("Agrado con éxito");

}; //no lleva el ;
