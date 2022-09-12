const fs = require('fs')

const PLAYERS_NUM = process.argv[2]
const LOCATIONS = fs.readFileSync('list.txt').toString().split('\r\n')
const RANDOM_NUM = Math.floor(Math.random() * (LOCATIONS.length - 1 + 1)) + 1;
const CHOICE_LOCATION = LOCATIONS[RANDOM_NUM-1]

if (!fs.existsSync('output/')) {
    fs.mkdir('output', function (err) {
        if (err) return console.log(err)
    })
}

let result = []
for (let i = 0; i < PLAYERS_NUM-1; i++ ) {
    result.push(CHOICE_LOCATION)
}
result.push('Вы шпион. Не дайте себя рассекретить.')
result = result.sort( () => .5 - Math.random())
for (let i = 0; i < result.length; i++ ) {
    fs.writeFile(`output/${i+1}.txt`, result[i], function (err) {
        if (err) return console.log(err);
    })
}