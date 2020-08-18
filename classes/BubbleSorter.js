class BubbleSorter extends Sorter{

    static sortArray(arr, callback){
        var paramsObject = BubbleSorter.getParamsObject(0,0, "init", arr);

        var results = undefined;

        for (var i=0; i<arr.length; i++){
            for(var j = 0; j<arr.length-i-1; j++){

                paramsObject.i = j;
                paramsObject.j = j+1;
                paramsObject.action = "scan"

                results = await callback(paramsObject)
                if (arr[j]>arr[j+1]){

                    paramsObject.action = "swappable";
                    results = await callback(paramsObject);

                    BubbleSorter.swap(j,j+1,arr);
                    paramsObject.action = "swapped";

                    results = await callback(paramsObject);

                }
            }
        }
    }
    
}