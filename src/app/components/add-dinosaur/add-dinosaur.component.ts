import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Dinos } from '../../Dinos';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-dinosaur',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-dinosaur.component.html',
  styleUrl: './add-dinosaur.component.css',
})
export class AddDinosaurComponent implements OnInit {
  @Output() onAddDino: EventEmitter<Dinos> = new EventEmitter();

  name!: string;
  size!: string;
  period!: string;
  diet!: string;
  photo!: string;
  showAddDino!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddDino = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('You didnt specify what dinosaur you want to hatch');
      return;
    }

    const newDino = {
      name: this.name,
      size: this.size,
      period: this.period,
      diet: this.diet,
      photo: this.photo,
    };

    this.onAddDino.emit(newDino);

    this.name = '';
    this.size = '';
    this.period = '';
    this.diet = '';
    this.photo = '';

    this.showAddDino = false;
  }
}
