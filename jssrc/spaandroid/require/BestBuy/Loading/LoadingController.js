define(function() {
    var controller = require("BestBuy/Loading/userLoadingController");
    var actions = require("BestBuy/Loading/LoadingControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});