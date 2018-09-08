define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    },
    showLoading(message,view,visible,callBack){
      if(isThinClient()){
        this.view.lblLoading.text = message || "Loading...";
        view.setVisibility(visible);
        callBack();
        kony.print("Loading>> Loading message and visiblility::"+message+" and "+visible);
      }else{
        if(visible)
          showLoading(message);
        else
          dismissLoading();
        kony.print("Loading>> Loading message::"+message);
      }
    }
  };
});