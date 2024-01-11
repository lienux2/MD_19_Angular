import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dinos } from '../../Dinos';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dinosaur-item',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './dinosaur-item.component.html',
  styleUrl: './dinosaur-item.component.css',
})
export class DinosaurItemComponent implements OnInit {
  @Input() dino!: Dinos;
  @Output() onDeleteDino: EventEmitter<Dinos> = new EventEmitter();
  @Output() onToggleEditDino: EventEmitter<Dinos> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleEditDino() {
    this.onToggleEditDino.emit();
  }

  onDelete(dino: Dinos) {
    this.onDeleteDino.emit(dino);
  }
}
