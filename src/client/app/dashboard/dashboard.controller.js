(function() {
    'use strict';

    console.log('load controller');

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    console.log('load controller1');

    Dashboard.$inject = ['$state', 'dataservice', 'logger'];

    console.log('load controller 2');
    function Dashboard($state, dataservice, logger) {
        var vm = this;
        vm.customers = [];
        vm.gotoCustomer = gotoCustomer;
        vm.title = 'Dashboard';

        console.log('dashboard controller');

        activate();

        function activate() {
            return getCustomers().then(function() {
                logger.info('Activated Dashboard 123');
            });
        }

        function getCustomers() {
            return dataservice.getCustomers().then(function(data) {
                vm.customers = data;
                return vm.customers;
            });
        }

        function gotoCustomer(c) {
            $state.go('customer.detail', {id: c.id});
        }
    }
})();
