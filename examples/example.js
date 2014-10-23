var Celery = require("../");

/*
var celery = new Celery("helloworld");
    { key: 'helloworld',
      baseurl: 'https://api.trycelery.com/',
      version: 1 }
*/

/*
var celery = new Celery({key:"helloworld"});
    { key: 'helloworld',
      baseurl: 'https://api.trycelery.com/',
      version: 1 }
*/

var celery = new Celery("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1MjRiYTI1NzZmOWRlYTAyMDAwMDAwMGYifQ.oqNHnbpGqzHL9irWCxtELbPKicbGjGDWcIcXMxPuSo0");

celery.request("orders",function(err,body){
    console.log(err);
    console.log(body);
});
