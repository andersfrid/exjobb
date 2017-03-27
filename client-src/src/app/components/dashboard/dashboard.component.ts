import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private hp:number;
  private image:string;
  private name:string;
  private level:number;
  private maxXp:number;
  private xp:number;
  private totalXp:number;
  private id:any;
  private newDmg:number;
  private newHp:number;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    var user = JSON.parse(this.authService.getUserLocaldata());
    this.authService.getCharacter(user).subscribe(data =>{
      if(data.success){
        this.hp = data.char.combat[0].health;
        this.image = data.char.charImage;
        this.name = data.char.charName;
        this.level = data.char.playerLvl;
        this.xp = data.char.xp;
        this.id = data.char._id;
      }else{
        console.log(data);
      }
    });

    this.authService.getLevels().subscribe(data =>{
      if(data.success){
        console.log(data.level[this.level]);
        this.totalXp = data.level[this.level].xp;
        this.newDmg = data.level[this.level].damage;
        this.newHp = data.level[this.level].health;
        this.calculateLevel();
      }
    });
  }

  calculateLevel(){
    if(this.xp >= this.totalXp){
      this.level ++;
      var level = {
        lvl:this.level,
        _id:this.id
      }
      this.authService.updateChar(level).subscribe(data =>{
        if(data.success){
          var combat = {
            combat:true,
            dmg:this.newDmg,
            hp:this.newHp,
            _id:this.id
          }
          this.authService.updateChar(combat).subscribe(data =>{
            if(data.success){
              console.log(data);
            }else{
              console.log(data.msg);
            }
          });
        }else{
          console.log(data.msg);
        }
      });


    }
  }
}
