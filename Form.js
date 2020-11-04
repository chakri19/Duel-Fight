class Form{
    constructor(){
        this.input = createInput("Enter your Name");
        this.button = createButton("Play!");
        this.title = createElement("h1");
        this.greeting = createElement("h2");
    }

    display(){
        this.title.html("Welcome!");
        this.title.position(400,50);

        this.input.position(400,200);
        this.button.position(400,230);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            playerCount=playerCount+1;
            if(playerCount===1){
                player.x = 200;
            }
            else{
                player.x = 600;
            }
            player.index=playerCount;
            player.updatePlayerCount(playerCount);
            player.updatePlayerInfo();

            this.greeting.html("Hello "+player.name);
            this.greeting.position(400,100);
        });
    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}