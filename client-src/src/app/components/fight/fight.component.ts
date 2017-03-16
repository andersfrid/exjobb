import { Component, OnInit} from '@angular/core';


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
  constructor() { }

  ngOnInit() {
  }

  doStartGame(playerOne, playerTwo) {
    //console.log(playerOne);
		this.shufflingResults = new Array();
		this.gameResult = "";
		this.startShuffling();

	}
  setMove(val){
    console.log(val);
    this.onElementSelected(val);
  }
  onElementSelected(playerResult) {
		this.shufflingResults.push(playerResult);
    this.establishTheWinner();
	}
  establishTheWinner() {
    if (this.shufflingResults[0] == this.computerResult[0]) {
      console.log("it's a draw !");
    }else if(((this.shufflingResults[0] == "rock") && (this.computerResult[0] == "scissors"))
      || ((this.shufflingResults[0] == "scissors") && (this.computerResult[0] == "paper"))
      || ((this.shufflingResults[0] == "paper") && (this.computerResult[0] == "rock"))) {
      console.log(this.shufflingResults[0] + " Player wins !!!");
    }else{
      console.log(this.computerResult[0] + " Computer wins !!!");
    }
      this.computerResult = new Array();
  }
  startShuffling() {
		var elements = ["rock", "paper", "scissors"];
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
            console.log("computer" + this.computerResult);
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
