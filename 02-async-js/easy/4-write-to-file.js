const fs = require('fs');

fs.writeFile('02-async-js/easy/prac.txt', 'Hello from the other side as well', 'utf8', (err) => {
    if (err) {
        console.error(`Error writing on the file. Error : ${err}`)
    }
})