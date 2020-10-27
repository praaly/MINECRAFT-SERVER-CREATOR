function checkServer(){
var http = require("http"); 
    http.get({host: "www.server.praaly.fr"}, function(res){
    if( res.statusCode == 200 || res.statusCode == 301 )
        return true;
    else
        return false; 
   });
}