import express from 'express';
import data from './data.json';
const app = express();
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'));
console.log('runing @ '+ app.get('port'));
app.get('/', function(req, res) {
    res.render('index.html');
});
app.get('/json', function(req, res) {
    res.send(data);
});
