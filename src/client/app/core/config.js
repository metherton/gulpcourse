(function() {
    'use strict';

    console.log('loading core');

    var core = angular.module('app.core');

    core.config(toastrConfig);

    console.log('loading core1');

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[GulpPatterns Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Gulp Patterns Demo',
        imageBasePath: '/images/photos/',
        unknownPersonImageSource: 'unknown_person.jpg'
    };

    console.log('loading core 2');

    core.value('config', config);

    core.config(configure);

    console.log('loading core 3');

    configure.$inject = ['$compileProvider', '$logProvider',
                         'routerHelperProvider', 'exceptionHandlerProvider'];
    /* @ngInject */
    function configure ($compileProvider, $logProvider,
                         routerHelperProvider, exceptionHandlerProvider) {
        $compileProvider.debugInfoEnabled(false);

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        configureStateHelper();

        ////////////////

        console.log('loading core 4');

        function configureStateHelper() {
            var resolveAlways = {
                ready: ready
            };

            ready.$inject = ['dataservice'];
            /* @ngInject */
            function ready(dataservice) {
                return dataservice.ready();
            }
            console.log('loading core 5');
            routerHelperProvider.configure({
                docTitle: 'Gulp: ',
                resolveAlways: resolveAlways
            });
        }
    }
})();
