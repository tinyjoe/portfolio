import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss',
})
export class MainButtonComponent {
  @Input() title: string = 'Placeholder';
  @Input() onClick: () => void = () => {};

  getAnimatedTitle(): string {
    return this.title
      .split('')
      .map(
        (char, index) =>
          `<p style="animation-delay: ${index * 100}ms">${char}</p>`
      )
      .join('');
  }

  circleStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0)',
    transition: 'transform 0.4s ease-in-out',
  };

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.circleStyle = {
      top: `${y}px`,
      left: `${x}px`,
      transform: 'translate(-50%, -50%) scale(1)',
      transition: 'transform 0.4s ease-in-out',
    };
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.circleStyle = {
      ...this.circleStyle,
      transform: 'translate(-50%, -50%) scale(0)',
    };
  }
}
