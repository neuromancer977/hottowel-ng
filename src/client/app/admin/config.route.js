(function () {
    'use strict';

    angular
        .module('app.admin')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun (routehelper){
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/admin',
                config: {
                    title: 'admin',
                    // MEMO: ng-controller="Admin as vm" in admin.html
                    //controller: 'Admin',
                    //controllerAs: 'vm', // vm=VIEW_MODEL as in admin.html
                    templateUrl: 'app/admin/admin.html',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin' // shown in sidebar
                    }
                }
            }
        ];
    }
})();