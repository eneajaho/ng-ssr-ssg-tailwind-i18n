import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex gap-3 p-4">
      <button class="btn" (click)="counter = counter + 1">Increase</button>
      <button class="btn" (click)="counter = counter - 1">Decrease</button>
    </div>

    <div class="bg-yellow-200 p-4 m-4 rounded text-xl">
      {{ counter }}
    </div>

    <!-- <div class="p-4">
      <app-card></app-card>
    </div> -->
  `,
  styles: [
    `
      .btn {
        @apply bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent duration-200 rounded;
      }
    `,
  ],
})
export class AppComponent {
  counter = 1;
}
