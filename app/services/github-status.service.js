'use strict';

GithubStatusService.$inject = ['$http'];
function GithubStatusService($http) {
    var _this = this;
    _this.getStatus = function getStatus() {
        return $http.get('http://safetypass.dev/api/checkCustomerId/dev2-211dd964-55b5-11e5-8275-90489af8fc48555');
    }
}

// angular.module('dashboard').service('GithubStatusService', GithubStatusService);

module.exports = GithubStatusService;
