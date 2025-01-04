import { Component } from '@angular/core';
import { WordService } from './word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent {
  constructor(public wordService: WordService) {}
}
