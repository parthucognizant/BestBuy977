define({
    onNavigate: function(data) {
        kony.print("Categories>> Entented into category onNavigate");
        this.view.BBHeader.flxBackIsVisible = (data && data === "back") ? true : false;
        this.getCategories();
        this.view.postShow = this.animateSegment.bind(this);
    },
    getCategories: function() {
        try {
            kony.timer.cancel("gettingVategories");
        } catch (e) {
            kony.print("Categories>> Exception ins timer::" + e);
        }
        if (isNetworkAvailable() && MF.isMFInitialized) {
            showLoading();
            kony.print("Categories>> Serive name::" + MF.integrationService);
            kony.print("Categories>> Operation name::" + MF.operations[0]);
            var integrationObj = MF.MFObject.getIntegrationService(MF.integrationService);
            var data = {
                "catId": "cat00000"
            };
            integrationObj.invokeOperation(MF.operations[0], "", data, this.getCategoriesSuccess, this.getCategoriesFailure);
        } else {
            kony.print("Categories>> Network not availeble or MF is not initialized");
            kony.timer.schedule("gettingVategories", this.getCategories, 2, false);
        }
    },
    getCategoriesSuccess: function(success) {
        dismissLoading();
        kony.print("Categories>> Categories success Response::" + JSON.stringify(success));
        this.setCategoriesData(success.subCategories);
    },
    getCategoriesFailure: function(error) {
        dismissLoading();
        kony.print("Categories>> Categories failure Response::" + JSON.stringify(error));
    },
    setCategoriesData: function(data) {
        var categoriesData = [];
        for (var i in data) {
            var record = {
                "lblCategoryTitle": {
                    "text": data[i].subCategoryName
                },
                "imgArrow": {
                    "src": "icon_chevron_right.png",
                    "isVisible": true
                },
                "id": data[i].subCategoryId
            };
            categoriesData.push(record);
        }
        this.view.segCategories.setData(categoriesData);
    },
    animateSegment: function() {
        var transformDefA = kony.ui.makeAffineTransform();
        transformDefA.translate(250, 0);
        var transformDefB = kony.ui.makeAffineTransform();
        transformDefB.translate(0, 0);
        var transformDef = kony.ui.createAnimation({
            "0": {
                "transform": transformDefA,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            },
            "100": {
                "transform": transformDefB,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        });
        var animationConfig = {
            duration: 1,
            fillMode: kony.anim.FILL_MODE_FORWARDS
        };
        var animationDefObject = {
            definition: transformDef,
            config: animationConfig
        };
        this.view.segCategories.setAnimations({
            visible: animationDefObject
        });
    }
});