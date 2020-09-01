class QuickSorter extends Sorter{
    static paramsObject = undefined;
    static async sortArray(arr, callback){

        QuickSorter.paramsObject = QuickSorter.getParamsObject(0,0, "init", arr);
        var lo = 0;
        var hi = arr.length-1;
        
        QuickSorter.paramsObject.action = "pivot";
        QuickSorter.paramsObject.j = hi;
        callback(QuickSorter.paramsObject);
       
        QuickSorter.quickSort(arr, lo, hi, callback);
    }

    static async quickSort(arr, low, high, callback){
        //debugger;
        if(low<high){
            var pivot = await QuickSorter.partition(arr, low, high, callback);

            QuickSorter.paramsObject.action = "pivot";
            QuickSorter.paramsObject.j = pivot;
            callback(QuickSorter.paramsObject);

            await QuickSorter.quickSort(arr, low, pivot-1, callback);
            await QuickSorter.quickSort(arr, pivot+1, high, callback);
        }
    }

    static async partition(arr, low, high, callback){
        var pivot = arr[high];
        var i = low-1;
        for(var j = low; j<high; j++){

                QuickSorter.paramsObject.i = (i==-1) ? 0 : i;
                QuickSorter.paramsObject.j = j;
                QuickSorter.paramsObject.action = "scan"
                callback(QuickSorter.paramsObject);

                await QuickSorter.sleepWell(QuickSorter.speed);
            
                if(arr[j]<=pivot){
                    i++;
                    QuickSorter.paramsObject.i = i;

                    QuickSorter.paramsObject.action = "swappable";
                    callback(QuickSorter.paramsObject);

                    await QuickSorter.sleepWell(QuickSorter.speed);
                    
                    QuickSorter.paramsObject.action = "swapped";
                    callback(QuickSorter.paramsObject);

                    await QuickSorter.sleepWell(QuickSorter.speed);
                    QuickSorter.swap(i, j, arr);
            }

        }
        
        QuickSorter.paramsObject.i = i+1;
        QuickSorter.paramsObject.j = high;

        QuickSorter.paramsObject.action = "swappable";

        callback(QuickSorter.paramsObject);
        await QuickSorter.sleepWell(QuickSorter.speed);
        
        QuickSorter.paramsObject.action = "swapped";
        
        callback(QuickSorter.paramsObject);
        await QuickSorter.sleepWell(QuickSorter.speed);


        QuickSorter.swap(i+1, high, arr);
        return i+1;
    }
}