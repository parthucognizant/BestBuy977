define("flxProducts", function() {
    return function(controller) {
        var flxProducts = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxProducts",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "sknFlxWhiteBGBlackBorder",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxProducts.setDefaultUnit(kony.flex.DP);
        var flxSaleBanner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSaleBanner",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxBlueBG",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSaleBanner.setDefaultUnit(kony.flex.DP);
        var lblSaleBanner = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblSaleBanner",
            "isVisible": true,
            "skin": "sknLblRed120",
            "text": "!!! ON SALE!!!",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxSaleBanner.add(lblSaleBanner);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgProduct = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "imgProduct",
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
        flxImage.add(imgProduct);
        var flxDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "27%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "73%",
            "zIndex": 1
        }, {}, {});
        flxDetails.setDefaultUnit(kony.flex.DP);
        var lblProductName = new kony.ui.Label({
            "id": "lblProductName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblBlack130",
            "text": "Label",
            "textStyle": {},
            "top": "5dp",
            "width": "85%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblPrice = new kony.ui.Label({
            "id": "lblPrice",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblRed130",
            "text": "Label",
            "textStyle": {},
            "top": "5dp",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblRating = new kony.ui.Label({
            "id": "lblRating",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblBlack130",
            "text": "Label",
            "textStyle": {},
            "top": "5dp",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxDetails.add(lblProductName, lblPrice, lblRating);
        var imgArrow = new kony.ui.Image2({
            "height": "35dp",
            "id": "imgArrow",
            "isVisible": true,
            "right": "5dp",
            "skin": "slImage",
            "src": "icon_chevron_right.png",
            "top": "44dp",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMain.add(flxImage, flxDetails, imgArrow);
        flxProducts.add(flxSaleBanner, flxMain);
        return flxProducts;
    }
})