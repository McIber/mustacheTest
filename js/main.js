
function generaHtml(ficherojson, plantilla, iddestino){

    $.getJSON(
        ficherojson, {},
        function (productsData, textStatus, jqXHr) {
            $.get(plantilla,
                function (template, textStatus, jqXhr) {
                    var contenido = Mustache.render(template, productsData);
                    $('#'+iddestino).append(contenido);
                });
        });
}



$(document).ready(function() {
  
  generaHtml('json/datos.json','plantillas/plantilla1.mustache.html','contenedor');  
  generaHtml('json/datos2.json','plantillas/plantilla2.mustache.html','contenedor2');  
  generaHtml('json/datos3.json','plantillas/plantilla3.mustache.html','contenedor3');  

    
});