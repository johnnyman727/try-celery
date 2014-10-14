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

var celery = new Celery("YOUR_API_KEY");

celery.request("orders",function(err,body){
    console.log(err);
    console.log(body);
});
