function printClock() {
    const currentTime = new Date();
    var hours  = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds  = currentTime.getSeconds()
    var meridem = "AM"

    if (hours > 12) {
        hours -= 12;
        meridem = "PM"
    }
    else if (hours == 0) {
        hours = 12
    }

    hours = hours.toString().padStart( 2 , "0" )
    minutes = minutes.toString().padStart( 2 , "0" )
    minutes = minutes.toString().padStart( 2 , "0" )
    console.clear();
    console.log(`${hours} : ${minutes} : ${seconds}  ${meridem}`)
}

setInterval(printClock, 1000)
