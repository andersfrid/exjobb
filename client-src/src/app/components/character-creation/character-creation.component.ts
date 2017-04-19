import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.css']
})
export class CharacterCreationComponent implements OnInit {
  name:String;
  imageIndex:number;

  private imgPaths = [
    {src:'https://webshare.mah.se/ae3529/img1.png', alt:'img1'},
    {src:'https://webshare.mah.se/ae3529/img2.png', alt:'img2'},
    {src:'https://webshare.mah.se/ae3529/img3.png', alt:'img3'},
    {src:'https://webshare.mah.se/ae3529/img4.png', alt:'img4'}
  ];

  private img:Object;
  private user:any;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.imageIndex = 0;
    this.img = this.imgPaths[this.imageIndex];
    if(!this.authService.loggedIn()){
      this.router.navigate(['/']);
    }else{
      this.user = JSON.parse(this.authService.getUserLocaldata());
      if(this.user.character != undefined){
        this.router.navigate(['/dashboard']);
      }
    }
  }

  private moveLeft(){
    if(this.imageIndex <= 0){
      this.imageIndex = 3;
      this.img = this.imgPaths[this.imageIndex];
    }else{
      this.imageIndex--;
      this.img = this.imgPaths[this.imageIndex];
    }
  }

  private moveRight(){
    if(this.imageIndex >= 3){
      this.imageIndex = 0;
      this.img = this.imgPaths[this.imageIndex];
    }else{
      this.imageIndex++;
      this.img = this.imgPaths[this.imageIndex];
    }
  }

  onCharacterSubmit(){
    const char = {
      name:this.name,
      image:this.imgPaths[this.imageIndex].src
    }

  if(!this.validateService.validateCharName(char)){
    this.flashMessage.show('You have to choose a name for your character',{ccsClass: 'alert-danger', timeout:3000});
    return false;
  }

  this.authService.registerCharacter(char).subscribe(data => {
    if(data.success){
      this.authService.setCharLocalStorage(data);
      this.user = JSON.parse(this.authService.getUserLocaldata());
      var updateUser = {
        username:this.user.username,
        character:data.newChar._id
      }

      this.authService.setUserChar(updateUser).subscribe(data => {
        if(data.success){
          console.log(data);
          //UPDATERA USER I localStorage
        }
      });
      this.flashMessage.show('You have registered a character', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/dashboard']);
    }else{
      this.flashMessage.show('REGISTER FAILED', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/create-char']);
    }
  });
  }
}
