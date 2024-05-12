import {Piece} from "./piece";
import {Color, Coords, FENChar} from "../models";

export class Pawn extends Piece {
  private _hasMoved: boolean = false;
  protected override _FENChar: FENChar;
  protected override _directions: Coords[] = [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 1, y: 1 },
    { x: 1, y: -1 },
  ]

  constructor(private pieceColor: Color) {
    super(pieceColor);
    if(pieceColor === Color.Black) this.setBlackPawnDirections();
    this._FENChar = pieceColor === Color.White ? FENChar.WhiteKing : FENChar.BlackKing;
  }

  private setBlackPawnDirections(): void {
    this._directions = this._directions.map(({ x, y }) => ({ x: -1 * x, y}))
  }

  public get hasMoved(): boolean {
    return this._hasMoved;
    this._directions = [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: -1 },
    ];
    if (this.pieceColor === Color.Black) this.setBlackPawnDirections();
  }

  public set hasMoved(_) {
    this._hasMoved = true;
  }
}
