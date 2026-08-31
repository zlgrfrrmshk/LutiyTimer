const timer2 = document.getElementById('timer');

function updateTimer() {
    const countDate = new Date('Sep 01, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now; 

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    

    while(true) {
        timer2.style.boxShadow = "0 0 40px white";
        setTimeout(() => {
            timer2.style.boxShadow = "0 0 0px white";
        }, 1000);
        break;
    };

    if (gap < 0) {
        clearInterval(timer);
        document.getElementById('timer').innerText = "усё";
        
    }
}

const timer = setInterval(updateTimer, 1000);
// const timer3 = setInterval(() => {
//     timer2.style.boxShadow = "0 0 40px white";
//     setTimeout(() => {
//         timer2.style.boxShadow = "0 0 0px white";
//     }, 1000);
// });
updateTimer();
