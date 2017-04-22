function loadApiRoutes(app, friends) {
  app.get("/api/friends", (req, res) => {
    return res.json(friends.getFriends());
  });

  app.post("/api/friends", (req,res) => {
    var newFriend = req.body;
    friends.add(newFriend);
    return res.json(newFriend);
  });
}

module.exports = loadApiRoutes;
