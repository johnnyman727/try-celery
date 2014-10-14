# Celery Node.js API Libary

This is a very small API library for [Celery](www.trycelery.com), you can find the documentation [here](https://www.trycelery.com/developer). It's heavily inspired by [@reggi](https://github.com/reggi)'s [Whiplash](https://github.com/reggi/whiplash) client.

## Installation

[npmjs.org/package/try-celery](https://npmjs.org/package/try-celery)

    npm install try-celery

---

## Usage
    
    var Celery = require("try-celery");
    var celery = new Celery("YOUR_API_KEY_HERE");

---

## Parameters

The `new Celery()` object can take a couple of different argument sets.

### String

A key in the form of a `string`, like so, `version` is automatically `1`.
  
  var celery = new Celery("j54kjh83ij2h23");

### Object
  
A key in the form of a `object, like so.

  var celery = new Celery({
    "key": "j54kjh83ij2h23",
    "version": "1",
  });

--- 

## Request

The last function you'll ever need `celery.request()`. This function is very similar to the object above in terms of parameters.

  
  celery.request(options,callbacks);
  
The function takes two parameters.

### Option Parameter

#### String

If options is a string it will be the same as `options.url` see below.

#### Object

There is only one mandatory value if you use options as an object and that is `options.url`. No preceding `/` is needed when specifying a path (e.g. `orders`, `orders/originator`)
  
You can specify `options.method` and `query`.

The defaults are as follows:

  var options = {
    "method":"GET",
    "query":{},
  }

### Callbacks Parameter

The `callbacks` param is a object, which needs to contain both `success` and `error`.

### Example

  celery.request({
    "method":"DELETE",
    "url":"orders/"+id
  }, function(err, body){
    if(err) console.log(err);
    console.log(body);
  });

---

## Complete Example

The following example returns all `orders`.


  var Celery = require("try-celery");
  var celery = new Celery("j54kjh83ij2h23");
  celery.request("orders", function(err, body){
    if(err) console.log(err);
    console.log(body);
  });
