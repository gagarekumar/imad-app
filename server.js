var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require ('crypto')

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
function hash(input,salt)
{
     var hashed = crypto.pbkdf2Sync(input , salt , 10000 , 512 , 'sha512');
    return hashed.toString(hex);
}
    
app.get('/hash/:input',function(req,res)
{
   var hashedString = hash(req.params.input, 'this-is-some-random-string');
 res.send(hashedString);  
});
app.get('/article-1',function(req,res)
{
 res.sendFile(path.join(__dirname, 'ui', 'article-1.html'));  
});

app.get('/article-2',function(req,res)
{
  res.send('Article two will be served here and wait ');  
});

app.get('/article-3',function(req,res)
{
  res.send('Article three will be served here and wait ');  
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
