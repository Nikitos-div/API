const express = require('express')
const parser = require('body-parser')
const app = express()
const PORT = 8080;

app.use(parser.urlencoded({ extended: true }));


require('./routes/index')(app, {})
require('./routes/getNotes.js')(app)

app.listen(PORT, () => {
    console.log('it is work')
})


// module.exports = () => {
//     app.post('/notes', (request, response) => {
//         console.log('CH')
//         response.send('Post Work')
//     })
// }

