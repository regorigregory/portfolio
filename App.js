var stageID = "mainStage";

class App{

}

var ctrlr       = Controller.getInstance();
var testArray   = ctrlr.getRandomArray();
var UIhndlr     = UIHandler.getInstance();

UIhndlr.initMainStage(stageID, testArray);