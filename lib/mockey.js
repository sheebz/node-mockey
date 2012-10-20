(function (module) {
    var request = require('request'),
        qs = require('qs');

    module.exports = {
        create:function (options) {
            return new NodeMockey(options);
        }
    };

    var NodeMockey = function (options) {
        var self = this;
        self.host = options.host || 'http://127.0.0.1:8080';

        this.configureService = function (params, callbackFn) {

            var url = self.host + '/config/service?' +  qs.stringify(params);

            request(url,
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
