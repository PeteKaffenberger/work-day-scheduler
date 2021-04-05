

$(document).ready(() => {

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

        $("#btn9)").click(function () {
            var content = $("#hour9").val();
            hours[9] = content;
            localStorage.setItem(9, JSON.stringify(content));
        });

        var storedData = JSON.parse(window.localStorage.getItem(9))
        $("#hour9").val(storedData);
    
    
    })