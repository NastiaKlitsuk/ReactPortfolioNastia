import items from './portfolio-items.json';

class DataManager{  
    instance = null;
    constructor() {
        if(!instance){
              instance = this;
        }

        return instance;
      }

      getProtfolioItems(){
        return {portfolioItems: items};
    }
}

export default DataManager;