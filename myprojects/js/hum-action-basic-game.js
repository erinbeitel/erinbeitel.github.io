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

    if (rebel.posX-100 <= player.posX && player.posX <= rebel.posX+100 && rebel.posY-100 <= player.posY && player.posY <= rebel.posY+100){
      player.food -= 10; 
      setTimeout(function(){document.getElementById("player-food").innerHTML = player.food;},800); 
      setTimeout(function(){document.getElementById("player-stat1").innerHTML = "You encountered the rebel. You lost some food!"},800); 
      // document.getElementById("player-stat1").innerHTML = "You encountered the rebel. You lost some food!";
      setTimeout(function(){document.getElementById("player-stat2").innerHTML = player.stat()},800); 
      // document.getElementById("player-stat2").innerHTML = player.stat();
    };

    if(player.posX >= camp.posX && player.posY >= camp.posY){
      if (player.food >= 50){
        player.win = true;
        setTimeout(function(){document.getElementById("player-stat3").innerHTML = "You reached the camp with enough food, you win!!"},1500); 
        // document.getElementById("player-stat3").innerHTML = "You reached the camp with enough food, you win!!";
      }
      else {
        player.win = false;
        setTimeout(function(){document.getElementById("player-stat3").innerHTML = "You reached the camp but you don't have enough food, you lose!"},1500); 
        // document.getElementById("player-stat3").innerHTML = "You reached the camp but you don't have enough food, you lose!";
      }
    }
    else {
      console.log("Keep going!");
      player.posX += Math.floor((Math.random()*10)+1);
      // document.getElementById("player-locationX").innerHTML = player.posX;
      setTimeout(function(){document.getElementById("player-locationX").innerHTML = player.posX;},800); 
      player.posY += Math.floor((Math.random()*10)+1);
      // document.getElementById("player-locationY").innerHTML = player.posY;
      setTimeout(function(){document.getElementById("player-locationY").innerHTML = player.posY},800); 
      rebel.posX += Math.floor((Math.random()*10)+1);
      rebel.posY += Math.floor((Math.random()*10)+1);
      // document.getElementById("player-stat2").innerHTML = player.stat();
      setTimeout(function(){document.getElementById("player-stat2").innerHTML = player.stat()},800); 
    };
  };

},

stat: function() {
  return "Your position is (" + player.posX + "," + player.posY + ") and you have " + player.food + " lbs. of food left.";
  document.getElementById("player-stat").innerHTML = player.stat();
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

