const request = require('request');
module.exports = function (app) {
  

  app.get('/api/services', function (req, res) { 
    var options = { method: 'GET',
    url: 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services',
   
    headers: 
     { "Access-Control-Allow-Origin": "*" } };
    request(options,(error,response,body)=>{
    if(error){
      res.setHeader('Content-Type', 'application/json');
      var result={
          status:500,
          message:error,
          data:[]
       }
      res.send(JSON.stringify(result ));
    }
    res.setHeader('Content-Type', 'application/json');
    var result={
        status:200,
        message:"Service successfully get",
        data:JSON.parse(body)
     }
    res.send(JSON.stringify(result ));

    
  });
    
      // Items.find({}, function (err, result) {
      //     if (err)
      //         sendError(err, res);
      //     else
      //         sendSuccessResponse(result, '', res);
      // });       
  });  
  app.get('/api/providers', function (req, res) { 
    var options = { 
    url: 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers',
    qs: 
     { include: 'locations,schedules.location',
       'amp;page[number]': '1',
       'amp;page[size]': '10' },
    headers: 
     { "Access-Control-Allow-Origin": "*" } };

    request(options,(error,response,body)=>{
    if(error){
      res.setHeader('Content-Type', 'application/json');
      var result={
          status:500,
          message:"something went wrong",
          data:[]
       }
      res.send(JSON.stringify(result ));
    }
    res.setHeader('Content-Type', 'application/json');
    var result={
        status:200,
        message:"Service successfully get",
        data:JSON.parse(body)
     }
    res.send(JSON.stringify(result ));
    
    
  });
    
      // Items.find({}, function (err, result) {
      //     if (err)
      //         sendError(err, res);
      //     else
      //         sendSuccessResponse(result, '', res);
      // });       
  }); 
  app.get('/api/greeting', (req, res) => {
const name = req.query.name || 'World';
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});
}