export enum Color {
  White,
  Black
}

export type Coords = {
  x: number;
  y: number;
}

export enum FENChar {
  WhitePawn = 'P',
  WhiteKnight = 'N',
  WhiteBishop = 'B',
  WhiteRook = 'R',
  WhiteQueen='Q',
  WhiteKing = 'K',
  BlackPawn = 'p',
  BlackKnight = 'n',
  BlackBishop = 'b',
  BlackRook = 'r',
  BlackQueen='q',
  BlackKing = 'k'
}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  B: "assets/pieces/white bishop.svg",
  K: "assets/pieces/white king.svg",
  N: "assets/pieces/white knight.svg",
  P: "assets/pieces/white pawn.svg",
  Q: "assets/pieces/white queen.svg",
  R: "assets/pieces/white rook.svg",
  b: "assets/pieces/black bishop.svg",
  k: "assets/pieces/black king.svg",
  n: "assets/pieces/black knight.svg",
  p: "assets/pieces/black pawn.svg",
  q: "assets/pieces/black queen.svg",
  r: "assets/pieces/black rook.svg",
}

export type SafeSquares = Map<string, Coords[]>;
