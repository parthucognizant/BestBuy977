define({
    onNavigate: function(data) {
        kony.print("Details>> Entented into Products Details onNavigate");
        this.view.BBHeader.flxSearchIsVisible = false;
        controllerReference = this;
        kony.print("Details>> data in details page is::" + JSON.stringify(data));
        this.setData(data);
    },
    setData: function(data) {
        this.view.imgProduct.src = data.image;
        this.view.lblProductName.text = data.productName;
        var sale = data.onSale === true ? "On sale!" : "";
        this.view.lblPrice.text = sale + " " + data.price;
        this.view.lblRating.isVisible = data.rating ? true : false;
        this.view.lblRating.text = "Ave review: " + data.rating;
        if (parseInt(data.rating) === 0) {
            this.view.imgRating.isVisible = false;
        } else {
            this.view.imgRating.isVisible = true;
            this.view.imgRating.src = "ratings_star_" + parseInt(data.rating) + ".png";
        }
        this.view.lblDescription.text = data.description;
    }
});