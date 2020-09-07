 new Vue({
            el: '#app',
            data:{
                playerHealth:100,
                monsterHealth:100,
                gameIsRunning:false,
                turn:[]
            },
            methods: {
                startGame: function() {
                    this.gameIsRunning=true;
                    this.playerHealth=100;
                    this.monsterHealth=100;
                    this.turn=[];
            },
            attack:function(){
            	// console.log('attack button click');
            	// var max=10;
            	// var min=3;
            	// Math.random()*max; = return 9,999
                var demage=this.calculateDemage(3,10);
            	
            	this.monsterHealth -=demage;
                this.turn.unshift({
                    isPlayer:true,
                    text:'playee hits monster for'+demage
                });
            	if(this.checkWin())
            	{
            		return;
            	}
            	// if(this.monsterHealth<=0)
            	// {
            	// 	alert('You Won!!!');
            	// 	this.gameIsRunning=false;
            	// 	return;//dont want to excute the code down
            	// }


            	// var max=12;
            	// var min=5;
            	 var demage=this.calculateDemage(5,12);
            	this.playerHealth -= demage;
                this.turn.unshift({
                    isPlayer:false,
                    text:'monster hits player for'+demage
                });
            	this.checkWin();
            	// if(this.playerHealth<=0)
            	// {
            	// 	alert('You Lost!!!');
            	// 	this.gameIsRunning=false;
            	// 	//no return bcz no code after 
             //  	}

            },
            specialAttack:function(){
                var demage=this.calculateDemage(10,20);
                this.monsterHealth -=demage;
                 this.turn.unshift({
                    isPlayer:false,
                    text:'player hits monster hard for'+demage
                });
                if(this.checkWin())
                {
                    return;
                }
                var demage=this.calculateDemage(5,12);
                this.playerHealth -= demage;
                this.checkWin();
            },
            heal:function(){
                if(this.playerHealth<=90)
                {
                    this.playerHealth+=10;
                }
                else
                {
                    this.playerHealth=100;
                }
                var demage=this.calculateDemage(5,12);
                 this.playerHealth -= demage;

                  this.turn.unshift({
                    isPlayer:false,
                    text:'player heal for 10'
                });
                this.checkWin();
            },
            giveUp:function(){
                this.gameIsRunning=false;
            },
            calculateDemage:function(min,max){
            	return Math.max(Math.floor(Math.random()*max)+1,min);
            },
            checkWin:function(){
            	
            	if(this.monsterHealth<=0)
            	{
            		
            		if(confirm('You Won!!! New Game??'))
            		{
            			this.startGame();
            		}else
            		{
            			this.gameIsRunning=false;
            		}
            		return true;//
            		
            	}
            	else if(this.playerHealth<=0)
            	{
            		if(confirm('You Lost!new Game?'))
            		{
            			this.startGame();
            		}
            		else
            		{
            			this.gameIsRunning=false;
            		}
            		return true;
            	}
            	return false;
            }
        }
    });