var config = {
    stageDivID : "mainStage",
    stageWidth : 1024,
    baseSpeed : 1000,
    baseSpeedDivisor : 100,
    columnHeightMultiplier : 7,
    selectedSorter : QuickSorter,
    selectableAlgorithms : {
        bubbleSelector: BubbleSorter,
        mergeSelector: MergeSorter,
        quickSelector: QuickSorter,
        heapSelector: HeapSorter},
    sortableHTMLClasses : {
        init:"bg-secondary",
        scan:"bg-primary",
        swappable:"bg-danger",
        swapped:"bg-secondary",
        pivot:"bg-warning"

    },
    newArrayElementTriggerID : "getMeNewArray",
    doSortingElementID : "doSorting",
    arraySizeSelectorID: "arraySizeSelector",
    arraySizeSelectorIndicatorID: "arraySizeSelectorIndicator",
    sortingSpeedSelectorID:"sortingSpeedSelector",
    sortingSpeedSelectorIndicatorID:"sortingSpeedIndicator",
    randomArraySize: 20,
    randomArray : Controller.getRandomArray(20)
}

var UIhndlr = UIHandler.configure(config);
UIhndlr.initMainStage();
var sortableElements = UIhndlr.currentDivs;