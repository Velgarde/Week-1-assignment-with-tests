function counterTimer() {
    let counter = 0;

    return function() {
        console.clear();
        counter += 1;
        console.log(counter);
        return counter;
    }
}

const intervalId = setInterval(counterTimer(), 1000);

setTimeout(function () {clearInterval(intervalId);}, 100000);
