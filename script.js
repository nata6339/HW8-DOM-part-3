console.log('============= 1')

function count (a, b){
    if (a < b) {
        print (a-1, b, true);
    } else {
        print(a+1, b, false);
    }
}
function print(a, b, dec){
    if (dec) {
        a++;
    } else {
        a--;
    }
    console.log(a);
    if (a === b){
        return;
    }
    print(a, b, dec);
}

count(5, 10);
console.log('=====================')
count(5, 1);

console.log('============= 2')

let isShort = false;

function clock() {
    let fullDate = new Date(),
        hours = fullDate.getHours(),
        minutes = fullDate.getMinutes(),
        seconds = fullDate.getSeconds();
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    if (isShort) {
        document.getElementById('clock').innerHTML = hours + ':' + minutes;
    } else {
        document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds
    }
}
    setInterval(clock, 1000);
    clock();

document.getElementById('clock').addEventListener("click", function () {
    isShort = !isShort;
    clock();
});

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


