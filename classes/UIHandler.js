class UIHandler{
    static instance = undefined;
    
    constructor(config){
        this.config = undefined;
    }
    static configure(cnf){
        var inst = UIHandler.getInstance();
        inst.config = cnf;
        inst.bindGenerateNewArray();
        inst.bindSort();
        inst.bindSizeSelector();
        inst.bindSpeedSelector();
        return inst;
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

    }

    getDivElement(number){
        var cnf = this.config;
        var nElements = cnf.randomArray.length;
        var divBeingCooked = document.createElement("div");

        divBeingCooked.classList.add(cnf.sortableHTMLClasses.init);
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
        if(params.i!=params.j){
            try{
                var me = UIHandler.getInstance();
                var cnf = me.config;
                var sortableElements = me.currentDivs;
                var whatElement = sortableElements[params.i];
                var whatValue = params.arr[params.i];
                var whatHeight = whatValue*cnf.columnHeightMultiplier;
            
                var toElement =  sortableElements[params.j];
                var toValue =  params.arr[params.j];
                var toHeight = toValue*cnf.columnHeightMultiplier;
            
                whatElement.innerHTML = toValue;
                whatElement.style.height=toHeight+"px";
            
                toElement.innerHTML = whatValue;
                toElement.style.height=whatHeight+"px";
            }catch(e){
                console.log(`Index.i: ${params.i}, Index.j: ${params.j}`);
            }  
        }
    }

    cleanAndAddClass(element, newClass){
        try{
        element.classList = [];
        element.classList.add(newClass);
        } catch(e){
            console.log("There has been an error in the cleanAndAddClass function.")
            console.log(newClass);
            console.log(element);
        }
    }

    callBackFunction(params){

        var me = UIHandler.getInstance();

        var newClass = me.config.sortableHTMLClasses[params.action];
        var sortableElements = me.currentDivs;

        if(params.action == "pivot"){
            var pivotElement = sortableElements[params.j];
            me.cleanAndAddClass(pivotElement, newClass);

        } else {
            if(params.action=="swapped"){
                me.swapUIUpdate(params, sortableElements);
            }

            var elementA = sortableElements[params.i];
            var elementB = sortableElements[params.j];
    
            if(elementA && elementB){
                me.cleanAndAddClass(elementA, newClass);
                me.cleanAndAddClass(elementB, newClass);
            } else {
                console.log(`Non-existent-elements: Index.i: ${params.i}, Index.j: ${params.j}`);
            }
        }
        return params;
    }


    bindGenerateNewArray(){
        var el = document.getElementById(this.config.newArrayElementTriggerID);
        var me =this;
        el.addEventListener("click", ()=>{
            var arraySize = me.config.randomArraySize;
            me.config.randomArray = Controller.getRandomArray(arraySize);
            me.initMainStage();
        });
    }
    bindSort(){
        var el = document.getElementById(this.config.doSortingElementID);
        var me = this;
        el.addEventListener("click", function(){
        me.config.selectedSorter.sortArray(me.config.randomArray, me.callBackFunction);

        });

    }
    bindSizeSelector(){
        var me = UIHandler.getInstance();
        var cnf = me.config;
        var indicator = document.getElementById(cnf.arraySizeSelectorIndicatorID);
        var slider = document.getElementById(cnf.arraySizeSelectorID);
        var fun = function(){
            var newValue = slider.value;
            indicator.innerHTML = newValue;
            cnf.randomArraySize = newValue;
            cnf.randomArray = Controller.getRandomArray(newValue);
            me.initMainStage();
        };
        //slider.addEventListener("change", fun);
        slider.addEventListener("input", fun);

    }

    bindSpeedSelector(){
        var me = UIHandler.getInstance();
        var cnf = me.config;
        var slider = document.getElementById(cnf.sortingSpeedSelectorID);
        var indicator = document.getElementById(cnf.sortingSpeedSelectorIndicatorID);
        var fun = function(){
            var newValue = slider.value;
            indicator.innerHTML = newValue;
            cnf.baseSpeedDivisor = newValue*newValue;
            cnf.selectedSorter.speed = cnf.baseSpeed / cnf.baseSpeedDivisor;
        };
        //slider.addEventListener("change", fun);
        slider.addEventListener("input", fun);

    }

}




