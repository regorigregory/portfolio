class QuickSorter extends Sorter{
    static paramsObject = undefined;
    static cb = undefined;
    static async sortArray(arr, callback){
        var lo = 0;
        var hi = arr.length-1;
        QuickSorter.cb = callback;
        QuickSorter.paramsObject = QuickSorter.getParamsObject(1,2,"scan", arr);
        await QuickSorter.quickSort(arr, lo, hi);
        await QuickSorter.sendFeedback(1, 1, "done");

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

        await QuickSorter.sendFeedback(high, high, "reset");

        await QuickSorter.sendFeedback(high, high, "pivot");

        for(var j = low; j<high; j++){
            await QuickSorter.sendFeedback(j, j, "scan");


                if(arr[j]<=pivot){
                    i++;
                    await QuickSorter.sendFeedback(i, j, "swappable");
                    await QuickSorter.sendFeedback(i, j, "swapped");
                    await QuickSorter.sendFeedback(i, j, "scan");
                    QuickSorter.swap(i, j, arr);
                
            }



        }
        i++;
        await QuickSorter.sendFeedback(i, j, "swappable");
        await QuickSorter.sendFeedback(i, j, "swapped");

        QuickSorter.swap(i, high, arr);
        await QuickSorter.sendFeedback(high, high, "init");

        return i;
    }

    static async sendFeedback(i, j, action){
        QuickSorter.paramsObject.action = action;
        QuickSorter.paramsObject.i = i;
        QuickSorter.paramsObject.j = j;
        QuickSorter.cb(QuickSorter.paramsObject);
        await QuickSorter.sleepWell(QuickSorter.speed);

    }
}