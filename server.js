var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({limit:'150mbs',extended:true}));

    app.use(express.static(__dirname+'/public'));

    app.get('/',function(req,res){

        res.sendfile('/index.html')
    })

    app.listen(8080);
    console.log('server running on 8080');
    

