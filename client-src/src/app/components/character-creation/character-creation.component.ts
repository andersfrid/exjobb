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
  image:Number;

  private imgPaths = [
    {src:'http://webshare.mah.se/ae3529/img1.png', alt:'img1'},
    {src:'http://webshare.mah.se/ae3529/img1.png', alt:'img2'},
    {src:'http://webshare.mah.se/ae3529/img1.png', alt:'img3'},
    {src:'http://webshare.mah.se/ae3529/img1.png', alt:'img4'}
  ];

  private img:Object;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.img = this.imgPaths[0];
  }

  private moveLeft(){

  }

  private moveRight(){

  }

  onCharacter(){
    console.log(this.img);
  }

  onCharacterSubmit(){
    const char = {
      name:this.name,
      image:this.image
    }

  if(!this.validateService.validateCharName(char)){
    this.flashMessage.show('You have to choose a name for your character',{ccsClass: 'alert-danger', timeout:3000});
    return false;
  }

  this.authService.registerCharacter(char).subscribe(data => {
    if(data.success){
      this.flashMessage.show('You have registered a character', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/profile']);
    }else{
      this.flashMessage.show('REGISTER FAILED', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['/create-char']);
    }
  });
  }
}
