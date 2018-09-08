//startup.js file
var appConfig = {
    appId: "BestBuy977",
    appName: "BB",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.20.22.63",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: null,
    secureurl: null,
    middlewareContext: "BestBuy977"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        isMVC: true,
        responsive: true,
        retainSpaceOnHide: true,
        APILevel: 8200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: kony.appinit.getStaticContentPath() + "spaandroid/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        applicationController = require("applicationController");
        callAppMenu();
        kony.application.setApplicationInitializationEvents({
            preappinit: applicationController.AS_AppEvents_dc07963ebcf64ff4a853ccb4f3ce89df,
            init: applicationController.appInit,
            showstartupform: function() {
                var startForm = new kony.mvc.Navigation("frmHome");
                startForm.navigate();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: ["FormEntry", "Error", "Crash"]
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								