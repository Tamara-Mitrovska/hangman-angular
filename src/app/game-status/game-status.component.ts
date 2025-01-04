import { Component } from '@angular/core';
import { WordService } from '../word/word.service';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.scss']
})
export class GameStatusComponent {

  constructor(public wordService: WordService) {}
}
