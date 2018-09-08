define("flxCategories", function() {
    return function(controller) {
        var flxCategories = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxCategories",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxWhite",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCategories.setDefaultUnit(kony.flex.DP);
        var lblCategoryTitle = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCategoryTitle",
            "isVisible": true,
            "left": "2%",
            "skin": "sknLblBlack120Calibri",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "85%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgArrow = new kony.ui.Image2({
            "height": "100%",
            "id": "imgArrow",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "icon_chevron_right.png",
            "top": "0dp",
            "width": "18%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCategories.add(lblCategoryTitle, imgArrow);
        return flxCategories;
    }
})