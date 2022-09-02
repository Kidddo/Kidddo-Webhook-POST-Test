const port = 3000;
const express = require('express');
	    
const app = express();
app.use(express.json({ extended: true }));

app.post('/webhook', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.get('/', function (req, res) {
  res.send('Ready to receive at /webhook');
});

app.listen(port, function (req, res) {
  console.log('Server listening on port '+port);
});