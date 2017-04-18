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
  totalXp:number;
  myXp:number;
  level:number;

  handedIn = [
    {course:'Datavetenskap',assignment:'Lab 1', passed:false, handedIn:true, date:'', msg:'Need to fix if statment'},
    {course:'Datavetenskap',assignment:'Lab 2', passed:true, handedIn:true, msg:'Well done'},
    {course:'OOP',assignment:'Lab 1', passed:true, handedIn:true, msg:'Well done'},
    {course:'OOP',assignment:'Lab 2', passed:true, handedIn:true, msg:'Well done'},
    {course:'OOP',assignment:'Lab 3', passed:true, handedIn:true, msg:'Well done'},
    {course:'OOP',assignment:'Lab 4', passed:false, handedIn:true, date:'', msg:'It crashed when i try to run it, fix!'}
  ];

  notDone = [
    {course:'Datavetenskap',assignment:'Project report', handedIn:false, date:'1/4'},
    {course:'Datavetenskap',assignment:'Lab 3', handedIn:false, date:'8/4'},
    {course:'Datavetenskap',assignment:'Lab 4', handedIn:false, date:'16/4'},
    {course:'Datavetenskap',assignment:'Text writing', handedIn:false, date:'24/4'},
    {course:'OOP',assignment:'Project report', handedIn:false, date:'28/4'},
    {course:'OOP',assignment:'Lab 5', handedIn:false, date:'3/4'},
    {course:'OOP',assignment:'Lab 6', handedIn:false, date:'8/4'},
    {course:'OOP',assignment:'Lab 7', handedIn:false, date:'14/4'},
    {course:'OOP',assignment:'Group assignment', handedIn:false, date:'20/4'}
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(this.authService.getUserLocaldata());
    this.authService.getCharacter(user).subscribe(data =>{
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
        console.log(data.level[this.level]);
        this.totalXp = data.level[this.level].xp;
      }
    });
    this.calculateXp();
  
  }
  calculateXp(){
    this.xpWidth = this.myXp / this.totalXp * 100;
  }
}
