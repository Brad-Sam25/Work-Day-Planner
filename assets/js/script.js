let textAreaEl = $("#text-area"); 
let nine = $("#text-area9");
let ten = $("#text-area10");
let eleven = $("#text-area11");
let twelve = $("#text-area12");
let thirteen = $("#text-area13");
let fourteen = $("#text-area14");
let fifteen = $("#text-area15");
let sixteen = $("#text-area16");
let seventeen = $("#text-area17");  
let rightNow = moment().format('H');

$(document).ready(function() {
    let ls9 = localStorage.getItem("nine")
    let ls10 = localStorage.getItem("ten")
    let ls11 = localStorage.getItem("eleven")
    let ls12 = localStorage.getItem("twelve")
    let ls13= localStorage.getItem("thirteen")
    let ls14 = localStorage.getItem("fourteen")
    let ls15 = localStorage.getItem("fifteen")
    let ls16 = localStorage.getItem("sixteen")
    let ls17 = localStorage.getItem("seventeen")

    nine.text(ls9);
    ten.text(ls10);
    eleven.text(ls11);
    twelve.text(ls12);
    thirteen.text(ls13);
    fourteen.text(ls14);
    fifteen.text(ls15);
    sixteen.text(ls16);
    seventeen.text(ls17);
})


function showBlockColor () {
console.log(rightNow)
    if (9 < rightNow) {
        nine.removeClass("present").removeClass("future").addClass("past")
    } else if (9 > rightNow) {
        nine.removeClass("past").removeClass("present").addClass("future")
    } else {
        nine.removeClass("future").removeClass("past").addClass("present")
    }

    if (10 < rightNow) {
        ten.removeClass("present").removeClass("future").addClass("past")
    } else if (10 > rightNow) {
        ten.removeClass("past").removeClass("present").addClass("future")
    } else {
        ten.removeClass("future").removeClass("past").addClass("present")
    }

    if (11 < rightNow) {
        eleven.removeClass("present").removeClass("future").addClass("past")
    } else if (11 > rightNow) {
        eleven.removeClass("past").removeClass("present").addClass("future")
    } else {
        eleven.removeClass("future").removeClass("past").addClass("present")
    }

    if (12 < rightNow) {
        twelve.removeClass("present").removeClass("future").addClass("past")
    } else if (12 > rightNow) {
        twelve.removeClass("past").removeClass("present").addClass("future")
    } else {
        twelve.removeClass("future").removeClass("past").addClass("present")
    }

    if (13 < rightNow) {
        thirteen.removeClass("present").removeClass("future").addClass("past")
    } else if (13 > rightNow) {
        thirteen.removeClass("past").removeClass("present").addClass("future")
    } else {
        thirteen.removeClass("future").removeClass("past").addClass("present")
    }

    if (14 < rightNow) {
        fourteen.removeClass("present").removeClass("future").addClass("past")
    } else if (14 > rightNow) {
        fourteen.removeClass("past").removeClass("present").addClass("future")
    } else {
        fourteen.removeClass("future").removeClass("past").addClass("present")
    }
    
    if (15 < rightNow) {
        fifteen.removeClass("present").removeClass("future").addClass("past")
    } else if (15 > rightNow) {
        fifteen.removeClass("past").removeClass("present").addClass("future")
    } else {
        fifteen.removeClass("future").removeClass("past").addClass("present")
    }
    
    if (16 < rightNow) {
        sixteen.removeClass("present").removeClass("future").addClass("past")
    } else if (16 > rightNow) {
        sixteen.removeClass("past").removeClass("present").addClass("future")
    } else {
        sixteen.removeClass("future").removeClass("past").addClass("present")
    }
    
    if (17 < rightNow) {
        seventeen.removeClass("present").removeClass("future").addClass("past")
    } else if (17 > rightNow) {
        seventeen.removeClass("past").removeClass("present").addClass("future")
    } else {
        seventeen.removeClass("future").removeClass("past").addClass("present")
    }
}

showBlockColor();



$("#saves9").on("click", function () {
    let input = nine.val();
    localStorage.setItem("nine", input);
})

$("#saves10").on("click", function () {
    let input = ten.val();
    localStorage.setItem("ten", input);
})

$("#saves11").on("click", function () {
    let input = eleven.val();
    localStorage.setItem("eleven", input);
})

$("#saves12").on("click", function () {
    let input = twelve.val();
    localStorage.setItem("twelve", input);
})

$("#saves13").on("click", function () {
    let input = thirteen.val();
    localStorage.setItem("thirteen", input);
})

$("#saves14").on("click", function () {
    let input = fourteen.val();
    localStorage.setItem("fourteen", input);
})

$("#saves15").on("click", function () {
    let input = fifteen.val();
    localStorage.setItem("fifteen", input);
})

$("#saves16").on("click", function () {
    let input = sixteen.val();
    localStorage.setItem("sixteen", input);
})

$("#saves17").on("click", function () {
    let input = seventeen.val();
    localStorage.setItem("seventeen", input);
})



// function getSavedText (event) {
//     if (!localStorage.getItem(textAreaEl)) {
//         return '';
//     }
//     return localStorage.getItem(textAreaEl)
// }

// getSavedText();

function showTime () {
    let currentTime = moment().format('MMMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(currentTime);
}



setInterval(showTime, 1000);