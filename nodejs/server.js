// JavaScript source code
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

    http.createServer(function (req, response) {
        var pathname = url.parse(req.url).pathname;
       // var ext = path.extname(pathname);
        var i = pathname.substr(1);
       // var ct,data;
        

        function fib(index) {

           // console.log(index);
            if (index == 0 || index == 1)
                return 1;
            else {
                
                return fib(index - 1) + fib(index - 2);
               
            }

        }


        var re = fib(i);

        console.log(re);
        


               
/*
        if (pathname === '/liste' || pathname==='/') {
            response.writeHead(200, { "Content-Type": "text/html" });
            var re,extl,icone;
            re = '<html>' + '<head>' + '<link rel="stylesheet" type="text/css" href="liste.css"/>'
                +'<script src="ajax.js">'+'</script>'+ '</head>' + '<body>' + "<div id='main'>";
            //files is an array
    //       var files = fs.readdirSync('./www');

             fs.readdir("./www", function (err, files) {
                if (err) re += 'get files error!';
                else {
                    re += '<ul>';
                    for (var i = 0; i < files.length; i++)
                    {
                        extl = path.extname(files[i]);
                        switch (extl) {
                            case '.txt': icone = '/icones/text-x-generic.svg'; break;
                            case '.htm': icone = '/icones/text-html.svg'; break;
                            case '.html': icone ='/icones/text-html.svg'; break;
                            case '.jpg': icone = '/icones/image-x-generic.svg'; break;
                            case '.js': icone = '/icones/text-x-script.svg'; break;
                            case '.mp3': icone = '/icones/audio-x-generic.svg'; break;
                            case '.mp4': icone = '/icones/video-x-generic.svg'; break;
                            case '.png': icone = '/icones/image-x-generic.svg'; break;
                                // case '.txt': ct = 'text/xml'; break;
                            default: break;
                        }

                        re += '<li>'+ "<div class='fileDiv'>";
                        re += "<img onclick=\"traitementClick('./metadata/file" + extl+".xml')\"" + "src=" + icone + '/>';
                        re += "<p onclick=\"traitementClick('./metadata/file" + extl+".xml')\">" + files[i] + '</p>';
                        //to delete the first one character .
                        var extid = extl.substr(1);                                 // .xml 
                        //id is the name of extention of the file
                       // re +='<style>#extid{}</style>'
                        re +='<div id='+ extid + '>'+'</div>'+'</div>'+'</li>';
                     }
                    re += '</ul>';
                }
                re += '</div>' + '</body>' + '</html>';
               // console.log(re);
                response.write(re);
                response.end();
            });

        }

        else {
            //it is necessary that the file exists, and function sychronous
            fs.exists('.' + pathname, function (exist) {
                if (exist) {
                   
                    switch (ext) {
                        case '.jpg': ct = 'image/jpeg'; break;
                        case '.png': ct = 'image/png'; break;
                        case '.svg': ct = 'image/svg+xml'; break;
                     // case '.svg': ct = 'text/xml'; break;
                     // wrong for use <img src='my.svg'>, but right if we only response( ) to show it;
                        case '.htm': ct = 'text/html'; break;      
                        case '.html': ct = 'text/html'; break;
                        case '.js': ct = 'application / x - javascript'; break;
                        case '.xml': ct = 'text/xml'; break;
                        case '.htm': ct = 'text/html'; break;
                        case '.mp3': ct = 'audio/mp3'; break;
                        case '.mp4': ct = 'video/mpeg4'; break;
                        
                            // case '.txt': ct = 'text/xml'; break;
                        default: ct = 'text/plain';
                    }
                    response.writeHead(200, { 'Content-Type': ct });
                    
                    // we must use '.',  because './' signifies current dir
               
                    fs.readFile('.' + pathname, function (err, data) {
                        if (err) response.end("Open file error!")

                        else  response.end(data); 
                        
                    });

                }
                else {
                    response.writeHead(404, { 'Content-Type': 'text/plain' });
                    response.end("File not found!");
                }


            });

     
            
        }
        */
    }).listen(1337, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:1337/');

