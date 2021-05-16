let textAreaEl = $("#text-area"); 
let nine = $("#900");
let ten = $("#1000");
let eleven = $("#1100");
let twelve = $("#1200");
let thirteen = $("#1300");
let fourteen = $("#1400");
let fifteen = $("#1500");
let sixteen = $("#1600");
let seventeen = $("#1700");  
let rightNow = moment().format('HH:mm a');

function showBlockColor () {
    parseInt($("#900").val(), rightNow)
    if (nine < rightNow) {
        $(textAreaEl).addClass("past")
    } else if (nine > rightNow) {
        $(textAreaEl).removeClass("past").addClass("future")
    } else {
        $(textAreaEl).removeClass("future").addClass("present")
    }

    parseInt($("#1000").val(), rightNow)
    if (ten < rightNow) {
        $(textAreaEl).addClass("past")
    } else if (ten > rightNow) {
        $(textAreaEl).removeClass("past").addClass("future")
    } else {
        $(textAreaEl).removeClass("future").addClass("present")
    }

    parseInt($("#1100").val(), rightNow)
    if (eleven < rightNow) {
        $(textAreaEl).addClass("past")
    } else if (eleven > rightNow) {
        $(textAreaEl).removeClass("past").addClass("future")
    } else {
        $(textAreaEl).removeClass("future").addClass("present")
    }

    parseInt($("#1200").val(), rightNow)
    if (twelve < rightNow) {
        $(textAreaEl).addClass("past")
    } else if (twelve > rightNow) {
        $(textAreaEl).removeClass("past").addClass("future")
    } else {
        $(textAreaEl).removeClass("future").addClass("present")
    }

    parseInt($("#1300").val(), rightNow)
    if (thirteen < rightNow) {
        $(textAreaEl).addClass("past")
    } else if (thirteen > rightNow) {
        $(textAreaEl).removeClass("past").addClass("future")
    } else {
        $(textAreaEl).removeClass("future").addClass("present")
    }

    parseInt($("#1400").val(), rightNow)
    if (fourteen < rightNow) {
        $(textAreaEl).addClass("past")
    } else if (fourteen > rightNow) {
        $(textAreaEl).removeClass("past").addClass("future")
    } else {
        $(textAreaEl).removeClass("future").addClass("present")
    }
    
    parseInt($("#1500").val(), rightNow)
    if (fifteen < rightNow) {
        $(textAreaEl).addClass("past")
    } else if (fifteen > rightNow) {
        $(textAreaEl).removeClass("past").addClass("future")
    } else {
        $(textAreaEl).removeClass("future").addClass("present")
    }
    
    parseInt($("#1600").val(), rightNow)
    if (sixteen < rightNow) {
        $(textAreaEl).addClass("past")
    } else if (sixteen > rightNow) {
        $(textAreaEl).removeClass("past").addClass("future")
    } else {
        $(textAreaEl).removeClass("future").addClass("present")
    }
    
    parseInt($("#1700").val(), rightNow)
    if (seventeen < rightNow) {
        $(textAreaEl).addClass("past")
    } else if (seventeen > rightNow) {
        $(textAreaEl).removeClass("past").addClass("future")
    } else {
        $(textAreaEl).removeClass("future").addClass("present")
    }
}

showBlockColor();

console.log(nine);

$("#saves").on("click", function () {
    localStorage.setItem('event', JSON.stringify(textAreaEl));
})

function getSavedText (event) {
    if (!localStorage.getItem(textAreaEl)) {
        return '';
    }
    return localStorage.getItem(textAreaEl)
}

getSavedText();

function showTime () {
    let currentTime = moment().format('MMMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(currentTime);
}



setInterval(showTime, 1000);