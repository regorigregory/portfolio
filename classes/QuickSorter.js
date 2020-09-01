class QuickSorter extends Sorter{
    static paramsObject = undefined;
    static cb = undefined;
    static async sortArray(arr, callback){

        QuickSorter.paramsObject = QuickSorter.getParamsObject(0,0, "init", arr);
        var lo = 0;
        var hi = arr.length-1;
        QuickSorter.cb = callback;
        QuickSorter.quickSort(arr, lo, hi);
    }

    static async quickSort(arr, low, high){

        if(low<high){

            var pivot = await QuickSorter.partition(arr, low, high);

            await QuickSorter.quickSort(arr, low, pivot-1);
            await QuickSorter.quickSort(arr, pivot+1, high);
        }
    }
    
    static async partition(arr, low, high){
        
        var pivot = arr[high];
        var i = low-1;

        QuickSorter.sendFeedback(high, high, "pivot");

        for(var j = low; j<high; j++){


                if(arr[j]<=pivot){
                    i++;
                    QuickSorter.swap(i, j, arr);
            }

        }
        QuickSorter.swap(i+1, high, arr);
        QuickSorter.sendFeedback(high, high, "init");

        return i+1;
    }

    static async sendFeedback(i, j, action){
        QuickSorter.paramsObject.action = action;
        QuickSorter.paramsObject.i = i;
        QuickSorter.paramsObject.j = j;
        QuickSorter.cb(QuickSorter.paramsObject);
        await QuickSorter.sleepWell(QuickSorter.speed);

    }
}