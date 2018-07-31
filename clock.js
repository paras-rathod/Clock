setInterval(function () {

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var period = "AM";

    if(hours >= 12){
        period = "PM";
    }

    if(hours > 12){
        hours = hours - 12;
    }

    if (second < 10){
        second = "0" + second;

    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }


    var clocktime = hours + ":" + minutes + ":" + second + " " + period;

    var clock = document.getElementById('clock');

    clock.innerText = clocktime;
}, 1000);
