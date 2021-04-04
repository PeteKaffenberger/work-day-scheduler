var hours = {
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
}

var timeDisplayEl = $('#time-display');


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
  }
setInterval(displayTime, 1000);