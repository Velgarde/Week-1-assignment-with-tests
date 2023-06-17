const fs = require('fs');

fs.readFile('02-async-js/easy/prac.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(`The file could not be read, Error : ${err}`);
        return;
    }
    console.log(data)
})

