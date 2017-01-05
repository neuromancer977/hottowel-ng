(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('Admin', Admin);

    Admin.$inject = ['logger', 'dataservice'];

    /* @ngInject */
    function Admin(logger, dataservice) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Admin';
        vm.name = 'Lopo';

        vm.people = [];

        activate();

        function activate() {
            logger.info('Activated Admin View');
            dataservice.getPeople().then(function(data){
                vm.people = data;
            });
            // vm.people = dataservice.getPeople();
        }

        // function getData() {
        //     return [{name: 'luca'}, {name:'nicola'}, {name:'carlo'}, {name:'donata'}];
        // }
    }
})();