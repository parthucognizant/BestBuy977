define({
    AS_AppEvents_dc07963ebcf64ff4a853ccb4f3ce89df: function AS_AppEvents_dc07963ebcf64ff4a853ccb4f3ce89df(eventobject) {
        kony.lang.setUncaughtExceptionHandler(uncaughtExceptionHandler);
        initializeMF();
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("BestBuy.BBHeader", "BBHeader", "BBHeaderController");
        kony.application.registerMaster({
            "namespace": "BestBuy",
            "classname": "BBHeader",
            "name": "BestBuy.BBHeader"
        });
        kony.mvc.registry.add("BestBuy.Loading", "Loading", "LoadingController");
        kony.application.registerMaster({
            "namespace": "BestBuy",
            "classname": "Loading",
            "name": "BestBuy.Loading"
        });
        kony.mvc.registry.add("flxCategories", "flxCategories", "flxCategoriesController");
        kony.mvc.registry.add("flxProducts", "flxProducts", "flxProductsController");
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        kony.mvc.registry.add("frmProducts", "frmProducts", "frmProductsController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmHome").navigate();
    }
});