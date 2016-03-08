//app.router.js
(function(){
    'use strict';

    angular.module('app.categorias.route', [
      'app.categorias.controller'


    ])
      .config(configure);

    configure.$inject = ['$stateProvider' , '$urlRouterProvider']

    function configure($stateProvider, $urlRouterProvider){ //parametros de UI-ROUTER angular oficial -> ng-router -> SPA limitada...

      $urlRouterProvider.otherwise('/') //redirecciona al index

      $stateProvider
        .state('categorias', {
            url: '/categorias', //ruta
            views: {
              'categorias' : {
                  template:'<categorias/>' //ruta
              },
              'encabezado':{
                  template: '<encabezado/>' //ruta
              },
              'piepagina': {
                  template: '<piepagina/>' //ruta

              }
            }


        });

    };

})();
