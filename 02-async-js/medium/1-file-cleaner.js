const fs =  require('fs');

fs.readFile('medium/sample.txt', 'utf-8', (err,data) => {
    if (err) throw new Error(`You encountered Error: ${err}`)
        let content = data.trim().replace(/ +/g, ' ');
        fs.writeFile('medium/sample.txt', content, 'utf-8', (err) => {
            if (err) throw new Error(`You encountered Error: ${err}`)
            console.log(`YOU HAVE REMOVED THE EXTRA SPACES FROM THE FILE`)
        });
});
