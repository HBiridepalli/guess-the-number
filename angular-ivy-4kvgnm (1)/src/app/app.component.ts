import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showGame: boolean = false;
  inputValue: number = 0;
  // generateNumber: number;
  generateNumber = Math.floor(20 * Math.random());
  dispContent: string = '';
  score: number = 20;

  buttonClick() {
    this.showGame = !this.showGame;
  }

  checkRandom() {
    console.log(this.generateNumber);
    if (this.inputValue < this.generateNumber) {
      this.dispContent = 'Too Low';
    } else if (this.inputValue > this.generateNumber) {
      this.dispContent = 'Too High';
    } else {
      this.dispContent = 'Yayyy!';
    }

    if(this.dispContent !== 'Yayyy!'){
      this.score -= 1
    } 
  }

  reset(){
    this.generateNumber = Math.floor(20 * Math.random());
    this.dispContent = '';
    this.score = 20;
    this.inputValue = 0;
  }
}
