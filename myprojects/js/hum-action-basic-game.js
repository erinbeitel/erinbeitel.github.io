var camp = {
	posX: 400,
	posY: 400,
	population: 200,
	food_needed: 50
};

var rebel = {
	posX: 100,
	posY: 100
};

var player = {
	posX: 0,
	posY: 0,
	food: 1000,
	win: false,

move: function() {
  while (player.win !== true) {

    // if (player.posX === rebel.posX && player.posY === rebel.posY){
    //   player.food -= 10; 
    //   document.getElementById("player-food").innerHTML = player.food;
    //   console.log("You encountered the rebel. You lost some food.!");
    //   console.log(player);
    // };

    if(player.posX >= camp.posX && player.posY >= camp.posY){
      if (player.food >= 50){
        player.win = true;
        console.log("You reached the camp with enough food, you win!!");
      }
      else {
        player.win = false;
        console.log("You reached the camp but you don't have enough food, you lose!");
      }
    }
    else {
      console.log("Keep going!");
      player.posX += Math.floor((Math.random()*100)+1);
      document.getElementById("player-locationX").innerHTML = player.posX;
      player.posY += Math.floor((Math.random()*100)+1);
      document.getElementById("player-locationY").innerHTML = player.posY;
      player.win = false;
    };
  };

},

status: function() {
  console.log("Your position is " + player.posX + "," + player.posY + " you have" + player.food + "food left");
}
};

//After every move, check if the player is near the rebels or the camp

// while (player.win !== true) {

// if (player.posX === rebel.posX && player.posY === rebel.posY){
//   player.food -= 10; 
//   document.getElementById("player-food").innerHTML = player.food;
//   console.log("You encountered the rebel. You lost some food.!");
//   console.log(player);
// };

// if(player.posX >= camp.posX && player.posY >= camp.posY){
//   if (player.food >= 50){
//     player.win = true;
//     console.log("You reached the camp with enough food, you win!!");
//   }
//   else {
//     player.win = false;
//     console.log("You reached the camp but you don't have enough food, you lose!");
//   }
// }
// else {
// 	console.log("Keep going!");
//   player.posX += Math.floor((Math.random()*100)+1);
//   document.getElementById("player-locationX").innerHTML = player.posX;
//   player.posY += Math.floor((Math.random()*100)+1);
//   document.getElementById("player-locationY").innerHTML = player.posY;
// };


// };


// range = document.createRange();
// range.selectNode(document.getElementsByTagName("div").item(0));
// bool = range.isPointInRange(document.getElementsByTagName("p").item(0),1);

