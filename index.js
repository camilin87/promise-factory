module.exports = {
    create: function(promiseCallback){
        return new Promise((fulfill, reject) => {
            var fulfillCallback = fulfill;
            if (!fulfillCallback){
                fulfillCallback = (result) => {};
            }

            var rejectCallback = reject;
            if (!rejectCallback){
                rejectCallback = (e) => {};
            }

            promiseCallback(fulfillCallback, rejectCallback);
        });
    }
};