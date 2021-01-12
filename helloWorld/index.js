
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('<form  method="POST">Nom: <input type="text" name="nom"><br><input type="submit" value="Send"></form>');
})

app.use(function (req, res){
	res.setHeader('Content-Type', 'text/plain')
	res.write('Hello ')
	if (req.body.nom.length == 0) {
		res.end('Anonim')
	} else {
		res.end(JSON.stringify(req.body.nom))
	}
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
