(function (module) {
    var request = require('request'),
        qs = require('qs');

    module.exports = function NodeMockey(options) {
        var self = this;
        self.host = options.host || 'http://localhost:8080';

        this.configureService = function (config, callbackFn) {

            var self = this,
                parms = qs.stringify(config);

            request(self.host + '/config/service?' + parms,
                function (error, response, body) {
                    if (response && response.statusCode === 200) {
                        var temp = JSON.parse(body);
                        callbackFn && callbackFn.call(self, temp.result);
                    }
                    else {
                        console.log('error: ' + response.statusCode);
                        console.log(body);
                    }
                });
        },
            this.getServiceDefinitions = function (params, callbackFn) {
                var self = this;

                request(self.host + '/definitions?' + qs.stringify(params),
                    function (error, response, body) {
                        if (response && response.statusCode === 200) {
                            var temp = JSON.parse(body);
                            callbackFn && callbackFn.call(self, temp);
                        }
                        else {
                            console.log('error: ' + response.statusCode);
                            console.log(body);
                        }
                    });
            },
            this.setPlan = function (params, callbackFn) {
                var self = this;
                params.action = 'set_plan';
                params.type = 'json';

                request(self.host + '/plan/setup?' + qs.stringify(params),
                    function (error, response, body) {
                        if (response && response.statusCode === 200) {
                            var temp = JSON.parse(body);
                            callbackFn && callbackFn.call(self, temp);
                        }
                        else {
                            console.log('error: ' + response.statusCode);
                            console.log(body);
                        }
                    });
            },
            this.deletePlan = function (params, callbackFn) {
                var self = this;
                params.action = 'delete_plan';
                params.type = 'json';

                request(self.host + '/plan/setup?' + qs.stringify(params),
                    function (error, response, body) {
                        if (response && response.statusCode === 200) {
                            var temp = JSON.parse(body);
                            callbackFn && callbackFn.call(self, temp);
                        }
                        else {
                            console.log('error: ' + response.statusCode);
                            console.log(body);
                        }
                    });
            },
            this.savePlan = function (params, callbackFn) {
                var self = this;
                params.action = 'save_plan';
                params.type = 'json';

                request(self.host + '/plan/setup?' + qs.stringify(params),
                    function (error, response, body) {
                        if (response && response.statusCode === 200) {
                            var temp = JSON.parse(body);
                            callbackFn && callbackFn.call(self, temp);
                        }
                        else {
                            console.log('error: ' + response.statusCode);
                            console.log(body);
                        }
                    });
            };
    };
}(module));
