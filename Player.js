class Player {
    constructor()
    {

      this.index=null;
      this.distance=null;
      this.name=null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "player/players" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
    //get all players info
    static GetPlayerInfo() {
      var playerInfo = database.ref('players');
      playerInfo.on('value',(data)=>{
        allPlayers = data.val();
      })

    }
  }