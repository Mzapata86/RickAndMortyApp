import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() id: number | undefined;
  @Input() name: string | undefined;
  @Input() image: string | undefined;
  @Output() cardClicked: EventEmitter<number> = new EventEmitter();
}
