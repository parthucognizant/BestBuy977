define({ 
  onNavigate : function(data) {
    kony.print("Products>> Entented into Products onNavigate");
    this.view.BBHeader.flxSearchIsVisible = false;
    controllerReference = this;
    this.productName = data[1].name;
    this.applyBindings(data[0]);
  },
  applyBindings : function(data){
    this.view.preShow = this.productsPreshow.bind(this, data);
    this.view.postShow = this.animateSegment.bind(this);
    this.view.BBHeader.flxBackOnClick = this.moveBack.bind(this);
    this.view.segProducts.onRowClick = this.onSegmentRowClick.bind(this);
  },
  productsPreshow : function(data){
    var productsData = data && data !== "back"? data:offlineProducts;
    if(productsData && productsData.opstatus === 0 && productsData.productsList && productsData.productsList.length > 0){
      this.setProductsData(productsData.productsList);
      kony.print("Products>> Products data::"+JSON.stringify(productsData.productsList));
    }else{
      this.view.lblResults.text = "No results for "+this.productName;
      this.view.segProducts.setData([]);
    }
  },
  setProductsData : function(data){
    var productsData = [];
    for(var i in data){
      var record = {
        "flxSaleBanner": {"isVisible":(data[i].onSale === "true" ||data[i].onSale === true) ? true : false},
        "imgArrow": {"src":"icon_chevron_right.png","isVisible":true},
        "imgProduct": {"src":data[i].productImage,"isVisible":true},
        "lblPrice": {"text":data[i].onSale ? "$ "+data[i].salePrice : "$ "+data[i].regularPrice, "skin":data[i].onSale ? "sknLblRed130" : "sknLblBlack130"},
        "lblProductName": {"text":data[i].name},
        "lblRating": {"text":data[i].customerReviewAverage},
        "lblSaleBanner" : {"text" : "!!! ON SALE !!!"},
        "id" : data[i].sku,
        "desc" : data[i].shortDescription
      };
      productsData.push(record);
    }
    this.view.lblResults.text = "Category : "+this.productName;
    this.view.segProducts.setData(productsData);
  },
  moveBack : function(){
    var homeNavigation = new kony.mvc.Navigation("frmHome");
    homeNavigation.navigate("back");
  },
  onSegmentRowClick : function(){
    var selectedData = this.view.segProducts.selectedRowItems;
    kony.print("Products>> selected data on rowclick::"+JSON.stringify(selectedData));
    var details = {
      "productName" : selectedData[0].lblProductName.text,
      "price" : selectedData[0].lblPrice.text,
      "rating" : selectedData[0].lblRating.text,
      "onSale" : selectedData[0].flxSaleBanner.isVisible,
      "id" : selectedData[0].id,
      "description" : selectedData[0].desc,
      "image" : selectedData[0].imgProduct.src,
    };
    var detailsNavigation = new kony.mvc.Navigation("frmProductDetails");
    detailsNavigation.navigate(details);
  },
  animateSegment : function(){
    var transformDefA = kony.ui.makeAffineTransform();
    transformDefA.scale(0, 0);
    var transformDefB = kony.ui.makeAffineTransform();
    transformDefB.scale(1, 1);
    var transformDef = kony.ui.createAnimation(
      {"0":{"transform":transformDefA,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
       "100":{"transform":transformDefB,"stepConfig":{"timingFunction":kony.anim.LINEAR}}});
    var animationConfig = {
      duration: 0.4,
      fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    var animationDefObject={definition:transformDef,config:animationConfig};
    this.view.segProducts.setAnimations({visible:animationDefObject});
  },
});