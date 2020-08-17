class Controller{
    static instance = undefined;

    defaultArraySize = 20;
    defaultMaximumEntry = 100;
    defaultMinimumEntry = 10;
    constructor(){
        this.sorter = null;
        this.sortableArray=null;
    }
    
    static getInstance(){
        if(Controller.instance == undefined){
            Controller.instance = new Controller();
        }
        return Controller.instance;
    }

    setSorter(sorterInstance){
        this.sorter = sorterInstance;
    }
    setSortableArray(sortableArray){
        this.sortableArray = sortableArray;
    }

    getRandomArray(size){
        if (size==null) {
            size=this.defaultArraySize;
        }
        var randomArray = []
        while(randomArray.length<size){
            var tempRandom = this.getRandomInteger();
            if(randomArray.indexOf(tempRandom)==-1){
                randomArray.push(tempRandom);
            }
        } 
        return randomArray;
    }
    getRandomInteger(max){
        if (max == undefined){
            max = this.defaultMaximumEntry;
        }
        return Math.floor(Math.random()*Math.abs(max))+this.defaultMinimumEntry;

    }
}


