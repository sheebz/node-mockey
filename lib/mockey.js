(function (module) {
    var request = require('request'),
        qs = require('qs');

    module.exports = {
        configureService:function (config, callbackFn) {

            var self = this,
                parms = qs.stringify(config);

            request('http://127.0.0.1:8080/config/service?' + parms,
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
        getServiceDefinitions:function (params, callbackFn) {
            var self = this;

            request('http://127.0.0.1:8080/definitions?' + qs.stringify(params),
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
        setPlan:function (params, callbackFn) {
            var self = this;
            params.action = 'set_plan';
            params.type = 'json';

            request('http://127.0.0.1:8080/plan/setup?' + qs.stringify(params),
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
        deletePlan:function (params, callbackFn) {
            var self = this;
            params.action = 'delete_plan';
            params.type = 'json';

            request('http://127.0.0.1:8080/plan/setup?' + qs.stringify(params),
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
        savePlan:function (params, callbackFn) {
            var self = this;
            params.action = 'save_plan';
            params.type = 'json';

            request('http://127.0.0.1:8080/plan/setup?' + qs.stringify(params),
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
        }
    };
}(module));
