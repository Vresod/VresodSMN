const express = require('express');
const fs = require("fs");
const app = express();
var html;
var htmlvars = {
	"testvar":"yeah"
}

app.get('/', (req, res) => {
  res.send(html)
});

fs.readFile('index.html', 'utf8', function(err, contents) {
    html = contents.replace("%testvar%",htmlvars.testvar);
});

app.listen(3000, () => {
  console.log('server started');
	console.log(html)
});