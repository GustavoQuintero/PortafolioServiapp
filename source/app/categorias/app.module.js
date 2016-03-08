(function(){
    'use strict';

    angular.module('app.categorias.module',[
        'app.categorias.services' , //trabajar los metodos get, remove, etc
        'app.categorias.directivas' , //directivas: es donde se va a crear etiquetas similares HTML
        'app.categorias.controller' , //logica controller
        'app.categorias.route' //donde indico la ruta

    ]);

})(); //Tener cuidado con el () si no lo tiene no deja arrancar la aplicacion
