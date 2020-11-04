class Game{
    constructor(){

    }

    readGameState(){
        database.ref("gameState").on("value",(data)=>{
            gameState=data.val();
        })
    }

    updateGameState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    start(){
        if (gameState===0){
            form = new Form();
            player = new Player();
            form.display();
            player.readPlayerCount();
        }

       character1 = createSprite(200,370,30,30);
       character2 = createSprite(600,370,30,30);
       
       character1.addImage(c1Img2);
       character2.addImage(c2Img);

       characters = [character1,character2];
    }

    play(){
       form.hide();
       Player.readPlayerInfo();
       playSound("sound.m4a");

       if(allPlayers!=undefined){
        background(backImage);
           var index = 0;
           var x = 0;
           var y = 0;
           for (var character in allPlayers){
               index+=1;
               y = allPlayers[character].position.y;
               x = allPlayers[character].position.x;
               characters[index-1].x=x;
               characters[index-1].y=y;
               console.log(x);
               console.log(y);
           }
       }

       if(keyDown("RIGHT")){
           player.x+=10;
           player.updatePlayerInfo();
       }

       if(keyDown("LEFT")){
        player.x+=-10;
        player.updatePlayerInfo();
       }

       
       if(keyDown("D")&&player.index===1){
           characters[player.index-1].addImage(c1Img);
       }

       if(keyDown("D")&&player.index===2){
           characters[player.index-1].addImage(c2Img2);
       }

       if(keyDown("A")&&player.index===1){
        characters[player.index-1].addImage(c1Img3);
       }

       if(keyDown("A")&&player.index===2){
        characters[player.index-1].addImage(c2Img3);
       }

       if(character1.isTouching(character2)){
            
       }

       drawSprites();
    }
}