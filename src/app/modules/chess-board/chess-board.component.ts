import { Component } from '@angular/core';
import {ChessBoard} from "../../chess-logic/chess-board";
import {Color, FENChar} from "../../chess-logic/models";

@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss'
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardVew: (FENChar | null)[][] = this.chessBoard.chessBoardView
  public get playerColor(): Color {
    return this.chessBoard.playerColor;
  }
}