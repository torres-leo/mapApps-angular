import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'counter-alone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.scss'],
})
export class CounterAloneComponent implements OnChanges {
  protected count = 1;
  protected message = '';

  /**
   * Increments the current count
   * @returns {number} The current count
   */
  protected increment(): number {
    if (this.count >= 10) {
      this.message = 'You have reached the maximum count!';
      setTimeout(() => {
        this.message = '';
      }, 4000);

      return this.count;
    }

    return ++this.count;
  }

  /**
   * Decrements the current count
   * @returns {number} The current count
   */
  protected decrement(): number {
    if (this.count <= 0) {
      this.message = 'You have reached the minimum count!';
      setTimeout(() => {
        this.message = '';
      }, 4000);

      return this.count;
    }

    return --this.count;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.count) {
      this.message = '';
    }
  }
}
