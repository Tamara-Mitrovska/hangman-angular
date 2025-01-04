import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class WordService {

    private allWords: string[] = [];
    private currentWord = 'a';
    wrongLetters = new Set();
    guess = ['_'];

    constructor(private http: HttpClient) {
        this.http.get<string[]>('/assets/words.json').subscribe(words => {
            this.allWords = words;
            this.setNewWord();
        });
    }

    setNewWord(): void {
        this.currentWord = this.allWords[Math.floor(Math.random() * this.allWords.length)];
        this.guess = [].constructor(this.currentWord.length).fill('_');
        this.wrongLetters = new Set();
    }

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

    get ongoing(): boolean {
        return !this.victory && !this.defeat;
    }

    get victory(): boolean {
        return !this.guess.includes('_');
    }

    get defeat(): boolean {
        return this.guess.includes('_') && this.wrongLetters.size === 6;
    }


}