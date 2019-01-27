var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({limit:'150mbs',extended:true}));

    app.use(express.static(__dirname+'/public'));


    app.get('/',function(req,res){

        res.sendfile('/index.html')
    })
    app.get('/about',function(req,res){

        res.sendfile('public/views/about.html')
    })
    app.get('/service',function(req,res){

        res.sendfile('public/views/services.html')
    })
    app.get('/contact',function(req,res){

        res.sendfile('public/views/contact.html')
    })


    app.get('/portfolio1',function(req,res){

        res.sendfile('public/views/portfolio-1-col.html')
    })
    app.get('/portfolio2',function(req,res){

        res.sendfile('public/views/portfolio-2-col.html')
    })
    app.get('/portfolio3',function(req,res){

        res.sendfile('public/views/portfolio-3-col.html')
    })
    app.get('/portfolio4',function(req,res){

        res.sendfile('public/views/portfolio-4-col.html')
    })
    app.get('/portfolio5',function(req,res){

        res.sendfile('public/views/portfolio-5-col.html')
    })


    app.get('/blog1',function(req,res){

    res.sendfile('public/views/blog-home-1.html')
    })
    app.get('/blog2',function(req,res){

    res.sendfile('public/views/blog-home-2.html')
    })

    app.listen(8080);
    console.log('server running on 8080');
    

