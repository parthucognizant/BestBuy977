define("frmProductDetails", function() {
    return function(controller) {
        function addWidgetsfrmProductDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxFormHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11%",
                "id": "flxFormHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFormHeader.setDefaultUnit(kony.flex.DP);
            var BBHeader = new BestBuy.BBHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "BBHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxFormHeader.add(BBHeader);
            var flxTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "39%",
                "id": "flxTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "11%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTop.setDefaultUnit(kony.flex.DP);
            var imgProduct = new kony.ui.Image2({
                "height": "100dp",
                "id": "imgProduct",
                "isVisible": true,
                "left": "3dp",
                "skin": "slImage",
                "src": "bestbuy.png",
                "top": "3dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 0
                },
                "clipBounds": true,
                "height": "65%",
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "32%",
                "skin": "slFbox",
                "top": "7dp",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var lblProductName = new kony.ui.Label({
                "id": "lblProductName",
                "isVisible": true,
                "left": "6dp",
                "maxNumberOfLines": 4,
                "skin": "sknLblBlack110",
                "text": "Name",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
                "top": "2dp",
                "width": "100%",
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
                "left": "6dp",
                "skin": "sknLblBlack110",
                "text": "price",
                "textStyle": {},
                "top": "3dp",
                "width": "100%",
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
                "left": "6dp",
                "skin": "sknLblBlack110",
                "text": "Rating",
                "textStyle": {},
                "top": "3dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var imgRating = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgRating",
                "isVisible": true,
                "left": "3dp",
                "skin": "slImage",
                "src": "ratings_star_5.png",
                "top": "3dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDetails.add(lblProductName, lblPrice, lblRating, imgRating);
            var flxScrlDesc = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "25%",
                "horizontalScrollIndicator": true,
                "id": "flxScrlDesc",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "67%",
                "verticalScrollIndicator": true,
                "width": "94%",
                "zIndex": 1
            }, {}, {});
            flxScrlDesc.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "id": "lblDescription",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 3,
                "skin": "sknLblBlack100",
                "text": "Description",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxScrlDesc.add(lblDescription);
            flxTop.add(imgProduct, flxDetails, flxScrlDesc);
            flxMain.add(flxFormHeader, flxTop);
            this.add(flxMain);
        };
        return [{
            "addWidgets": addWidgetsfrmProductDetails,
            "enabledForIdleTimeout": false,
            "id": "frmProductDetails",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFormBackgroundBlue"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});