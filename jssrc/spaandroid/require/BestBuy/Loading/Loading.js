define(function() {
    return function(controller) {
        var Loading = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Loading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxBlockBG",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        Loading.setDefaultUnit(kony.flex.DP);
        var flxLoaing = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "120dp",
            "id": "flxLoaing",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox",
            "width": "160dp",
            "zIndex": 10
        }, {}, {});
        flxLoaing.setDefaultUnit(kony.flex.DP);
        var imgLoading = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "60dp",
            "id": "imgLoading",
            "isVisible": true,
            "skin": "slImage",
            "src": "loader.gif",
            "width": "60dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblLoading = new kony.ui.Label({
            "bottom": "0dp",
            "centerX": "50%",
            "id": "lblLoading",
            "isVisible": true,
            "left": "23dp",
            "skin": "sknLblBlack120Calibri",
            "text": "Loading...",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxLoaing.add(imgLoading, lblLoading);
        Loading.add(flxLoaing);
        return Loading;
    }
})