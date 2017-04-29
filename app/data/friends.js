class FriendsDb {
  constructor() {
    this.friends = [
      {
        name: "Donald Trump",
        photo: "https://static01.nyt.com/images/5016/02/03/opinion/3rosenthalWEB/3rosenthalWEB-blog480.jpg",
        scores: ["1","1","1","1","1","1","1","1","1","1"]
      },
      {
        name: "Anthony Weiner",
        photo: "https://nyoobserver.files.wordpress.com/2013/04/anthony-weiner-twitter.jpeg",
        scores: ["2","2","2","2","2","2","2","2","2","2"]
      },
      {
        name: "Hillary Clinton",
        photo: "https://static5.businessinsider.com/image/571fd06552bcd0210c8bf0e4-480/hillary-clinton.jpg",
        scores: ["5","5","5","5","5","5","5","5","5","5"]
      }
    ];
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
