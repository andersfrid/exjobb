import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-playervsplayer',
  templateUrl: './playervsplayer.component.html',
  styleUrls: ['./playervsplayer.component.css']
})
export class PlayervsplayerComponent implements OnInit {
  private player1Hp:number;
  private player1MaxHp:number;
  private player1Dmg:number;
  private player2Dmg:number;
  private player2Hp:number;
  private player2MaxHp:number;
  private player1Image:string;
  private player2Image:string;
  private player1Move:number = 0;
  private player2Move:number = 0;
  private timer:number;
  private subscription:any;
  private charName:any;
  private char2Name:any;
  private wins:any;
  private loss:any;
  private id:any;
  private winner:string;
  private disableMove:boolean = false;
  private p1Action:string;
  private p2Action:string;
  private gameOver:boolean = false;

  private characters = [
    {name:'Nils', charname:'sirNils', charImage:'https://webshare.mah.se/ae3529/img1.png', playerLvl:'1', health:140,damage:20},
    {name:'Anna', charname:'horsieGirl', charImage:'https://webshare.mah.se/ae3529/img2.png', playerLvl:'2', health:180,damage:25},
    {name:'Andreas', charname:'smurfen', charImage:'https://webshare.mah.se/ae3529/img3.png', playerLvl:'3', health:220,damage:30},
    {name:'Ida', charname:'misspear', charImage:'https://webshare.mah.se/ae3529/img4.png', playerLvl:'2', health:180,damage:25},
    {name:'Rick', charname:'KingRick', charImage:'https://webshare.mah.se/ae3529/img3.png', playerLvl:'1', health:140,damage:20}
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    var user = JSON.parse(this.authService.getUserLocaldata());
    this.authService.getCharacter(user).subscribe(data =>{
      if(data.success){
        this.player1Hp = data.char.combat[0].health;
        this.player1Image = data.char.charImage;
        this.player1Hp = 5;
        this.charName = data.char.charName;
        this.player1Dmg = data.char.combat[0].damage;
        this.player1MaxHp = this.player1Hp;
        this.wins = data.char.combatRecord[0].wins;
        this.loss = data.char.combatRecord[0].losses;
        this.id = data.char._id;
        console.log(data);
        let randomOponent = Math.floor(Math.random() * 5);
        console.log(randomOponent);
        this.player2Hp = this.characters[randomOponent].health;
        this.player2MaxHp = this.player2Hp;
        this.player2Hp = 5;
        this.player2Image = this.characters[randomOponent].charImage;
        this.char2Name = this.characters[randomOponent].charname;
        this.player2Dmg = this.characters[randomOponent].damage;
      }else{

      }
    });
    this.startTimer();
  }

  startTimer(){
    if(!this.gameOver){
    var tick = 10;
    var number = Observable.timer(2000, 1000);
    this.disableMove = false;
    this.subscription = number.subscribe(x => {
      this.timer = tick-x;
      if(x == 10){
        this.subscription.unsubscribe();
        this.player2Move = Math.floor(Math.random() * 3) + 1;
        if(this.player2Move == 1){
          this.p2Action = 'Strike';
        }else if(this.player2Move == 2){
          this.p2Action = 'Protect';
        }else{
          this.p2Action = 'Haymaker';
        }
        if(this.player1Move == 1){
          this.p1Action = 'Strike';
        }else if(this.player1Move == 2){
          this.p1Action = 'Protect';
        }else if(this.player1Move == 3){
          this.p1Action = 'Haymaker';
        }else{
          this.player1Move = 0;
        }
        this.checkMoves(this.player1Move, this.player2Move);
        //this.startTimer(); start somewhere else
      }
    });
    }
  }

  playerAction(move:number){
    this.disableMove = true;
    this.player1Move = move;
  }

  checkMoves(p1Move, p2Move){
      if((p1Move == 1) && (p2Move == 1)){
        this.player1Hp = (this.player1Hp - 0.95*this.player2Dmg);
        this.player2Hp = (this.player2Hp - 0.95*this.player1Dmg);
      }if((p1Move == 3) && (p2Move == 2)){
        this.player1Hp = (this.player1Hp - 0.35*this.player2Dmg);
      }if((p1Move == 2) && (p2Move == 1)){
        this.player1Hp = (this.player1Hp - 0.20*this.player2Dmg);
      }if((p1Move == 1) && (p2Move == 2)){
        this.player2Hp = (this.player2Hp - 0.20*this.player1Dmg);
      }if((p1Move == 3) && (p2Move == 1)){
        this.player2Hp = (this.player2Hp - 1.5*this.player1Dmg);
        this.player1Hp = (this.player1Hp - 0.95*this.player2Dmg);
      }if((p1Move == 2) && (p2Move == 3)){
        this.player2Hp = (this.player2Hp - 0.35*this.player1Dmg);
      }if((p1Move == 1) && (p2Move == 3)){
        this.player1Hp = (this.player1Hp - 1.5*this.player2Dmg);
        this.player2Hp = (this.player2Hp -0.95*this.player1Dmg);
      }if((p1Move == 3) && (p2Move == 3)){
        this.player1Hp = (this.player1Hp - 1.5*this.player2Dmg);
        this.player2Hp = (this.player2Hp - 1.5*this.player1Dmg);
      }if((p1Move == 2) && (p2Move == 2)){

      }if((p1Move == 0) && (p2Move == 1)){
        this.player1Hp = (this.player1Hp - 0.95*this.player2Dmg);
      }if((p1Move == 0) && (p2Move == 2)){

      }if((p1Move == 0) && (p2Move == 3)){
        this.player1Hp = (this.player1Hp - 1.5*this.player2Dmg);
      }

      this.checkGameOver();
      this.startTimer();
  }

  checkGameOver(){
    if(this.player1Hp <= 0 && this.player2Hp <= 0){//draw
      this.winner = 'DRAW';
      this.gameOver = true;
      this.disableMove = true;
      this.updateGameStats(3);
    }else if (this.player1Hp <= 0){//player 2 wins
      this.winner = this.char2Name;
      this.gameOver = true;
      this.disableMove = true;
      this.updateGameStats(2);
    }else if (this.player2Hp <= 0){//player 1 wins
      this.winner = this.charName;
      this.gameOver = true;
      this.disableMove = true;
      this.updateGameStats(1);
    }
  }

  updateGameStats(gameRes){
    switch (gameRes) {
      case 1:
        this.wins += 1;
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
        break;
      case 2:
        this.loss += 1;
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
        break;
      case 3:
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
        break;
    }
  }

}
