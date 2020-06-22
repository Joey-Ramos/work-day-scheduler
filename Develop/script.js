// Add Current Date to Top of Webpage Variable
var todaysDate = moment().format('dddd , MMMM Do');

// Current Day Function
$("#currentDay").text(function() {
    return todaysDate;
})


// Time Blocks