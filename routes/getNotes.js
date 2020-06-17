const fs = require('fs')


async function readJSON() {
    const promiseFile = new Promise((resolve, reject) => {
        console.log(2)
        fs.readFile('./routes/data.json', (_, data) => {
            try {
                console.log(3)
                resolve(data)
            } catch (err) {
                console.error(err)
                reject(err)
            }
        })
    })
    const data = await promiseFile
    return data
}



module.exports = function (app) {
    let data = 'Error'
    console.log(1)
    readJSON().then(answer => {
        console.log(4)
        data = answer
    })
    app.get('/getNotes', (req, res) => {
        console.log(5)
        res.send(data)
    })
}

