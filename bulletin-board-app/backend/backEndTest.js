var http = require('http');

exports.backEndTest = function (req, res) {
  console.log('backEndTest...');
  try{
    //var url = 'http://localhost:8080/api/events';
    //var url = 'http://bb-app:8080/api/events'
    var url = 'http://bb-rest:8080/api/events'
    
    http.get(url, (resp) => {
      let data = '';
    
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var dataJson = JSON.parse(data);
        console.log(url + 'end ' + data);
        res.json(dataJson);
      });
    
    }).on("error", (err) => {
      console.log("backEndTest Error: " + err.message);
    });
  
  }
  catch(error){
    console.log("backEndTest Catch Error: " + error.message);
  }
};
exports.backEndListColours = function (req, res) {
  var url = 'http://bb-rest:8080/api/backEndListColours';
  console.log('backEndTest...' + url);
  try{
    
    http.get(url, (resp) => {
      let data = '';
    
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        var dataJson = JSON.parse(data);
        console.log(url + 'end ' + data);
        res.json(dataJson);
      });
    
    }).on("error", (err) => {
      console.log("backEndTest Error: " + err.message);
    });
  
  }
  catch(error){
    console.log("backEndTest Catch Error: " + error.message);
  }
};
exports.backEndListColoursOriginal = function (req, res) {
  console.log('backEndListColours...');
  var data = ['red','blue','green'];        
  res.json(data);  
};
