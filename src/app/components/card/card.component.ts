import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  flipped: boolean;

  constructor() {}

  flipCard() {
    this.flipped = !this.flipped;
  }

  ngOnInit() {}
}
