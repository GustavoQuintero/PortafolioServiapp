//app.directivas.js
(function(){
    'use strict';

    angular.module('app.categorias.directivas',[


    ]).directive('categorias' , categorias);

    function categorias(){
      return{
          scope:{}, //scope es del alcance
          templateUrl:'app/categorias/lista.html', //trae el trozo de codigo de html que quiero que cargue
          controller: 'categoriasListCtrl',
          controllerAs: 'vm' //apodo del controlador
      }
    }

})();
