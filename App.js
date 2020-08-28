var config = {
    stageDivID : "mainStage",
    stageWidth : 1024,
    baseSpeed : 1000,
    baseSpeedDivisor : 100,
    columnHeightMultiplier : 5,
    selectedSorter : BubbleSorter,
    selectableAlgorithms : {
        bubbleSelector: BubbleSorter,
        mergeSelector: MergeSorter,
        quickSelector: QuickSorter,
        heapSelector: HeapSorter},
    sortableHTMLClasses : {
        init:"bg-primary",
        scan:"bg-secondary",
        swappable:"bg-danger",
        swapped:"bg-secondary"
    },
    newArrayElementTriggerID : "getMeNewArray",
    doSortingElementID : "doSorting",
    randomArraySize: 20,
    randomArray : Controller.getRandomArray(20)
}

var UIhndlr = UIHandler.configure(config);
UIhndlr.initMainStage();
var sortableElements = UIhndlr.currentDivs;
/*
var actualSpeed = config.baseSpeed/config.baseSpeedDivisor;


var testArray   = Controller.getRandomArray(numberOfElements);

var randomArray = Controller.getRandomArray(numberOfElements);


selectedSorter.speed = actualSpeed;


var callBackFunction = function(params){
    
    var newClass = sortableHTMLClasses[params.action];
    var cleanClass = sortableHTMLClasses.init;
 
    if(params.action=="swapped"){
        swapUIUpdate(params, sortableElements);
      }
    cleanAndAddClass(sortableElements[params.i], newClass);
    cleanAndAddClass(sortableElements[params.j], newClass);


    return params;
}


var algSelectorElements = document.getElementsByClassName(algSelectorClass);
var newArrayElementTriggerElement = document.getElementById(newArrayElementTriggerID);
newArrayElementTriggerElement.addEventListener("click", ()=>{
    randomArray = Controller.getRandomArray();
    sortableElements = UIhndlr.initMainStage(stageID, randomArray);

});

var doSortingElement = document.getElementById(doSortingElementID);
    doSortingElement.addEventListener("click", ()=>{
        console.log("Sorting has been triggered.");
    })


var getMeId = function(){
    selectedSorter = selectableAlgorithms[this.id];
    console.log(this.id);
}

for (var i =0; i<algSelectorElements.length; i++){
    var currentElement = algSelectorElements[i];
    console.log(currentElement.id);
    currentElement.addEventListener("click", getMeId);
}


//selectedSorter.sortArray(randomArray, callBackFunction)
var randArray = Controller.getRandomArray(5);
MergeSorter.sortArray(randArray);*/
