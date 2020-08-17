class UIHandler{
    static instance = undefined;
    
    stageMaxWidth = 1024;

    sortableHTMLClasses = {
        untouched:"bg-primary",
        touched:"bg-warning",
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
        stageDiv.innerHTML = "";
        for(var i=0; i<array.length; i++){
            var cookedDiv = this.getDivElement(array[i], array.length);
            stageDiv.appendChild(cookedDiv);
        }

    }

    getDivElement(number, nElements){
        var me = this;
        var divBeingCooked = document.createElement("div");
        divBeingCooked.classList.add(me.sortableHTMLClasses.untouched);
        divBeingCooked.innerHTML = number;
        divBeingCooked.style.height = number*5+"px";
        divBeingCooked.style.width = me.stageMaxWidth/nElements+"px";
        divBeingCooked.style.overflow = "hidden";
        divBeingCooked.style.border = "1px solid black";

        return divBeingCooked;
    }

}




