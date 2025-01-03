import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent {
  expectedWord = 'coding';
  guess = ['C', '_', 'D', '_', 'I', '_'];

  
}
