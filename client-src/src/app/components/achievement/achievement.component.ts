import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})

export class AchievementComponent implements OnInit {
  achievements:any;
  test = true;
  constructor(private authService:AuthService) { }

/*
  Check if achive is done then store in done.
  Save done achivements in array
  Save not done achivements in array
*/
  ngOnInit() {
    this.authService.getAchievements().subscribe(data => {
      this.achievements = data.achievment;
      console.log(this.achievements);
      console.log(this.authService.getCharacterLocalStorage());
      for(var i =0; i<this.achievements.length; i++){
        console.log(this.achievements[i]);
      }
    },
  err => {
    console.log(err);
    return false;
  });
  }

}
