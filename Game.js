class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref("playerCount").once("value");
        if (playerCountRef.exists() ){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        
        form = new Form()
        form.display();
      }
    }

    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1,car2,car3,car4];
    //display text when game starts
    play() {

      form.hide();
     // textSize(40);
     // text("Game Start",200,50);
      Player.GetPlayerInfo();
      if (allPlayers !== undefined ) {
        //var displayPosition = 130;
        var index = 0;
        var x= 0;
        var y;
        for (var newPlayer in allPlayers)
        {
          index = index + 1;
          //position the cars a little away from each other in the x direction
          x = x + 200;
          //using database to display y direction of cars
          y = displayHeight - allPlayers[newPlayer].distance;

          cars[index-1].x = x;
          cars[index-1].y = y;
          if (index === player.index) {
            cars[index-1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1];
          }
        //  if (newPlayer === "player" + player.index) {
         // fill ("red");
       // }
         // else {
          //  fill("black");
           // displayPosition += 20;
           // textSize(40);
           // text( allPlayers[newPlayer].name + ":" + allPlayers[newPlayer].display,X,Y )
         // }
          //increase the distance of car 
          if (keyIsDown ("Up_Arrow") && player.index !== null) {
            player.distance += 50;
            player.update();
          } 
          drawSprites();

        }
      }
    }
  
   
  }