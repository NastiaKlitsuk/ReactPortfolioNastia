class DataManager{  
    instance = null;
    constructor() {
        if(!instance){
              instance = this;
        }

        return instance;
      }

      getProtfolioItems(){
        let path = "protfolio-items.json";
    }
}