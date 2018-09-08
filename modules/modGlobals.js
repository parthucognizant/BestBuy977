var MF = {
  APP : {
    appKey : "4c1dc2424594aa8e852b2beacf650923",
    appSecret : "6e69f947028c7d335b1b9837c7a6ddb8",
    serviceUrl : "https://100020316.auth.konycloud.com/appconfig"
  },
  isMFInitialized : false,
  MFObject : null,
  integrationService : "BestBuy790",
  operations : ["CategoriesList"]
};

var offlineCategories = {};
var categoriesList = [];