import { Component } from '@angular/core';
import { WordService } from '../word/word.service';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent {
  constructor(public wordService: WordService) {}
}
