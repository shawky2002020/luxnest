import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<any>();
  
  searchForm: FormGroup;
  isExpanded = false;
  
  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      location: [''],
      checkIn: [''],
      checkOut: [''],
      guests: [1]
    });
  }
  
  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
  
  onSubmit(): void {
    if (this.searchForm.valid) {
      this.search.emit(this.searchForm.value);
    }
  }
}