class FriendsDb {
  constructor() {
    this.friends = [];
  }

  add(friend) {
    this.friends.push(friend);
  }

  getFriends() {
    return this.friends;
  }

  getClosestMatch(stranger) {
    var bestFriend = this.getFriends()[0];
    var bestScore = Number.MAX_VALUE;
    for (let potentialFriend of this.getFriends()) {
      var sumOfDiff = 0;
      for (var i = 0; i < stranger.scores.length; i++) {
        sumOfDiff += Math.abs(stranger.scores[i] - potentialFriend.scores[i]);
      }
      if (sumOfDiff < bestScore &&
          potentialFriend.name !== stranger.name &&
          potentialFriend.photo !== stranger.photo) {
        bestFriend = potentialFriend;
        bestScore = sumOfDiff;
      }
    }
    return bestFriend;
  }
}

module.exports = FriendsDb;
