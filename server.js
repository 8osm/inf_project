var express = require('express'),
    app = express(),
    morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.ejs');
})

app.listen(5858, () => console.log('Listening on 5858!'));