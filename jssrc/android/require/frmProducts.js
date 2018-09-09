define("frmProducts", function() {
    return function(controller) {
        function addWidgetsfrmProducts() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
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
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
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
            var lblResults = new kony.ui.Label({
                "height": "6%",
                "id": "lblResults",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLblBlack120Calibri",
                "text": "Category: ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1%",
                "width": "94%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segProducts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgArrow": "icon_chevron_right.png",
                    "imgProduct": "bestbuy.png",
                    "lblPrice": "Label",
                    "lblProductName": "Label",
                    "lblRating": "Label",
                    "lblSaleBanner": "!!! ON SALE!!!"
                }],
                "groupCells": false,
                "height": "80%",
                "id": "segProducts",
                "isVisible": true,
                "left": "3%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxProducts",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "1%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDetails": "flxDetails",
                    "flxImage": "flxImage",
                    "flxMain": "flxMain",
                    "flxProducts": "flxProducts",
                    "flxSaleBanner": "flxSaleBanner",
                    "imgArrow": "imgArrow",
                    "imgProduct": "imgProduct",
                    "lblPrice": "lblPrice",
                    "lblProductName": "lblProductName",
                    "lblRating": "lblRating",
                    "lblSaleBanner": "lblSaleBanner"
                },
                "width": "94%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMain.add(flxFormHeader, lblResults, segProducts);
            var flxLoadingindicator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoadingindicator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxLoadingindicator.setDefaultUnit(kony.flex.DP);
            var Loading = new BestBuy.Loading({
                "clipBounds": true,
                "height": "100%",
                "id": "Loading",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "sknFlxBlockBG",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxLoadingindicator.add(Loading);
            this.add(flxMain, flxLoadingindicator);
        };
        return [{
            "addWidgets": addWidgetsfrmProducts,
            "enabledForIdleTimeout": false,
            "id": "frmProducts",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFormBackgroundBlue"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});