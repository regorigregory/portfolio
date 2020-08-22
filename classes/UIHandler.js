class UIHandler{
    static instance = undefined;
    
    constructor(config){
        this.config = config;
    }
    
    static getInstance(){
        if(UIHandler.instance == undefined){
            UIHandler.instance = new UIHandler();
        }
        return UIHandler.instance;
    }
    initMainStage(){
        var stageDiv = document.getElementById(this.config.stageDivID);
        var newDivs = []
        var arrayRef = this.config.randomArray;
        stageDiv.innerHTML = "";
        for(var i=0; i<arrayRef.length; i++){
            var cookedDiv = this.getDivElement(arrayRef[i]);
            stageDiv.appendChild(cookedDiv);
            newDivs.push(cookedDiv);
        }
        this.currentDivs = newDivs;
        return newDivs;

    }

    getDivElement(number){
        var cnf = this.config;
        var nElements = cnf.randomArray.length;
        var divBeingCooked = document.createElement("div");

        divBeingCooked.classList.add(cnf.sortableHTMLClasses.untouched);
        divBeingCooked.innerHTML = number;
        divBeingCooked.style.height = number*cnf.columnHeightMultiplier+"px";
        divBeingCooked.style.width = cnf.stageWidth/nElements+"px";
        divBeingCooked.style["overflow"] = "hidden";
        divBeingCooked.style["padding"] = "0px";
        divBeingCooked.style["text-align"] = "center";


        divBeingCooked.style["text-overflow"] = "ellipsis";
        divBeingCooked.style.border = "1px solid white";

        return divBeingCooked;
    }

    swapUIUpdate(params){
        var cnf = this.config;
        var sortableElements = this.currentDivs;
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

    cleanAndAddClass(element, newClass){
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

    getMeId(){
        selectedSorter = selectableAlgorithms[this.id];
        console.log(this.id);
    }

}




