(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('Admin', Admin);

    Admin.$inject = ['logger'];

    /* @ngInject */
    function Admin(logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Admin';
        vm.name = 'Lopo';

        vm.people = [{name: 'luca'}, {name:'nicola'}, {name:'carlo'}, {name:'donata'}];

        activate();

        function activate() {
            logger.info('Activated Admin View');
        }
    }
})();