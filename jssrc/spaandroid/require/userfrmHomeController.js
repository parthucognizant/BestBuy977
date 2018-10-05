define({
    onNavigate: function(data) {
        kony.print("Categories>> Entented into category onNavigate");
        controllerReference = this;
        this.applyBindings(data);
    },
    applyBindings: function(data) {
        this.view.preShow = this.homePagePreshow.bind(this, data);
        this.view.postShow = this.animateSegment.bind(this);
        this.view.segCategories.onRowClick = this.segmentRowclick.bind(this);
        this.view.BBHeader.flxBackOnClick = this.moveBack.bind(this);
        this.view.flxLoadingindicator.onClick = function() {};
    },
    homePagePreshow: function(data) {
        kony.print("Categories>> Entented into category preshow");
        this.view.BBHeader.flxBackIsVisible = (data && data === "back") ? true : false;
        if (data !== "back") {
            this.categoryId = "cat00000";
            this.onClickData = "";
            this.catgoryExist = false;
            this.getCategories("initial");
        }
    },
    forceLayoutForm: function() {
        this.view.forceLayout();
    },
    getCategories: function(timeOfCalling) {
        try {
            kony.timer.cancel("gettingCategories");
        } catch (e) {
            kony.print("Categories>> Exception in timer::" + e);
        }
        if (timeOfCalling && timeOfCalling === "initial") this.view.Loading.showLoading("Fetching Categories...", this.view.flxLoadingindicator, true, this.forceLayoutForm);
        else this.view.Loading.showLoading("Fetching Categories...", this.view.flxLoadingindicator, false, this.forceLayoutForm);
        if (isNetworkAvailable() && MF.isMFInitialized) {
            this.view.Loading.showLoading("Fetching Categories...", this.view.flxLoadingindicator, true, this.forceLayoutForm);
            kony.print("Categories>> Serive name::" + MF.integrationService);
            kony.print("Categories>> Operation name::" + MF.operations[0]);
            var integrationObj = MF.MFObject.getIntegrationService(MF.integrationService);
            var data = {
                "catId": this.categoryId
            };
            integrationObj.invokeOperation(MF.operations[0], "", data, function(success) {
                controllerReference.getCategoriesSuccess(success, false, timeOfCalling);
            }, this.getCategoriesFailure);
        } else {
            kony.print("Categories>> Network not availeble or MF is not initialized");
            kony.timer.schedule("gettingCategories", function() {
                controllerReference.getCategories(timeOfCalling);
            }, 2, false);
        }
    },
    getCategoriesSuccess: function(success, isCallingFromBack, timeOfCalling) {
        this.view.Loading.showLoading("Fetching Categories...", this.view.flxLoadingindicator, false, this.forceLayoutForm);
        kony.print("Categories>> Categories success Response::" + JSON.stringify(success));
        if (success && success.subCategories && success.subCategories.length > 0) {
            this.catgoryExist = true;
            this.setCategoriesData(success.subCategories);
            offlineCategories[this.categoryId] = success;
            if (timeOfCalling !== "initial" && !isCallingFromBack) this.setHomePageValues();
        } else {
            this.catgoryExist = false;
            kony.print("Categories>> No subcategories in the response");
            if (timeOfCalling !== "initial" && !isCallingFromBack) this.setHomePageValues();
            if (!isCallingFromBack) this.getProducts();
        }
    },
    getCategoriesFailure: function(error) {
        this.view.Loading.showLoading("Fetching Categories...", this.view.flxLoadingindicator, false, this.forceLayoutForm);
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
    segmentRowclick: function() {
        var selectedData = this.view.segCategories.selectedRowItems;
        kony.print("Categories>> selected data on rowclick::" + JSON.stringify(selectedData));
        this.onClickData = {
            id: this.categoryId,
            name: selectedData[0].lblCategoryTitle.text
        };
        this.categoryId = selectedData[0].id;
        this.catgoryExist = false;
        this.getCategories("");
    },
    moveBack: function() {
        var prevData = categoriesList.pop();
        var id = prevData.id;
        var categoryDisplayList = offlineCategories[id];
        this.view.BBHeader.flxBackIsVisible = (categoriesList && categoriesList.length > 0) ? true : false;
        if (this.view.lblNvigation.text !== "Home") {
            this.view.lblNvigation.text = (this.view.lblNvigation.text).substring(0, this.view.lblNvigation.text.lastIndexOf("->"));
        }
        this.forceLayoutForm();
        this.getCategoriesSuccess(categoryDisplayList, true);
        delete offlineCategories[id];
    },
    setHomePageValues: function() {
        if (this.catgoryExist) {
            categoriesList.push(this.onClickData);
            this.view.BBHeader.flxBackIsVisible = (categoriesList && categoriesList.length > 0) ? true : false;
            this.view.lblNvigation.text = (categoriesList && categoriesList.length > 0) ? this.view.lblNvigation.text + "->" + categoriesList[categoriesList.length - 1].name : "Home";
            this.forceLayoutForm();
        }
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
            duration: 0.4,
            fillMode: kony.anim.FILL_MODE_FORWARDS
        };
        var animationDefObject = {
            definition: transformDef,
            config: animationConfig
        };
        this.view.segCategories.setAnimations({
            visible: animationDefObject
        });
    },
    getProducts: function() {
        if (isNetworkAvailable() && MF.isMFInitialized) {
            this.view.Loading.showLoading("Fetching Products...", this.view.flxLoadingindicator, true, this.forceLayoutForm);
            kony.print("Categories>> Serive name::" + MF.integrationService);
            kony.print("Categories>> Operation name::" + MF.operations[1]);
            var integrationObj = MF.MFObject.getIntegrationService(MF.integrationService);
            var data = {
                "catId": this.categoryId
            };
            integrationObj.invokeOperation(MF.operations[1], "", data, this.getProductsSuccess, this.getProductsFailure);
        }
    },
    getProductsSuccess: function(success) {
        this.view.Loading.showLoading("Fetching Products...", this.view.flxLoadingindicator, false, this.forceLayoutForm);
        kony.print("Categories>> Products success Response::" + JSON.stringify(success));
        offlineProducts = {};
        if (success && success.opstatus === 0 && success.productsList) {
            offlineProducts = success;
            var productNavigation = new kony.mvc.Navigation("frmProducts");
            productNavigation.navigate([success, this.onClickData]);
        }
    },
    getProductsFailure: function(error) {
        this.view.Loading.showLoading("Fetching Products...", this.view.flxLoadingindicator, false, this.forceLayoutForm);
        kony.print("Categories>> Products success Response::" + JSON.stringify(error));
    }
});