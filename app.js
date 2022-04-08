var express = require('express'); //Se importa la dependencia de Express
var app = express(); //Declaramos una variable para el uso de Express
app.set('view engine', 'ejs');
var port = process.env.PORT || 3000; //Establecemos el puerto para que escuche el servidor

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
    console.log('Request Url:' + req.url);
    next();
});

app.get('/', function (req, res) {  //Ruta nivel raíz
    res.render('index');
});

app.get('/number/:id', function (req, res) { //Se establece la ruta junto con un id
    res.render('number', { ID: req.params.id}) //Dentro de las llaves amarillas se define la variable que va a recibir el parámetro
})

app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id });
});

app.listen(port); 