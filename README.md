# node-mockey
node-mockey provides a nodejs client API for [Mockey](https://github.com/clafonta/Mockey); a useful webservice mocking application.  You can use node-mockey to turn specific scenerios on or off as well as set other configuration values from within a node environment.  This can be extremely useful for development and testing complex applications.

# Installation 
## Get Mockey
Get latest version of [Mockey](https://github.com/clafonta/Mockey), then run
`java -jar Mockey.jar -t false `
to start Mockey Service

## Install node-mockey from npm
`npm install node-mockey` 

# Usage
Configure mockey service to return an invalid auth response - maybe as part of a feature test.
```javascript
            mockey.configureService({
                serviceName:'Auth',
                scenerioName:'invalid',
                serviceResponseType:'static'
                //serviceId:0,
                //scenerioId:0,
                hangTime:100,
                //transientState:true,

            }, function (response) {
                assert.equal(response.serviceName, 'Auth');
                
                //do your testing here...
                
            });
```

Coming Soon.