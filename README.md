# the-promise-factory
Seamlessly create promises.

```js
var promise = require("the-promise-factory");

return promise.create((fulfill, reject) => {
    try {
        //do something
        fulfill();
    } catch (err) {
        reject(err);
    }
});
```
