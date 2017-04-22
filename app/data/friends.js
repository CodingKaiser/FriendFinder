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
}

module.exports = FriendsDb;
