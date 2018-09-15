module.exports = function(app)
{
  app.get('/', function(req, res) {

  });

  app.post('/', function(req, res) {
    var User = new User();
    user.uid = req.body.uid;
    user.nickname = req.body.nickName;

    user.save(function(err){
      if(err){
        console.log(err);
        res.json({result : 0});
        return;
      }

      res.json({result : 1});
    })
  });
  
}
