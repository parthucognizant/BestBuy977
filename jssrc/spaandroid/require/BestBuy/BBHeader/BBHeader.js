define(function() {
    return function(controller) {
        var BBHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "70dp",
            "id": "BBHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        BBHeader.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "98%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxback = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxback",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "onClick": controller.AS_flxBackOnClick_d269fce6953d4a06a7b46bdc369e3583,
            "skin": "slFbox",
            "top": "10%",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxback.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2({
            "height": "100%",
            "id": "imgBack",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "ic_menu_back.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxback.add(imgBack);
        var flxLogo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxLogo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "12%",
            "skin": "slFbox",
            "top": "0%",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxLogo.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2({
            "height": "100%",
            "id": "imgLogo",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "bestbuy.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLogo.add(imgLogo);
        var flxSearch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_flxSearchOnClick_jacfbaabaeb24ecf8ae1c614e479ce6d,
            "right": "2%",
            "skin": "slFbox",
            "top": "10%",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxSearch.setDefaultUnit(kony.flex.DP);
        var imgSearch = new kony.ui.Image2({
            "height": "100%",
            "id": "imgSearch",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "search.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSearch.add(imgSearch);
        flxHeader.add(flxback, flxLogo, flxSearch);
        var flxDivider = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxDivider",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "flxBlueBackground",
            "top": "98%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDivider.setDefaultUnit(kony.flex.DP);
        flxDivider.add();
        BBHeader.add(flxHeader, flxDivider);
        return BBHeader;
    }
})