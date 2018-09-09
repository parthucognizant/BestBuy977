define({
    onNavigate: function(data) {
        kony.print("Products>> Entented into Products onNavigate");
        this.view.BBHeader.flxSearchIsVisible = false;
        controllerReference = this;
        this.productName = data[1].name;
        this.applyBindings(data[0]);
    },
    applyBindings: function(data) {
        this.view.preShow = this.productsPreshow.bind(this, data);
        this.view.BBHeader.flxBackOnClick = this.moveBack.bind(this);
    },
    productsPreshow: function(data) {
        var productsData = data && data !== "back" ? data : offlineProducts;
        if (productsData && productsData.opstatus === 0 && productsData.productsList && productsData.productsList.length > 0) {
            this.setProductsData(productsData.productsList);
            kony.print("Products>> Products data::" + JSON.stringify(productsData.productsList));
        } else {
            this.view.lblResults.text = "No results for " + this.productName;
            this.view.segProducts.setData([]);
        }
    },
    setProductsData: function(data) {
        var productsData = [];
        for (var i in data) {
            var record = {
                "flxSaleBanner": {
                    "isVisible": (data[i].onSale === "true" || data[i].onSale === true) ? true : false
                },
                "imgArrow": {
                    "src": "icon_chevron_right.png",
                    "isVisible": true
                },
                "imgProduct": {
                    "src": data[i].productImage,
                    "isVisible": true
                },
                "lblPrice": {
                    "text": data[i].onSale ? "$ " + data[i].salePrice : "$ " + data[i].regularPrice,
                    "skin": data[i].onSale ? "sknLblRed130" : "sknLblBlack130"
                },
                "lblProductName": {
                    "text": data[i].name
                },
                "lblRating": {
                    "text": data[i].customerReviewAverage
                },
                "lblSaleBanner": {
                    "text": "!!! ON SALE !!!"
                }
            };
            productsData.push(record);
        }
        this.view.lblResults.text = "Category : " + this.productName;
        this.view.segProducts.setData(productsData);
    },
    moveBack: function() {
        var homeNavigation = new kony.mvc.Navigation("frmHome");
        homeNavigation.navigate("back");
    }
});