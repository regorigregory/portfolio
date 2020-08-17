var implementableFunction = function(){throw new Error("Unsupported operation!")}

class Sorter {
    constructor(){
        this.sorted=false;
        
    }
    static sortArray(arr){
        implementableFunction();
    }
    static swap(a,b,arr){
        var temp = arr[b];
        arr[b] = arr[a];
        arr[a] = temp;
    }
 
}