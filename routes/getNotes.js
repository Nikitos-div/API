const fs = require('fs')


async function readJSON() {
    const promiseFile = new Promise((resolve, reject) => {
        fs.readFile('./routes/data.json', (_, data) => {
            try {
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
    })
    const data = await promiseFile
    return data
}



module.exports = function (app) {
    let data = 'Error'
    readJSON().then(answer => {
        data = JSON.parse(answer)
    })
    app.get('/getNotes', (req, res) => {
        res.send(data)
    })
}

