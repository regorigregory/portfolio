class BubbleSorter extends Sorter{
    static async sortArray(arr, callback){
        var paramsObject = BubbleSorter.getParamsObject(0,0, "init", arr);

        var results = undefined;

        for (var i=0; i<arr.length; i++){
            for(var j = 0; j<arr.length-i-1; j++){

                paramsObject.i = j;
                paramsObject.j = j+1;
                paramsObject.action = "scan"

                callback(paramsObject);
                await BubbleSorter.sleepWell(BubbleSorter.speed);

                if (arr[j]>arr[j+1]){

                    paramsObject.action = "swappable";
                    callback(paramsObject);
                    await BubbleSorter.sleepWell(BubbleSorter.speed);

                    paramsObject.action = "swapped";
                    callback(paramsObject);
                    await BubbleSorter.sleepWell(BubbleSorter.speed);
                    BubbleSorter.swap(j,j+1,arr);

                }
                paramsObject.action = "init"
                callback(paramsObject);
                await BubbleSorter.sleepWell(BubbleSorter.speed);
            }
        }
    }
    
}