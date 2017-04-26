function loadApiRoutes(app, friends) {
  function isValidFriend(friend, numOfQuestions) {
    return (friend.name && friend.photo && friend.scores && friend.scores.length === numOfQuestions);
  }

  app.get("/api/friends", (req, res) => {
    return res.json(friends.getFriends());
  });

  app.post("/api/friends", (req,res) => {
    var newFriend = req.body;
    if (isValidFriend(newFriend, 10)) {
      friends.add(newFriend);
      return res.json(friends.getClosestMatch(newFriend));
    }
    return res.json({error: "Object did not have correct values or number of keys"})
  });
}

module.exports = loadApiRoutes;
