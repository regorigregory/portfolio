var stageID = "mainStage";

class App{

}
sortableHTMLClasses = {
    init:"bg-primary",
    scan:"bg-warning",
    swappable:"bg-danger",
    swapped:"bg-success"
}
var testArray   = Controller.getRandomArray();
var UIhndlr     = UIHandler.getInstance();

var sortableElements = UIhndlr.initMainStage(stageID, testArray);
var randomArray = Controller.getRandomArray(20);
var prevParams = undefined;
var callBackFunction = async function(params){
    
    var newClass = sortableHTMLClasses[params.action];
    var cleanClass = sortableHTMLClasses.init;

    if (prevParams !=undefined){
        //debugger;
        cleanAndAddClass(sortableElements[prevParams.i], cleanClass);
        cleanAndAddClass(sortableElements[prevParams.j], cleanClass);
    }
    window.setTimeout(() => {  console.log("I am gonna sleep for a bit!"); }, 2000);
    cleanAndAddClass(sortableElements[params.i], newClass);
    cleanAndAddClass(sortableElements[params.j], newClass);

    prevParams = params;
    return 0;
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


BubbleSorter.sortArray(randomArray, callBackFunction)
