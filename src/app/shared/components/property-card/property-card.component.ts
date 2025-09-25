import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, CurrencyPipe,TitleCasePipe, CommonModule } from '@angular/common';
import { Property } from '../../../models/property.model';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [RouterLink, NgClass, CurrencyPipe,TitleCasePipe,CommonModule],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss',
})
export class PropertyCardComponent {
  @Input() property!: Property;
  @Input() featured: boolean = false;
}