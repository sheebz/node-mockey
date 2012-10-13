describe('mockey', function () {
    var should = require("should"),
        assert = require('assert'),
        colors = require('colors'),
        mockey = require('../index');
    describe('#configureService()', function () {

        it('should return a response', function (done) {
            this.timeout(1000);
            mockey.configureService({
                serviceName:'Auth',
                scenerioName:'invalid',
                serviceResponseType:'static'
                //serviceId:0,
                //scenerioId:0,
                //hangTime:0,
                //transientState:true,

            }, function (response) {
                assert.equal(response.serviceName, 'Auth');
                done();
            });
        });
    });
    describe('#getServiceDefinitions()', function () {

        it('should return a response', function (done) {
            this.timeout(1000);
            mockey.getServiceDefinitions({serviceName:'Auth'}, function (response) {
                should.exist(response.serviceDefinitions);
                done();
            });
        });
    });
    describe('#savePlan()', function () {

        it('should return a response', function (done) {
            this.timeout(1000);
            mockey.savePlan({service_plan_name:'planA'}, function (response) {
                should.exist(response);
                done();
            });
        });
    });
});


