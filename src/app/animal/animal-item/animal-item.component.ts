import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent implements OnInit {
  @Input() model: Animal;
  @Output() delete: EventEmitter<Animal>;

  constructor() {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {}

  onDelete(): void {
    this.delete.emit(this.model);
  }
}
