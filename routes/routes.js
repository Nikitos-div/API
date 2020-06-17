module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
        console.log(res)
        res.send('fuck')
    });
};