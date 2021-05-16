let textAreaEl = $("text-area"); 
let eigthHour  
let rightNow = moment().format('hh:mm: a');

function showBlockColor () {
    if (eigthHour <= rightNow) {
        $(textAreaEl).toggleClass("past")
    }
}

$("#saves").on("click", function () {
    localStorage.setItem('event', JSON.stringify(textAreaEl));
})


function showTime () {
    let currentTime = moment().format('MMMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(currentTime);
}



setInterval(showTime, 1000);