'use strict';

DashboardController.$inject = ['GithubStatusService'];
function DashboardController(gh) {
    var _this = this;
    _this.github = '';
    gh.getStatus().then(function(res) {
        console.log(res);
        _this.github = res.data.response;
    });
}

// angular.module('dashboard').controller('dashboardController', DashboardController);

module.exports = DashboardController;
