class BubbleSorter extends Sorter{
    static sortArray(arr){

        for (var i=0; i<arr.length; i++){

            for(var j = 0; j<arr.length-i; j++){
                if (arr[j]>arr[j+1]){
                    BubbleSorter.swap(j,j+1,arr);
                }
            }
        }
    }
    
}