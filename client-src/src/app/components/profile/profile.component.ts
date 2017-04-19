import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  image:any;
  char:any;
  constructor(private authService:AuthService,
     private router:Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      
      this.authService.updateUserLocal(this.user);
      this.authService.getCharacter(this.user).subscribe(data =>{
        if(data.success){
          this.image = data.char.charImage;
        }
      },
        err => {
          console.log(err);
          return false;
      });
    },
  err => {
    console.log(err);
    return false;
  });
  }

}
