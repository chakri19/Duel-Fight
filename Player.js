class Player{
    constructor(){
        this.name = null;
        this.health = 100;
        this.index = 0;
        this.round = null;
        this.x = 200;
        this.y = 340;
    }

    readPlayerCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount=data.val();
        })
    }

    updatePlayerCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    updatePlayerInfo(){
        database.ref("players/player"+this.index).set({
            health:this.health,
            name:this.name,
            round:this.round,
            position:{
                x:this.x,
                y:this.y
            }
        })
    }

    static readPlayerInfo(){
        database.ref("players").on("value",function(data){
            allPlayers=data.val();
        })
    }
}