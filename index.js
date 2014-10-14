var request = require("request");
var dotty = require("dotty");
var _ = require("underscore");

var Celery = function(config){
    
    var celery = {};

    celery.config = (function(config){

        if(typeof(config) === "string"){
            var config = {
                "key":config
            };
        }else if(typeof(config) == "undefined"){
            var config = {};
        }
        
        return _.defaults(config,{
            "baseurl": 'https://api.trycelery.com',
            "version": 1,
        });

    })(config);

    celery.options = function(options){

        if(typeof(options) === "string"){
            var options = {
                "url":options
            };
        }else if(typeof(options) == "undefined"){
            var options = {};
        }

        if(dotty.exists(options,"url")){
            options.url = (options.url.match(/^\//)) ? options.url.substring(1,options.url.length) : options.url;
            options.url = celery.config.baseurl + "/v" + celery.config.version + "/"  + options.url + "?access_token=" + celery.config.key;
        }

        return _.defaults(options,{
            "url": celery.config.baseurl + "/v" + celery.config.version + "/",
            "method": "GET",
            "headers":{
                "Content-Type": "application/json"
            },
        });

    };

    celery.request = function(options,callback){
        options = celery.options(options);
        console.log('options', options)
        request(options, function(error,response,body){
            if(error){
                callback(error, body);
            }else if(response && dotty.exists(response, "statusCode")){
                callback(false, body, response.statusCode);
            }else{
                callback("no response status code", body);
            }
        });
        
    }
    
    return celery;

};

module.exports = Celery;