import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() caption: string;
  @Input() label: string;
  @Input() imageWidth: number;
  @Input() imageHeight: number;
  @Input() captionOnCard: boolean;
  @Input() labelOnCard: boolean;

  constructor() {}

  ngOnInit(): void {}
}
