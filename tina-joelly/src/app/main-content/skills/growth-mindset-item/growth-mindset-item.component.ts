import { Component } from '@angular/core';

@Component({
  selector: 'app-growth-mindset-item',
  imports: [],
  templateUrl: './growth-mindset-item.component.html',
  styleUrl: './growth-mindset-item.component.scss',
})
export class GrowthMindsetItemComponent {
  showHoverItem() {
    let item = document.getElementById('mindest-hover');
    if (item) {
      item.classList.toggle('hidden');
    }
  }
}
