const express = require('express');
const app = express();
const port = 8000;

app.get('/:content', (req, res) => {
    res.send("Your message: " + req.params.content);
});

app.listen(port, () => {
    console.log('Server online on ' + port);
})

