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
    //console.log(val);
    this.onElementSelected(val);
  }
  onElementSelected(playerResult) {
		this.shufflingResults.push(playerResult);
    this.establishTheWinner();
	}
  establishTheWinner() {
    if((this.shufflingResults[0] == "strike") && (this.computerResult[0] == "strike")){
      console.log("Both do 95% damage");
    }if((this.shufflingResults[0] == "haymaker") && (this.computerResult[0] == "protect")){
      console.log("Miss");
    }if((this.shufflingResults[0] == "protect") && (this.computerResult[0] == "strike")){
      console.log("Comp does 20% damage");
    }if((this.shufflingResults[0] == "strike") && (this.computerResult[0] == "protect")){
      console.log("Player does 20% damage");
    }if((this.shufflingResults[0] == "haymaker") && (this.computerResult[0] == "strike")){
      console.log("Player does 150% damage and comp does 95% damage");
    }if((this.shufflingResults[0] == "protect") && (this.computerResult[0] == "haymaker")){
      console.log("Player evades");
    }if((this.shufflingResults[0] == "strike") && (this.computerResult[0] == "haymaker")){
      console.log("Player does 95% damage and computer does 150%");
    }if((this.shufflingResults[0] == "haymaker") && (this.computerResult[0] == "haymaker")){
      console.log("Both does 150% damage");
    }if((this.shufflingResults[0] == "protect") && (this.computerResult[0] == "protect")){
      console.log("Nothing happens");
    }
      this.computerResult = new Array();
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
