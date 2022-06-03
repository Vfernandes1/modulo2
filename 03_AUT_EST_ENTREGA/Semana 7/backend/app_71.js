const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const hostname = '127.0.0.1';

const port = 3061;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'dbCurriculodb.db';

app.use(express.static("../frontend"));


/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Tbc';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/userinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO Tbc (Nome, email) VALUES ('" + req.body.name + "', '" + req.body.email +"')";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

app.put('/updateUser', (req, res) => { 

	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	const name = req.body.name
    const idade = req.body.idade
    sql = "UPDATE Tbc SET Nome = '" + name + "' SET Idade = '" + idade + "'WHERE Email = " + req.body.email;
    var db = new sqlite3.Database(DBSOURCE);
    db.run(sql, []);
    db.close();

	
	//Método Put, atualzia os campos dentro do banco de dados
    // db.run(atualizar, ["name", "email", "idade"]); caso usasse uma varíavle "atualizar"

	
});

// Exclui um registro (é o D do CRUD - Delete)

app.delete("/deleteUser", (req, res) => { 

	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM Tbc WHERE Nome = " + req.body.name;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
	
	//Método Delete, deleta um usuário do banco de dados, por exemplo
    // db.run(delet);caso usasse uma variável delete
});



/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});