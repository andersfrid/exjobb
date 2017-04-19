import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { FlashMessagesService} from 'angular2-flash-messages';

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
  private user:any;

  constructor(private authService: AuthService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.authService.updateUserLocal(this.user);
      this.authService.getCharacter(this.user).subscribe(data =>{
        if(data.success){
          this.hp = data.char.combat[0].health;
          this.image = data.char.charImage;
          this.name = data.char.charName;
          this.level = data.char.playerLvl;
          this.xp = data.char.xp;
          this.id = data.char._id;
          this.authService.getLevels().subscribe(data =>{
            if(data.success){
              this.totalXp = data.level[this.level].xp;
              this.newDmg = data.level[this.level].damage;
              this.newHp = data.level[this.level].health;
              this.calculateLevel();
            }
          });
        }else{
          console.log(data);
        }
      });
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
          this.flashMessage.show('You successfully leveled up one level', {cssClass: 'alert-success', timeout: 3000});
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
