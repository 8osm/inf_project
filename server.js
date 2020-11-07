var express = require('express'),
    app = express(),
    morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(80, () => console.log('Listening on 80!'));
