import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})

export class AchievementComponent implements OnInit {
  notDoneAchievements = [];
  doneAchievements = [];
  achievements= [
      { name: "Baby steps", description: "Took part in your first duel", reward:10},
      { name: "They grow up so fast", description: "Fought 15 times", reward:100},
      { name: "Cheap shot", description: "Won your first duel", reward:10},
      { name: "Scalping", description: "Won 20 fights", reward:150},
      { name: "Ear collerctor", description: "Won 1337 fights", reward:'Cosmetic reward'}];
  characterFights = [];
  mongoChar:any;

  constructor(private authService:AuthService,private router: Router,) { }

  ngOnInit() {
    var user = this.authService.getUserLocaldata();
    var obj = JSON.parse(user);
    this.authService.getCharacter(obj).subscribe(char =>{
      if(char.success){
        this.checkIfuserGotAnyNewAchievements(char);
        this.printAchievements();
      }else{
        console.log(char.msg);
      }
    });
  }

  printAchievements(){
    var char = JSON.parse(this.authService.getCharacterLocalStorage());
    console.log(this.mongoChar);
    for(var i = 0; i<char.achievements.length; i++){
      var temp = char.achievements[i].name;
      for(var j = 0; j<this.achievements.length; j++){
        if(this.achievements[j].name == temp){
          this.doneAchievements.push(this.achievements[j]);
        }else{
          this.notDoneAchievements.push(this.achievements[j]);
        }
      }
    }
  }

  checkIfuserGotAnyNewAchievements(char){
    var win = char.char.combatRecord[0].wins
    var loss = char.char.combatRecord[0].losses;
    var totalFights = win + loss;
    var charAchievements = char.char.achievements;
    console.log(char.char);
    this.mongoChar = char.char;
    this.authService.setCharLocalStorage(char.char);
    for(var i = 0; i<charAchievements.length; i++){
      if(totalFights == 1 && charAchievements[i].name !== "Baby steps"){
        var upChar = {
          id: char._id,
          achievement:'Baby steps',
          xp:10
        }
        this.authService.updateChar(upChar).subscribe(data =>{
          if(data.success){
            console.log(data);
            this.authService.setCharLocalStorage(data);
          }else{
            console.log(data.msg);
          }
        });
      }else if(totalFights == 15 && charAchievements[i].name !== "They grow up so fast"){
        var upChar = {
          id: char._id,
          achievement:'They grow up so fast',
          xp:100
        }
        this.authService.updateChar(upChar).subscribe(data =>{
          if(data.success){
            console.log(data);
            this.authService.setCharLocalStorage(data);
          }else{
            console.log(data.msg);
          }
        });
      }
      if(win == 1 && charAchievements[i].name !== "Cheap shot"){
        var upChar = {
          id: char._id,
          achievement:'Cheap shot',
          xp:10
        }
        this.authService.updateChar(upChar).subscribe(data =>{
          if(data.success){
            console.log(data);
            this.authService.setCharLocalStorage(data);
          }else{
            console.log(data.msg);
          }
        });
      }else if(win == 20 && charAchievements[i].name !== "Scalping"){
        var upChar = {
          id: char._id,
          achievement:'Scalping',
          xp:150
        }
        this.authService.updateChar(upChar).subscribe(data =>{
          if(data.success){
            console.log(data);
            this.authService.setCharLocalStorage(data);
          }else{
            console.log(data.msg);
          }
        });
      }
    }

  }
}
