//app.controller.js
(function(){
    'use strict';

    angular.module('app.categorias.controller',[

    ]).controller('categoriasListCtrl', categoriasListCtrl); //nombre con el que se va a identificar en la aplicacion

    function categoriasListCtrl() { //Ctrl es controlador, Lista de usuarios
        this.usuarios = [    //Scope = puente vista-logica, $scope = mala practica se usa this.usuarios
          {nombre: 'Gustavo'},
          {nombre: 'Samuel'},
          {nombre: 'David'},
          {nombre: 'Sara'},
          {apellido: 'Quintero'},
          {apellido: 'Burbano'},
          {apellido: 'Quintero'},
          {apellido: 'Loaiza'}
        ];
    }

})();
