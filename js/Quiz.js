class Quiz {
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    background("yellow")
    question.hide();
    textSize(20);
    text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230)


   text("Result of the Quiz",425,50)

    Contestant.getPlayerInfo()

console.log(allContestants)
   if(allContestants !== undefined){
     fill("Blue");
var x = 150;
var y = 250;

     for(var plr in allContestants ){
      //var correctAnswer = 2
       if(allContestants[plr].answer===2){
         fill("green")
        
       }else{
         fill("red")
       }
       text(allContestants[plr].name+":"+ allContestants[plr].answer,x,y)
       y= y+50

     }
   }

   

    //write code to highlight contest who answered correctly
    
  }

}
