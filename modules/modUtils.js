function isNetworkAvailable() {
  return kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
}

function showLoading(loadingMessage) {
  kony.print("Util>> showLoading");
  loadingMessage = loadingMessage || "Loading";
  kony.application.showLoadingScreen("", loadingMessage, constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
}

function dismissLoading() {
  kony.application.dismissLoadingScreen();
  kony.print("Util>> dismiss  Loading");
}

function initializeMF(){
  if(isNetworkAvailable()){
    MF.MFObject = new kony.sdk();
    MF.MFObject.init(MF.APP.appKey,MF.APP.appSecret,MF.APP.serviceUrl,function(response){
      MF.isMFInitialized = true;
      kony.print("MF INIT>> Initialization successful::"+JSON.stringify(response));
    },function(error){
      kony.print("MF INIT>> Initialization failure::"+JSON.stringify(error));
    });
  }else{
    kony.print("MF INIT>> Network not availeble");
  }
}

function uncaughtExceptionHandler(exceptionObject) {
  kony.print("Util>> Unhandled Exception:" + JSON.stringify(exceptionObject));
  kony.print("Util>> Unhandled Exception without stringify:" + exceptionObject);
}

function isThinClient(){
  var deviceInf0 = kony.os.deviceInfo();
  kony.print("Util>> Name of client::"+deviceInf0.name);
  if(deviceInf0.name === "thinclient"){
    return true;
  }
  return false;
}