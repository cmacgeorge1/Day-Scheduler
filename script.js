
var format = dateFns.format;
var setHours = dateFns.setHours;
var getHours = dateFns.getHours;

var startHour = 7;
var hoursToDisplay = 10;


$(document).ready(function(){
    // set current date & time 
    var currentDate = new Date();
    $('#currentDay').text(format(currentDate, "dddd, YYYY/MM/DD - h:mm:ss a"));
    
    // Create rows, columns, textarea, buttons
    for (let h=startHour; h<=startHour + hoursToDisplay; h++) {
        var row = createRow(currentDate, h);    
        var container = document.getElementById("container"); 
        container.appendChild(row); 
    }

});


function createRow(today, rowHour) {
    var row = document.createElement("div");    
    row.classList.add("row", "time-block");    

    // HOUR COLUMN
    var todayWithChangedHour = setHours(today, rowHour);
    var hourDisplay = format(todayWithChangedHour, "h A")  // 10:14 -> 10 AM
    var col = createCol("div", ["col-md-2", "hour"], hourDisplay); 
    row.appendChild(col);     

    // TODO COLUMN
    var todo;
    var todoAsString = localStorage.getItem("todo")
    var todoObj = JSON.parse(todoAsString)

    if (todoObj && todoObj[hourDisplay]) {
        todo = todoObj[hourDisplay];
    } else {
        todo = "";
    }

    var todayHours = getHours(today);
    var timeClass = "";

    if (todayHours < rowHour) {
        timeClass = "future";
    } else if (todayHours > rowHour) {
        timeClass = "past";
    } else {
        timeClass = "present";
    }

    col = createCol("textarea", ["col-md-8", timeClass], todo);
    row.appendChild(col);     

    // BUTTON COLUMN
    col = createCol("button", ["col-md-2", "saveBtn"], "SAVE");
    col.addEventListener("click", clickEventCallback);    

    row.appendChild(col);     

    return row
}


function createCol(tag, classes, innerText) {
    var el = document.createElement(tag);    
    el.classList.add(...classes);    
    el.innerHTML = innerText;    
    
    return el;
}

function clickEventCallback(clickEvent) {
    var parent = clickEvent.srcElement.parentElement
    var children = parent.children; 
    var childrenArr = Array.from(children); 
   
    // find will give us the first element where the predicateFunction return true
    var textarea = childrenArr.find(c => c.localName === "textarea");
    var div = childrenArr.find(c => c.localName === "div");
    
    var todo = textarea.value;
    var hour = div.innerHTML;


    var todoObj = JSON.parse(localStorage.getItem("todo")) // current state of localStorage

    if (todoObj) {
        // we hava saved a todo previously
        todoObj[hour] = todo;
    } else {
        // there is no todo in localstorage -> so we have to initialize it
        todoObj = {
            [hour]: todo
        };
    }

    localStorage.setItem("todo", JSON.stringify(todoObj)); // update todo key in localStorage
    
    
    
} 