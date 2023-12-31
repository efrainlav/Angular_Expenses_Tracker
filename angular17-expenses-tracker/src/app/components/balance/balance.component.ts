import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Balance } from '../../models/balance.model';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss',
})
export class BalanceComponent {
  // @Input() title!: string;
  @Input() balance!: Balance;

  // //Variables con tipo implícito
  // title = 'This is the balance component';
  // // Variables con tipo explícito
  // search = 'Iphone 15 Pro Max';
}
