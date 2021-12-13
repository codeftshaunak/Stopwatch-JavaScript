let hr = 0;
let mn = 0;
let sec = 0;
let count = 0;
let timer = false;

let hrr = document.getElementById("hr");
let min = document.getElementById("min");
let sc = document.getElementById("sec");
let cnt = document.getElementById("count");


function Start() {
        if (!timer) {
                timer = true;
                stopWatch();
        }
}

function Stop() {
        timer = false;
}

function Reset() {
        timer = false;
        hr = 0;
        mn = 0;
        sec = 0;
        count = 0;
        hrr.innerHTML = "00";
        min.innerHTML = "00";
        sc.innerHTML = "00";
        cnt.innerHTML = "00";
}

function stopWatch() {

        if (timer == true) {
                count = count + 1;
                cnt.innerHTML = (count < 10) ? `0${count}` : count;

                if (count == 100) {
                        sec += 1;
                        count = 0;
                        sc.innerHTML = (sec < 10) ? `0${sec}` : sec;
                }

                if (sec == 60) {
                        mn += 1;
                        sec = 0;
                        mn.innerHTML = (mn < 10) ? `0${mn}` : mn;
                }

                if (mn == 60) {
                        hr += 1;
                        mn = 0;
                        hrr.innerHTML = (hr < 10) ? `0${hr}` : hr;
                }



                setTimeout(() => {
                        stopWatch();
                }, 10)
        }
}