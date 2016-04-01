# promise-factory
Seamlessly create promises.

```js
var promise = require("promise-factory");

return promise.create((fulfill, reject) => {
    try {
        //do something
        fulfill();
    } catch (err) {
        reject(err);
    }
});
```
