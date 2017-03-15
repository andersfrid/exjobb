import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})

export class AchievementComponent implements OnInit {
  notDoneAchievements = [];
  doneAchievements = [];
  achievements:any;
  character:any;
  constructor(private authService:AuthService) { }

/*
  Check if achive is done then store in done.
  Save done achivements in array
  Save not done achivements in array
*/
  ngOnInit() {
    this.authService.getAchievements().subscribe(data => {
      this.achievements = data.achievment;
      var user = this.authService.getUserLocaldata();
      var obj = JSON.parse(user);
      this.authService.getCharacter(obj).subscribe(char =>{
        var temp:any;
        for(var i = 0; i<char.char.achievements.length; i++){
          temp = char.char.achievements[i].name;
          for(var j = 0; j<this.achievements.length; j++){
            if(this.achievements[j].name == temp){
              this.doneAchievements.push(this.achievements[j]);
            }else{
              this.notDoneAchievements.push(this.achievements[j]);
            }
          }
        }
      });
    },
  err => {
    console.log(err);
    return false;
  });
  }
}
