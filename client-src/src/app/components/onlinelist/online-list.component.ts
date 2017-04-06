import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-list',
  templateUrl: './online-list.component.html',
  styleUrls: ['./online-list.component.css']
})
export class OnlineListComponent implements OnInit {

    private characters = [
    {name:'Nils', charname:'sirNils', charImage:'https://webshare.mah.se/ae3529/img1.png', playerLvl:'1', health:100,damage:50},
    {name:'Anna', charname:'horsieGirl', charImage:'https://webshare.mah.se/ae3529/img2.png', playerLvl:'2', health:100,damage:50},
    {name:'Andreas', charname:'smurfen', charImage:'https://webshare.mah.se/ae3529/img3.png', playerLvl:'3', health:100,damage:50},
    {name:'Ida', charname:'misspear', charImage:'https://webshare.mah.se/ae3529/img4.png', playerLvl:'2', health:100,damage:50},
    {name:'Rick', charname:'KingRick', charImage:'https://webshare.mah.se/ae3529/img3.png', playerLvl:'1', health:100,damage:50}
  ];
  constructor(private authService:AuthService,
    private router: Router) { }

  ngOnInit() {

  }

}
