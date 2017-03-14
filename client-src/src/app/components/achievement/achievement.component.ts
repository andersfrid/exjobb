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
      this.character = this.authService.getCharacterLocalStorage();
      var obj = JSON.parse(this.character);
      var temp:any;
      for(var j = 0; j<obj.achievements.length; j++){
        temp = obj.achievements[j].name;
        for(var i = 0; i<this.achievements.length; i++){
          if(this.achievements[i].name == temp){
            this.doneAchievements.push(this.achievements[i]);
          }else{
            this.notDoneAchievements.push(this.achievements[i]);
          }
      }
      }
    },
  err => {
    console.log(err);
    return false;
  });
  }

}
