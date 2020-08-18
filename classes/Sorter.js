var implementableFunction = function(){throw new Error("Unsupported operation!")}

class Sorter {
    constructor(){
        this.sorted=false;
        
    }
    static sortArray(arr, callback){
        implementableFunction();
    }
    static swap(a,b,arr){
        var temp = arr[b];
        arr[b] = arr[a];
        arr[a] = temp;
    }

    static getParamsObject(i, j, action, arr){
        var paramsObject = {
            i : i,
            j:j,
            sortEvent : action,
            pointerToArray : arr
        }
        return paramsObject;

    }
 
}