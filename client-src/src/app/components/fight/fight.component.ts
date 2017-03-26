import { Component, OnInit} from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
  public gameResult = "";
	private shufflingResults = new Array()
  private computerResult = new Array();
  public value = "";
  private set = "";
  private damage:number;
  private computerDmg:number;
  private hp:number;
  private compHp:number;
  private name:string;
  private img:string;
  private winner:string;
  private maxHp:number;
  private compMaxHp:number;
  private playerMove:string;
  private compMove:string;
  private isAlivePlayer:boolean;
  private isAliveComp:boolean;
  private wins:number;
  private loss:number;
  private xp:number;
  private timer:number;
  private subscription:any;
  private id:any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    var user = JSON.parse(this.authService.getUserLocaldata());
    this.authService.getCharacter(user).subscribe(data =>{
      if(data.success){
        this.hp = data.char.combat[0].health;
        this.img = data.char.charImage;
        this.name = data.char.charName;
        this.damage = data.char.combat[0].damage;
        this.computerDmg = this.damage;
        this.maxHp = this.hp;
        this.compMaxHp = this.maxHp + 40;
        this.compHp = this.compMaxHp;
        this.wins = data.char.combatRecord[0].wins;
        this.loss = data.char.combatRecord[0].losses;
        this.id = data.char._id;
        //console.log(data);
      }else{
        //console.log(data);
      }
    });
  }

  doStartGame(playerOne, playerTwo) {
    //console.log(playerOne);
		this.shufflingResults = new Array();
		this.gameResult = "";
		this.startShuffling();
    this.startTimer();

	}
  setMove(val){
    this.onElementSelected(val);
    //this.doStartGame();
  }

  startTimer(){
    var tick = 5;
    var number = Observable.timer(2000, 1000);
    this.subscription = number.subscribe(x => {
      this.timer = tick-x;
      if(x == 5){
        this.subscription.unsubscribe();
        this.shufflingResults = new Array();
        this.gameResult = "";
        this.startShuffling();
        this.startTimer();
    }
  });
}
  onElementSelected(playerResult) {
		this.shufflingResults.push(playerResult);
    this.isAlivePlayer = true;
    this.establishTheWinner();
	}
  establishTheWinner() {
    if((this.shufflingResults[0] == "strike") && (this.computerResult[0] == "strike")){
      console.log("Both do 95% damage");
      console.log(this.hp = (this.hp - 0.95*this.damage));
      console.log(this.compHp = (this.compHp - 0.95*this.computerDmg));
    }if((this.shufflingResults[0] == "haymaker") && (this.computerResult[0] == "protect")){
      console.log("Miss and comp does 35% damage");
      console.log(this.hp = (this.hp - 0.35*this.damage));
    }if((this.shufflingResults[0] == "protect") && (this.computerResult[0] == "strike")){
      console.log("Comp does 20% damage");
      console.log(this.hp = (this.hp - 0.20*this.computerDmg));
    }if((this.shufflingResults[0] == "strike") && (this.computerResult[0] == "protect")){
      console.log("Player does 20% damage");
      console.log(this.compHp = (this.compHp - 0.20*this.damage));
    }if((this.shufflingResults[0] == "haymaker") && (this.computerResult[0] == "strike")){
      console.log("Player does 150% damage and comp does 95% damage");
      console.log(this.compHp = (this.compHp - 1.5*this.damage));
      console.log(this.hp = (this.hp - 0.95*this.damage));
    }if((this.shufflingResults[0] == "protect") && (this.computerResult[0] == "haymaker")){
      console.log("Player evades and retaliates for 35% damage");
      console.log(this.compHp = (this.compHp - 0.35*this.damage));
    }if((this.shufflingResults[0] == "strike") && (this.computerResult[0] == "haymaker")){
      console.log("Player does 95% damage and computer does 150%");
      console.log(this.hp = (this.hp - 1.5*this.damage));
      console.log(this.compHp = (this.compHp -0.95*this.damage));
    }if((this.shufflingResults[0] == "haymaker") && (this.computerResult[0] == "haymaker")){
      console.log("Both does 150% damage");
      console.log(this.hp = (this.hp - 1.5*this.damage));
      console.log(this.compHp = (this.compHp - 1.5*this.damage));
    }if((this.shufflingResults[0] == "protect") && (this.computerResult[0] == "protect")){
      console.log("Nothing happens");
    }

    if(this.isAlivePlayer == true && this.isAliveComp == true ){
      this.playerMove = this.shufflingResults[0];
      this.compMove = this.computerResult[0];
    }
      this.computerResult = new Array();
      this.isAlivePlayer = false;
      this.isAliveComp = false;

      if(this.compHp <= 0){
          this.subscription.unsubscribe();
        this.winner = this.name + " wins!!";
        this.wins += 1;
        console.log("winner" + this.winner);
        var char = {
          combatStats:true,
          _id:this.id,
          wins:this.wins,
          losses:this.loss
        };
        this.authService.updateChar(char).subscribe(data =>{
          if(data.success){
            var xp = {
              xp:100,
              _id:this.id
            };
            this.authService.updateChar(xp).subscribe(data =>{
              if(data.success){
                console.log(data);
              }else{
                console.log(data);
              }
            });
          }else{
            console.log(data);
          }
        });

      //console.log(this.wins);
        return this.winner;
      }if(this.hp <= 0){
        this.subscription.unsubscribe();
        this.winner = "Computer wins!!";
        this.loss += 1;
        console.log(this.loss);
        console.log("winner" + this.winner);
        var char = {
          combatStats:true,
          _id:this.id,
          wins:this.wins,
          losses:this.loss
        };
        this.authService.updateChar(char).subscribe(data =>{
          if(data.success){
            console.log(data);
          }else{
            console.log(data);
          }
        });
      //  console.log(this.loss);
        return this.winner;
      }
      if(this.hp <= 0 && this.compHp <=0){
        this.subscription.unsubscribe();
        this.winner = "Draw";
        var char = {
          combatStats:true,
          _id:this.id,
          wins:this.wins,
          losses:this.loss
        };
        this.authService.updateChar(char).subscribe(data =>{
          if(data.success){
            var xp = {
              xp:15,
              _id:this.id
            };
            this.authService.updateChar(xp).subscribe(data =>{
              if(data.success){
                console.log(data);
              }else{
                console.log(data);
              }
            });
          }else{
            console.log(data);
          }
        });
      //  console.log(this.loss);
        return this.winner;
      }
      this.getHp();
      this.getCompHp();
  }


  getHp(){
    return this.hp;
  }
  getCompHp(){
    return this.compHp;
  }
  startShuffling() {
		var elements = ["strike", "protect", "haymaker"];
		var shufflingCounter = 0;
		var SHUFFLING_MAX = 30;
		var interval = setInterval(
			() => {
				if (shufflingCounter < SHUFFLING_MAX) {
					var randomIndex = Math.floor(Math.random() * 3);
					this.value = elements[randomIndex];
					shufflingCounter++;
          if(shufflingCounter = 30){
            this.computerResult.push(this.value);
            this.isAliveComp = true;
          }
				}
				else {
					clearInterval(interval);
				}
			},
			100
		);
	}
}
