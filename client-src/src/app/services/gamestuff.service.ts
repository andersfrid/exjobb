import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GamestuffService {
  private url = 'http://localhost:3000';
  private socket;
  constructor() { }

  sendPlayer(socket, move){
    if(this.socket == undefined){
        this.socket = socket;
    }
    this.socket.emit('playerMove', move);
  }

  getPlayerMove(socket){
    if(this.socket == undefined){
        this.socket = socket;
    }
    let observable = new Observable(observer => {
          this.socket.on('doMoves', (data) => {
            observer.next(data);
          });
        });
        return observable;
  }

  startGame(socket){
    if(this.socket == undefined){
        this.socket = socket;
    }
    let observable = new Observable(observer => {
          this.socket.on('startGame', (data)=>{
            observer.next(data);
          });
        });
        return observable;

  }

  sendPlayer2(stats){

  }

  getPlayer2Stats(){

  }

  getWinner(){

  }

}
