// Add Current Date to Top of Webpage Variable
var todaysDate = moment().format('dddd, MMMM Do');

// Current Day Function
$("#currentDay").text(function() {
    return todaysDate;
})


// Time Blocks
var currentHour = moment().format('h');
console.log(currentHour);


Array.from(document.querySelectorAll(".row")).forEach(function(element){
    var time = element.getElementsByTagName('p')[0].textContent.split(/\D/ig)[0]
    var textArea = element.getElementsByTagName('textarea')[0]
    console.log(time)
    if (currentHour < time) {
        textArea.classList.add("past")
    }
    if (currentHour === time) 
        textArea.classList.add("present")
    if (currentHour > time)
        textArea.classList.add("future")
})