import { Component, OnInit} from '@angular/core';
import { AuthService} from '../../services/auth.service';

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
  private computerDmg = 20;
  private hp:number;
  private compHp = 200;
  private name:string;
  private img:string;
  private winner:string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    var user = JSON.parse(this.authService.getUserLocaldata());
    this.authService.getCharacter(user).subscribe(data =>{
      if(data.success){
        this.hp = data.char.combat[0].health;
        this.img = data.char.charImage;
        this.name = data.char.charName;
        this.damage = data.char.combat[0].damage;

      }else{
        console.log(data);
      }
    });
  }

  doStartGame(playerOne, playerTwo) {
    //console.log(playerOne);
		this.shufflingResults = new Array();
		this.gameResult = "";
		this.startShuffling();

	}
  setMove(val){
    this.onElementSelected(val);
    //this.doStartGame();
    console.log(this.hp);
  }
  onElementSelected(playerResult) {
		this.shufflingResults.push(playerResult);
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
      this.computerResult = new Array();

      if(this.compHp <= 0){
        this.winner = this.name + " wins!!";
        return this.winner;
      }if(this.hp <= 0){
        this.winner = "Computer wins!!";
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
