import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studyhall',
  templateUrl: './studyhall.component.html',
  styleUrls: ['./studyhall.component.css']
})


export class StudyhallComponent implements OnInit {
  mySqlData:any;
  xpWidth:number;
  totalXp:number = 2000;
  myXp:number;
  level:number;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(this.authService.getUserLocaldata());
    this.authService.getCharacter(user).subscribe(data =>{
      if(data.success){
        console.log(data);
        this.myXp = data.char.xp;
        this.level = data.char.playerLvl;
      }
    },
      err => {
        console.log(err);
        return false;
    });

    this.authService.getLevels().subscribe(data =>{
      if(data.success){
        console.log(data.level[this.level]);
        this.totalXp = data.level[this.level].xp;
      }
    });
    this.calculateXp();

    this.authService.getStudyHallInfo().subscribe(data => {
      this.mySqlData = data.mySql;
      for(var i =0; i<this.mySqlData.length; i++){
        console.log(this.mySqlData[i]);
      }
    },
  err => {
    console.log(err);
    return false;
  });
  }
  calculateXp(){
    this.xpWidth = this.myXp / this.totalXp * 100;
  }
}
