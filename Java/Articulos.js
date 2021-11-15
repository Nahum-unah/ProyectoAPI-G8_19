var urlGetArticulos = 'http://127.0.0.7:90/G8_19/controller/articulos.php?op=GetArticulos';
var urlPostArticulo = 'http://127.0.0.7:90/G8_19/controller/articulos.php?op=InsertArticulos';
var urlPutArticulos = 'http://127.0.0.7:90/G8_19/controller/articulos.php?op=Update';
var urlDeleteArticulos = 'http://127.0.0.7:90/G8_19/controller/articulos.php?op=Delete';
var urlGetUno = 'http://127.0.0.7:90/G8_19/controller/articulos.php?op=GetArticuloID'; //hacer un textbox de busqueda...
//NOTA: Siempre que vaya a probar el api rest abrir el xampp
$(document).ready(function () {

    CargarArticulos();


});

function CargarArticulos() {//funciona, pero el cundo llamo la funcion cargar no carga
    $.ajax({
        url: urlGetArticulos,
        type: 'GET',
        datatype: 'JSON',
        success: function (response) {
            var MiItems = response;
            var Valores = ''; //deposito los valores de response

            for (i = 0; i < MiItems.length; i++) {
                Valores += '<tr>' +
                    '<td>' + MiItems[i].ID + '</td>' +
                    '<td>' + MiItems[i].DESCRIPCION + '</td>' +
                    '<td>' + MiItems[i].UNIDAD + '</td>' +
                    '<td>' + MiItems[i].COSTO + '</td>' +
                    '<td>' + MiItems[i].PRECIO + '</td>' +
                    '<td>' + MiItems[i].APLICA_ISV + '</td>' +
                    '<td>' + MiItems[i].PORCENTAJE_ISV + '</td>' +
                    '<td>' + MiItems[i].ESTADO + '</td>' +
                    '<td>' + MiItems[i].ID_SOCIO + '</td>' +
                    '<td >' +
                    '<Button class="btn btn-warning" onclick="Cargar(' + MiItems[i].ID + ')">Editar</Button>' +
                    '</td>' +
                    '<td >' +
                    '<Button class="btn btn-danger" onclick="EliminarArticulo(' + MiItems[i].ID + ')">Eliminar</Button>' +
                    '</td>' +
                    '</tr>';
                $('.articulos').html(Valores);
            };
        }

    })
};

function AgregarArticulo() {//funciona
    var datosArticulos = {
        ID: $('#ID').val(),
        DESCRIPCION: $('#DESCRIPCION').val(),
        UNIDAD: $('#UNIDAD').val(),
        COSTO: $('#COSTO').val(),
        PRECIO: $('#PRECIO').val(),
        APLICA_ISV: $('#APLICA_ISV').val(),
        PORCENTAJE_ISV: $('#PORCENTAJE_ISV').val(),
        ESTADO: $('#ESTADO').val(),
        ID_SOCIO: $('#ID_SOCIO').val() //checar esta parte si funciona NOTA
    };
    var datosArticulosjson = JSON.stringify(datosArticulos);

    $.ajax({
        url: urlPostArticulo,
        type: 'POST',
        data: datosArticulosjson,
        datatype: 'JSON',
        contenType: 'application/json',
        success: function (response) {
            console.log(response);

        }
    });
    alert("Agrado con éxito");

}; //no lleva el ;
//no funciona cargar
function Cargar(ID) {//NO FUNCIONAAAAAAAAAAAA
    //esta funcion llena los textbox el htm con los datos al dar clic en el boton editar
    var datosArticulos = {
        ID: ID
    };

    var datosArticulosjson = JSON.stringify(datosArticulos);
    $.ajax({
        url: urlGetUno,
        type: 'POST',
        data: datosArticulosjson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function (response) {
            var MiItems = response;
            $('#ID').val(MiItems[0].ID);
            $('#DESCRIPCION').val(MiItems[2].DESCRIPCION);
            $('#UNIDAD').val(MiItems[3].UNIDAD);
            $('#COSTO').val(MiItems[4].COSTO);
            $('#PRECIO').val(MiItems[5].PRECIO);
            $('#APLICA_ISV').val(MiItems[6].APLICA_ISV);
            $('#PORCENTAJE_ISV').val(MiItems[7], PORCENTAJE_ISV);
            $('#ESTADO').val(MiItems[8].ESTADO);
            $('#ID_SOCIO').val(MiItems[9].ID_SOCIO);
            var btnactualizar = '<input type="submit" id="btn_actualizar" onclick="UpdateArticulos(' + MiItems[0].ID + ')"' +
                'value="Actualizar Articulo" class="btn btn-success">';

            $('.button').html(btnactualizar);
        }
    })
    alert('Funciona?')
};

function UpdateArticulos(ID) {//funciona
    var datosArticulos = {
        ID: ID,
        DESCRIPCION: $('#DESCRIPCION').val(),
        UNIDAD: $('#UNIDAD').val(),
        COSTO: $('#COSTO').val(),
        PRECIO: $('#PRECIO').val(),
        APLICA_ISV: $('#APLICA_ISV').val(),
        PORCENTAJE_ISV: $('#PORCENTAJE_ISV').val(),
        ESTADO: $('#ESTADO').val(),
        ID_SOCIO: $('#ID_SOCIO').val() //checar esta parte si funciona NOTA
    };
    var datosArticulosjson = JSON.stringify(datosArticulos);

    $.ajax({
        url: urlPutArticulos,
        type: 'POST',
        data: datosArticulosjson,
        datatype: 'JSON',
        contenType: 'application/json',
        success: function (response) {
            console.log(response);

        }
    });
    alert("Actualizado con éxito");
};

function EliminarArticulo(ID) {//NO FUNCIONA
    var datosArticulos = {
        Id: ID
    };
    var datosArticulosjson = JSON.stringify(datosArticulos);
    $.ajax({
        url: urlDeleteArticulos,
        type: 'POST',
        data: datosArticulosjson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);

        }
    });
    alert("Borrado con éxito");
};