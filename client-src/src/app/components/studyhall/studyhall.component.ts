import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studyhall',
  templateUrl: './studyhall.component.html',
  styleUrls: ['./studyhall.component.css']
})

export class StudyhallComponent implements OnInit {
  xpWidth:number;
  totalXp:number;
  myXp:number;
  level:number;
  turnedIn:number = 0;
  passed:number = 0;
  correct = [];
  notDone = [];
  done = [];
  handedIn = [];
  user:any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      if(profile.success){
        this.user = profile.user;
        this.authService.updateUserLocal(this.user);
        for(var i = 0; i < this.user.assignments.length; i ++){
          if(this.user.assignments[i].handedIn){
            this.turnedIn++;
            if(this.user.assignments[i].wAssessed && !this.user.assignments[i].passed){
              this.handedIn.push(this.user.assignments[i]);
            }else if(this.user.assignments[i].passed){
              this.passed++;
              this.done.push(this.user.assignments[i]);
            }else{
              this.correct.push(this.user.assignments[i]);
            }
          }else{
            this.notDone.push(this.user.assignments[i]);
          }
        }
      }

      this.authService.getCharacter(this.user).subscribe(data =>{
        if(data.success){
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
        this.totalXp = data.level[this.level].xp;
      }
    });
    this.calculateXp();

    });
  }
  calculateXp(){
    this.xpWidth = this.myXp / this.totalXp * 100;
  }

  handedInAssignment(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.value;
    var value = idAttr.nodeValue;
    this.turnedIn ++;
    this.notDone[value].handedIn = true;
    this.notDone[value].wAssessed = true;
    this.handedIn.push(this.notDone[value]);

    var updateUser= {
      _id:this.user._id,
      assignmentId:this.notDone[value]._id
    };
    this.notDone.splice(value, 1);

    this.authService.updateUser(updateUser).subscribe(data =>{
      if(data.success){
        console.log(data);
      }
    });
  }

  correctAssignment(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.value;
    var value = idAttr.nodeValue;
    this.correct[value].handedIn = true;
    this.correct[value].wAssessed = true;
    this.handedIn.push(this.correct[value]);

    var updateUser= {
      _id:this.user._id,
      assignmentId:this.correct[value]._id
    };
    this.correct.splice(value, 1);

    this.authService.updateUser(updateUser).subscribe(data =>{
      if(data.success){
        console.log(data);
      }
    });
  }
}
