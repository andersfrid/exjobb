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

  constructor(private authService: AuthService) { }

  ngOnInit() {

    var user = JSON.parse(this.authService.getUserLocaldata());
    this.authService.getCharacter(user).subscribe(data =>{
      if(data.success){
        this.hp = data.char.combat[0].health;
        this.image = data.char.charImage;
        this.name = data.char.charName;
        this.level = data.char.playerLvl;
      }else{
        console.log(data);
      }
    });
  }

}
