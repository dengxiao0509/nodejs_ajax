// JavaScript source code
 
var xmlhttp;
var extname;


    function traitementClick(url) {
        xmlhttp = null;
        //split the url into several parts, return an array
        extname = url.split('.');
        
        if (window.XMLHttpRequest) {// code for IE7, Firefox, Opera, etc.
            xmlhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xmlhttp != null) {
            /*
               Property	Description
            onreadystatechange	Stores a function (or the name of a function) to be called automatically each time the readyState property changes
   
            readyState	Holds the status of the XMLHttpRequest. Changes from 0 to 4: 
            0: request not initialized 
            1: server connection established
            2: request received 
            3: processing request 
            4: request finished and response is ready
            
            status	200: "OK"
            404: Page not found
            */
            xmlhttp.onreadystatechange = state_Change;
            xmlhttp.open("GET", url, true);
            xmlhttp.send(null);
        }
        else {
            alert("Your browser does not support XMLHTTP.");
        }
    }

    function state_Change() {
        if (xmlhttp.readyState == 4) {// 4 = "loaded"
            if (xmlhttp.status == 200) {// 200 = "OK"
                //Id for every file should be different!!!!!!
               var xmlDoc = xmlhttp.responseXML;
                
                //getElement(s)ByTagName and getElementById!!!!!!!!

               //info = xmlDoc.getElementsByTagName("info")[0].attributes;
               // size = info.getNamedItem("size").nodeValue;
               
                var size = xmlDoc.getElementsByTagName("info")[0].getAttribute("size");
                             
                var author = xmlDoc.getElementsByTagName("author")[0].attributes;
                var firstname = author.getNamedItem("firstName").nodeValue;
                var lastname = author.getNamedItem("lastName").nodeValue;
               
                var dates = xmlDoc.getElementsByTagName("dates")[0].attributes;
                var d_creation = dates.getNamedItem("creation").nodeValue;
                var d_modified = dates.getNamedItem("modified").nodeValue;
                
                var description = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
             

                var data_table = "<table><tr><th rowspan='2'>size</th><th colspan='2'>author</th><th colspan='2'>dates</th><th rowspan='2'>description</th></tr>";
                data_table += "<tr><th>firstname</th><th>lastname</th><th>creation</th><th>modified</th></tr>";
                data_table += "<tr><td>" + size + "</td><td>" + firstname + "</td><td>" + lastname + "</td><td>" + d_creation + "</td><td>"+d_modified+"</td><td>"+description+"</td></tr></table>";
                
                //document.write(data);

                document.getElementById(extname[2]).innerHTML = data_table;
                
                
            }
            else {
                alert("Problem retrieving XML data:" + xmlhttp.statusText);
            }
        }
    }

