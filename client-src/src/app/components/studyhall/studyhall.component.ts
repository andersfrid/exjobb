import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studyhall',
  templateUrl: './studyhall.component.html',
  styleUrls: ['./studyhall.component.css']
})
export class StudyhallComponent implements OnInit {
  users:any;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getStudyHallInfo().subscribe(data => {
      this.users = data.mySql;
      for(var i =0; i<this.users.length; i++){
        console.log(this.users[i]);
      }
    },
  err => {
    console.log(err);
    return false;
  });
  }

}
