import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {
  private hp:number;
  private image:string;
  private name:string;
  private level:number;
  private title:string;
  private dmg:number;
  private wins:number;
  private losses:number;

  xpWidth:number;
  totalXp:number;
  myXp:number;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    var user = JSON.parse(this.authService.getUserLocaldata());
    this.authService.getCharacter(user).subscribe(data =>{
      if(data.success){
        this.hp = data.char.combat[0].health;
        this.image = data.char.charImage;
        this.name = data.char.charName;
        this.level = data.char.playerLvl;
        this.title = data.char.playerTitle;
        this.dmg =data.char.combat[0].damage;
        this.wins = data.char.combatRecord[0].wins;
        this.losses = data.char.combatRecord[0].losses;

        this.myXp = data.char.xp;
      }else{
        console.log(data);
      }
    });

    this.authService.getLevels().subscribe(data =>{
      if(data.success){
        this.totalXp = data.level[this.level].xp;
      }
    });
    this.calculateXp();
  }
  calculateXp(){
    this.xpWidth = this.myXp / this.totalXp * 100;
  }
}
