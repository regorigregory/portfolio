class MergeSorter extends Sorter{

    static sortArray(arr, callback){
       
        MergeSorter.mergeSort(arr, callback, 0, arr.length)
    }
    static mergeSort(arr, callback, startIndex, endIndex){
        if(endIndex-startIndex>1){
            var middleIndex = Math.floor((startIndex+endIndex)/2);
            this.mergeSort(arr, callback, startIndex, middleIndex);
            this.mergeSort(arr, callback, middleIndex, endIndex);
            this.merge(startIndex, middleIndex, endIndex, arr, callback);
        }

    }
    static merge(startIndex, middleIndex, endIndex, arr, callback){
        var left = arr.slice(startIndex, middleIndex);
        var right = arr.slice(middleIndex, endIndex);

        var leftCounter = 0;
        var leftSize = left.length;
        var mainCounter = startIndex;
        var rightCounter = 0;
        var rightSize = right.length;

        
        while (leftCounter<leftSize && rightCounter<rightSize){

            var leftTemp = left[leftCounter];
            var rightTemp = right[rightCounter];

            if(leftTemp>rightTemp){
                arr[mainCounter] = leftTemp;
                leftCounter++;
                mainCounter++;
            } else {
                arr[mainCounter] = rightTemp;
                rightCounter++;
                mainCounter++;
            }
            var remainingArray = undefined;
            var remainingCounter = undefined;
            if(rightCounter<rightSize){
                remainingArray = right;
                remainingCounter = rightCounter;
            } else {
                remainingArray = left;
                remainingCounter = leftCounter;
            }
            while(mainCounter<endIndex){
                arr[mainCounter] = remainingArray[remainingCounter];
                mainCounter++;
                remainingCounter++;
            }

        }

        }


    }