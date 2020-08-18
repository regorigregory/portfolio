class Controller{

    static defaultArraySize = 20;
    static defaultMaximumEntry = 100;
    static defaultMinimumEntry = 10;

    static setSorter(sorterInstance){
        Controller.sorter = sorterInstance;
    }
    static setSortableArray(sortableArray){
        Controller.sortableArray = sortableArray;
    }

    static getRandomArray(size){
        if (size==null) {
            size=Controller.defaultArraySize;
        }
        var randomArray = []
        while(randomArray.length<size){
            var tempRandom = Controller.getRandomInteger();
            if(randomArray.indexOf(tempRandom)==-1){
                randomArray.push(tempRandom);
            }
        } 
        return randomArray;
    }
    static getRandomInteger(max){
        if (max == undefined){
            max = Controller.defaultMaximumEntry;
        }
        return Math.floor(Math.random()*Math.abs(max))+Controller.defaultMinimumEntry;

    }
}


