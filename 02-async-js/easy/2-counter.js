function count(n) {
    let counter = 0;

    function printCounter() {
        console.clear();
        console.log(counter);
        counter++;
        if (counter <= n) {
            setTimeout(printCounter, 1000);
        }
    }
    printCounter();
}
count(100);
