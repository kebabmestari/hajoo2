import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

// game field status
// 0 empty
// 1 cross
// 2 o
var gameField: number[] = [];

const gameFieldWidth: number  = 3;
const gameFieldHeight: number = 3;

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  constructor(public navCtrl: NavController) {

  }

  /**
   * Register a move
   * @param pos
   */
  registerMove(pos: number) {
    if(gameField[pos] === 0) {

    } else
      console.log('invalid selection');
  }

  initGameArea() {
    // initialize the gameField
    for (var i = 0; i < gameFieldWidth; i++) {
      for (var j = 0; j < gameFieldHeight; j++) {
        gameField[i][j] = 0;
      }
    }
  }

}
