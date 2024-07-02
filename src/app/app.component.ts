import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChessBoardComponent} from "./modules/chess-board/chess-board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChessBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-chess';
}
