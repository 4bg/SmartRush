exports.create = {
  handler: function(req, res) {
    // console.log(req.body.title);
    res.send(JSON.stringify(req.body));
  }
}