import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})

export class AchievementComponent implements OnInit {
  notDoneAchievements = [];
  doneAchievements = [];
  bool = [];

  constructor(private authService:AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    var user = this.authService.getUserLocaldata();
    var obj = JSON.parse(user);
    this.authService.getCharacter(obj).subscribe(char =>{
      if(char.success){
        for(var i = 0; i < char.char.achievements.length; i++){
          this.bool[i] = char.char.achievements[i].collected;
        }
        this.checkIfuserGotAnyNewAchievements(char.char);
        this.printAchievements();
      }else{
        console.log(char.msg);
      }
    });
  }

  printAchievements(){
    var char = JSON.parse(this.authService.getCharacterLocalStorage());
    for(var i = 0; i<char.achievements.length; i++){
      var temp = char.achievements[i];
      if(this.bool[i]){
        this.doneAchievements.push(temp);
      }else{
        this.notDoneAchievements.push(temp);
      }
    }
  }

  checkIfuserGotAnyNewAchievements(char){
    var win = char.combatRecord[0].wins
    var loss = char.combatRecord[0].losses;
    var totalFights = win + loss;
    var charAchievements = char.achievements;
    this.authService.setCharLocalStorage(char);
    for(var i = 0; i<charAchievements.length; i++){
      if((charAchievements[i].name === 'Created character') && !this.bool[i]){
        this.bool[i] = true;

        var upChar = {
	         "achiev":true,
	          "_id": char._id,
	          "name":"Created character"
        }
        this.authService.updateChar(upChar).subscribe(data =>{
          if(data.success){
            this.flashMessage.show('You got a new Achievement', {cssClass: 'alert-success', timeout: 3000});
            var upXP = {
              "xp":10,
              "_id": char._id
            }
            this.authService.updateChar(upXP).subscribe(data =>{
              if(data.success){
                console.log('YAAAY XP');
              }else{
                console.log(data.msg);
              }
            });
          }else{
            console.log(data.msg);
          }
        });

      }

      if(totalFights >= 1 && (charAchievements[i].name === "Baby steps") && !this.bool[i]){
        this.bool[i] = true;
        var upChar = {
           "achiev":true,
            "_id": char._id,
            "name":"Baby steps"
        }
        this.authService.updateChar(upChar).subscribe(data =>{
          if(data.success){
            this.flashMessage.show('You got a new Achievement', {cssClass: 'alert-success', timeout: 3000});
            var upXP = {
              "xp":10,
              "_id": char._id
            }
            this.authService.updateChar(upXP).subscribe(data =>{
              if(data.success){
                console.log('YAAAY XP');
              }else{
                console.log(data.msg);
              }
            });
          }else{
            console.log(data.msg);
          }
        });

      }else if(totalFights >= 15 && (charAchievements[i].name === "They grow up so fast") && !this.bool[i]){
        this.bool[i] = true;
        var upChar = {
	         "achiev":true,
	          "_id": char._id,
	          "name":"They grow up so fast"
        }
        this.authService.updateChar(upChar).subscribe(data =>{
          if(data.success){
            this.flashMessage.show('You got a new Achievement', {cssClass: 'alert-success', timeout: 3000});
            var upXP = {
              "xp":100,
              "_id": char._id
            }
            this.authService.updateChar(upXP).subscribe(data =>{
              if(data.success){
                console.log('YAAAY XP');
              }else{
                console.log(data.msg);
              }
            });
          }else{
            console.log(data.msg);
          }
        });
      }

      if(win >= 1 && (charAchievements[i].name === "Cheap shot") && !this.bool[i]){
        this.bool[i] = true;
        var upChar = {
	         "achiev":true,
	          "_id": char._id,
	          "name":"Cheap shot"
        }
        this.authService.updateChar(upChar).subscribe(data =>{
          if(data.success){
            this.flashMessage.show('You got a new Achievement', {cssClass: 'alert-success', timeout: 3000});
            var upXP = {
              "xp":10,
              "_id": char._id
            }
            this.authService.updateChar(upXP).subscribe(data =>{
              if(data.success){
                console.log('YAAAY XP');
              }else{
                console.log(data.msg);
              }
            });
          }else{
            console.log(data.msg);
          }
        });

      }else if(win >= 20 && (charAchievements[i].name === "Scalping") && !this.bool[i]){
        this.bool[i] = true;
        var upChar = {
	         "achiev":true,
	          "_id": char._id,
	          "name":"Scalping"
        }
        this.authService.updateChar(upChar).subscribe(data =>{
          if(data.success){
            this.flashMessage.show('You got a new Achievement', {cssClass: 'alert-success', timeout: 3000});
            var upXP = {
              "xp":150,
              "_id": char._id
            }
            this.authService.updateChar(upXP).subscribe(data =>{
              if(data.success){
                console.log('YAAAY XP');
              }else{
                console.log(data.msg);
              }
            });
          }else{
            console.log(data.msg);
          }
        });

      }else if(win >= 1337 && (charAchievements[i].name === "Ear collerctor") && !this.bool[i]){
        this.bool[i] = true;
        var upChar = {
	         "achiev":true,
	          "_id": char._id,
	          "name":"Ear collerctor"
        }
        this.authService.updateChar(upChar).subscribe(data =>{
          if(data.success){
            this.flashMessage.show('You got a new Achievement', {cssClass: 'alert-success', timeout: 3000});
            var upXP = {
              "xp":1000,
              "_id": char._id
            }
            this.authService.updateChar(upXP).subscribe(data =>{
              if(data.success){
                console.log('YAAAY XP');
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
}
