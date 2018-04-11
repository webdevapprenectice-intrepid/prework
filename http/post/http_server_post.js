var http = require('http');
http.createServer(function (req, res) {
  var jsonData = "";
  req.on('data', function () {
    var reqObj = JSON.parse(jsonData);
    var resObj = {
      message: "Hello " + reqObj.name,
      question: "Are you a good " + reqObj.occupation + "?"
    };
    res.writeHead(200);
    res.end(JSON.stringify(resObj));
  });
}).listen(8080);
