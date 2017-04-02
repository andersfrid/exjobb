import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Rx';
import { GamestuffService } from '../../services/gamestuff.service'

@Component({
  selector: 'app-playervsplayer',
  templateUrl: './playervsplayer.component.html',
  styleUrls: ['./playervsplayer.component.css']
})
export class PlayervsplayerComponent implements OnInit {
  socket:SocketIOClient.Socket;
  private player1Hp:number = 100;
  private player1MaxHp:number = 100; //get max hp from player
  private player1Dmg:number = 10 //get player dmg
  private player2Dmg:number = 10; //get dmg from opponent
  private player2Hp:number = 100;
  private player2MaxHp:number = 100; //Get max hp from oponent
  private player1Image:string ="";
  private player2Image:string = "";
  private player1Move:number = 0;
  private player2Move:number;
  private timer:number;
  private subscription:any;

  constructor(private gameStuff: GamestuffService) {}

  ngOnInit() {
    this.socket = io.connect('http://localhost:3000');
		    // call the server-side function 'adduser' and send one parameter (value of prompt)
        let player = {
          hp:100, //change to correct values
          dmg:20,
          image:'https://webshare.mah.se/ae3529/img1.png',
          username:'davve'
        }
		this.socket.emit('addPlayer', player);

    this.socket.on('connectedToRoom', (data)=>{
      console.log(data);
    });

//need to listen on this shit from the service
    this.gameStuff.startGame(this.socket).subscribe(startGame =>{
      console.log(startGame);
      this.startTimer();
    });

     this.gameStuff.getPlayerMove(this.socket).subscribe(action => {
       console.log(action);
     });
  }

  startTimer(){
    var tick = 10;
    var number = Observable.timer(2000, 1000);
    this.subscription = number.subscribe(x => {
      this.timer = tick-x;
      if(x == 10){
        this.gameStuff.sendPlayer(this.socket, this.player1Move);
        this.player1Move = 0;
        this.subscription.unsubscribe();
        //this.startTimer(); start somewhere else
      }
    });
  }

  playerAction(move:number){
    this.player1Move = move;
  }

}
