import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div class="loader-container" [ngClass]="{'fullscreen': fullscreen}">
      <div class="loader" [ngStyle]="{'width.px': size, 'height.px': size}"></div>
      <p *ngIf="message" class="loader-message">{{ message }}</p>
    </div>
  `,
  styles: [`
    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      
      &.fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 9999;
      }
    }
    
    .loader {
      width: 40px;
      height: 40px;
      border: 3px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border-top-color: var(--primary-color, #3498db);
      animation: spin 1s ease-in-out infinite;
    }
    
    .loader-message {
      margin-top: 1rem;
      font-size: 0.875rem;
      color: var(--text-color, #333);
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `],
  imports: [CommonModule],
})
export class LoaderComponent {
  @Input() size: number = 40;
  @Input() fullscreen: boolean = false;
  @Input() message?: string;
}