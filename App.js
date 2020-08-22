var stageID = "mainStage";
var stageWidth = 1024;
var blockHeightMultiplier = 5;
var baseSpeed = 1000;
var baseSpeedDivisor = 100;
var actualSpeed = baseSpeed/baseSpeedDivisor;
var numberOfElements = 30;
var selectedSorter = BubbleSorter;
var selectableAlgorithms = {
    bubbleSelector: BubbleSorter,
    mergeSelector: MergeSorter,
    quickSelector: QuickSorter,
    heapSelector: HeapSorter}

class App{

}
sortableHTMLClasses = {
    init:"bg-primary",
    scan:"bg-secondary",
    swappable:"bg-danger",
    swapped:"bg-secondary"
}
var testArray   = Controller.getRandomArray(numberOfElements);
var UIhndlr     = UIHandler.getInstance();

var randomArray = Controller.getRandomArray(numberOfElements);
var sortableElements = UIhndlr.initMainStage(stageID, randomArray);


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

var swapUIUpdate = function(params, sortableElements){
    var whatElement = sortableElements[params.i];
    var whatValue = params.arr[params.i];
    var whatHeight = whatValue*blockHeightMultiplier;

    var toElement =  sortableElements[params.j];
    var toValue =  params.arr[params.j];
    var toHeight = toValue*blockHeightMultiplier;

    whatElement.innerHTML = toValue;
    whatElement.style.height=toHeight+"px";

    toElement.innerHTML = whatValue;
    toElement.style.height=whatHeight+"px";

}

var cleanAndAddClass = function(element, newClass){
    try{
    element.classList = [];
    element.classList.add(newClass);
    } catch(e){
        debugger;
        console.log("There has been an error in the cleanAndAddClass function.")
        console.log(newClass);
        console.log(element);
    }
}
var algSelectorClass = "alg-selector";
var algSelectorElements = document.getElementsByClassName(algSelectorClass);
var newArrayElementTriggerID = "getMeNewArray";
var newArrayElementTriggerElement = document.getElementById(newArrayElementTriggerID);
newArrayElementTriggerElement.addEventListener("click", ()=>{
    randomArray = Controller.getRandomArray();
    sortableElements = UIhndlr.initMainStage(stageID, randomArray);

});


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
MergeSorter.sortArray(randArray);
