import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs = [
    {question:"How do i register an account?", answer:"* When you start your thingy at Mah you will get registerd automaticly *"},
    {question:"Do I need social media to play the game?", answer:"* No, but you need to be a student at Mah *"},
    {question:"Can I use multiple accounts?", answer:"* No you get one account *"},
    {question:"How do i change my e-mail?", answer:"* You have to contact the system admin *"},
    {question:"How do i delete my account?", answer:"* You cant *"},
    {question:"Where do i fight?", answer:"* Login, go the arena and change someone *"},
    {question:"How do I fight?", answer:"* During a duel you have 3 options. Strike your opponent, Defend your opponent's attack and launch a wild Haymaker. Strike does full damage versus Strike and Haymaker. Haymaker does strong damage versus Strike and Haymaker. Defend greatly reduces the damage taken from Strike and fully evades the Haymaker. While evading you even get to counter your opponent and deal some damage *"}
];
  constructor() { }

  ngOnInit() {
  }

}
