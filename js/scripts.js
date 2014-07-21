// Project Scripts

var Player = {
  initialize: function(initializedSymbol) {
    this.symbol = initializedSymbol;
  },
  create: function() {
    return Object.create(Player);
  },
  symbol:""
};

var Space = {
  initialize: function(x, y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
  create: function(space) {
    this.spaceNum = space;
    return Object.create(Space);
  },
  markBy: function(player) {
    this.markedBy = player;
  },
  xCoordinate:"",
  yCoordinate:"",
  markedBy: "",
  spaceNum: ""

}

var Board = {
  initialize: function() {

    for (var i = 1; i < 10; i++) {
      this.spaces.push(Space.create(i));
    };
  },
  spaces: []
}

var player1 = Object.create(Player)
var player2 = Object.create(Player)

player1.initialize("x");
player2.initialize("o");
var board = Object.create(Board);
board.initialize();
console.log(board.spaces)

var space1 = board.spaces[0]
space1.initialize(0, 0)
space1.spaceNum = 1;

var space2 = board.spaces[1]
space2.initialize(1, 0)
space2.spaceNum = 2;

var space3 = board.spaces[2]
space3.initialize(2, 0)
space3.spaceNum = 3;

var space4 = board.spaces[3]
space4.initialize(0, 1)
space4.spaceNum = 4;

var space5 = board.spaces[4]
space5.initialize(1, 1)
space5.spaceNum = 5;

var space6 = board.spaces[5]
space6.initialize(2, 1)
space6.spaceNum = 6;

var space7 = board.spaces[6]
space7.initialize(0, 2)
space7.spaceNum = 7;

var space8 = board.spaces[7]
space8.initialize(1, 2)
space8.spaceNum = 8;

var space9 = board.spaces[8]
space9.initialize(2, 2)
space9.spaceNum = 9;

$(document).ready(function(event) {
  $("div#space1").last().click(function(event) {
    $("div#space1").append("<p>" + "x" + "</p>");
    event.preventDefault();
  });
  event.preventDefault();
});
