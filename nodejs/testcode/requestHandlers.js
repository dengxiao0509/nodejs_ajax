// JavaScript source code
fs = require('fs');

function liste(response){
    console.log("Request handler 'liste' was called.");
    response.writeHead(200, { "Content-Type": "text/html" });
    var re;
    //files is an array
    fs.readdir("./www" , function(err,files) {
        if(err) re='get files error!';
        else {
            re = '<ul>';
            for(var i=0;i<files.length;i++)
                 re +='<li>'+files[i]+'</li>';
              re += '</ul>';
        }
        response.write(re);
        response.end();
    });

   // console.log(re);   undefined!!!!!!!! because fs.readdir est asynchronous


    }
exports.liste = liste;