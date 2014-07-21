// Tests Go Here!
describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe("create", function() {
    it("creates a new Player object", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });

  describe("create", function() {
    it("creates a new Space object", function() {
      var testSpace = Space.create(1, 2);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });

  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Board", function() {
  it("creates 9 spaces when it is initialized", function () {
    var testBoard = Object.create(Board);
    testBoard.initialize();
    testBoard.spaces.length.should.equal(9);
  }); // you write the rest!
});
describe("Game", function() {
  describe("initilize", function() {
    it("sets current player as player1", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.currentPlayer.symbol.should.equal("x");
    });
    it("creates only two players", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.players.length.should.eql(2);
    });
  });
  describe("nextTurn", function() {
    var newGame = Object.create(Game);
    newGame.initialize();
    newGame.nextTurn();
    it("switches current player between player1 and player2", function() {
      newGame.currentPlayer.should.eql(newGame.players[1]);
    });
  });
});
