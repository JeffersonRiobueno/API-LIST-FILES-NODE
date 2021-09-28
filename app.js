const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = app.listen(port);

server.timeout = 1000 * 60 * 10; // 10 minutes

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

app.use('/static', express.static(__dirname + '/express'));

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

var path ="./assets/";


app.post('/api/dir/', (req, resp) => {

    path2=req.body.value || "";
    path2=path+path2;
    var files = fs.readdirSync(path2).filter(function (file) {
        return fs.statSync(path2+'/'+file).isDirectory();
      });
    resp.end(JSON.stringify(files));
})



app.post('/api/file/', (req, resp) => {

    path2=req.body.value || "";
    path2=path+path2;
    var files = fs.readdirSync(path2).filter(function (file) {
        return fs.statSync(path2+'/'+file).isFile();
      });
    resp.end(JSON.stringify(files));
})


app.get('/download/:value', function(req, res){
    V=req.params.value || "";
    V=V.replace(/RBENLACERB/g,'/');
    var file = path + V;
    res.download(file, function(err) {
        if(err){console.error(err);}
      });
  });

