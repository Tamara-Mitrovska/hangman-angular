import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class WordService {

    private currentWord = 'coding';
    wrongLetters = new Set();
    guess = ['_', '_', '_', '_', '_', '_'];

    checkLetter(letter: string): void {
        if (this.isLetterCorrect(letter) || this.isLetterWrong(letter)) {
            return;
        }
        for (let i = 0; i < this.currentWord.length; i++) {
            if (this.currentWord[i] === letter) {
                this.guess[i] = letter;
            }
        }
        if (!this.guess.includes(letter)) {
            this.wrongLetters.add(letter);
        }
    }

    isLetterCorrect(letter: string): boolean {
        return this.guess.includes(letter);
    }

    isLetterWrong(letter: string): boolean {
        return this.wrongLetters.has(letter);
    }


}