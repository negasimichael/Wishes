const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect mysql
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'wishes_db',
  password: '177471735@$nM',
});

connection.connect(err => {
  if (err) throw err
  console.log(`MySQL connected on ${connection.threadId}`)
});

app.get('/', function (req, res) {
  connection.query('SELECT * FROM wishes', (err, results) => {
    if (err) throw err
    console.log(results)
    res.render('index', { wishes: results });
  })
});

app.post('/', (req, res) => {
  connection.query('INSERT INTO wishes (wish) VALUES (?)', [req.body.wish], (err, results) => {
    if (err) throw err
    res.status(200).send()
  })
})

app.put('/:id', (req, res) => {
  const id = req.params.id
  const wish = req.body.wish
  // console.log(wish,id)
  connection.query('UPDATE wishes SET wish = ? WHERE id = ?', [wish, id], (err, results) => {
    if (err) throw err
    res.status(200).send()
  })
})


app.delete('/:id', (req, res) => {
  const id = req.params.id
  connection.query('DELETE FROM wishes WHERE id = ?', [id], (err, results) => {
    if (err) throw err
    res.status(200).send()
  })
})


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
