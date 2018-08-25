define(function() {
    var controller = require("BestBuy/BBHeader/userBBHeaderController");
    var actions = require("BestBuy/BBHeader/BBHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "flxBackIsVisible", function(val) {
            this.view.flxback.isVisible = val;
        });
        defineGetter(this, "flxBackIsVisible", function() {
            return this.view.flxback.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_flxBackOnClick_d269fce6953d4a06a7b46bdc369e3583 = function() {
        if (this.flxBackOnClick) {
            this.flxBackOnClick.apply(this, arguments);
        }
    }
    controller.AS_flxSearchOnClick_jacfbaabaeb24ecf8ae1c614e479ce6d = function() {
        if (this.flxSearchOnClick) {
            this.flxSearchOnClick.apply(this, arguments);
        }
    }
    return controller;
});