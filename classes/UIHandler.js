class UIHandler{
    static instance = undefined;
    
    stageMaxWidth = 1024;

    sortableHTMLClasses = {
        untouched:"bg-primary",
        scan:"bg-warning",
        swappable:"bg-danger",
        swapped:"bg-success"
    }
    
    static getInstance(){
        if(UIHandler.instance == undefined){
            UIHandler.instance = new UIHandler();
        }
        return UIHandler.instance;
    }
    initMainStage(stageDivID, array){
        var stageDiv = document.getElementById(stageDivID);
        var newDivs = []
        stageDiv.innerHTML = "";
        for(var i=0; i<array.length; i++){
            var cookedDiv = this.getDivElement(array[i], array.length);
            stageDiv.appendChild(cookedDiv);
            newDivs.push(cookedDiv);
        }
        return newDivs;

    }

    getDivElement(number, nElements){
        var me = this;
        var divBeingCooked = document.createElement("div");
        divBeingCooked.classList.add(me.sortableHTMLClasses.untouched);
        divBeingCooked.innerHTML = number;
        divBeingCooked.style.height = number*5+"px";
        divBeingCooked.style.width = me.stageMaxWidth/nElements+"px";
        divBeingCooked.style["overflow"] = "hidden";
        divBeingCooked.style["padding"] = "0px";
        divBeingCooked.style["text-align"] = "center";


        divBeingCooked.style["text-overflow"] = "ellipsis";
        divBeingCooked.style.border = "1px solid white";

        return divBeingCooked;
    }

}




