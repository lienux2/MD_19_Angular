import { Component, OnInit } from '@angular/core';
import { Dinos } from '../../Dinos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DinosaurItemComponent } from '../dinosaur-item/dinosaur-item.component';
import { DinosaurService } from '../../services/dinosaur.service';
import { AddDinosaurComponent } from '../add-dinosaur/add-dinosaur.component';

@Component({
  selector: 'app-dinosaurs',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DinosaurItemComponent,
    DinosaurItemComponent,
    AddDinosaurComponent,
  ],
  templateUrl: './dinosaurs.component.html',
  styleUrl: './dinosaurs.component.css',
})
export class DinosaursComponent implements OnInit {
  dinos: Dinos[] = [];

  constructor(private dinosaurService: DinosaurService) {}

  ngOnInit(): void {
    this.getDinos();
  }

  getDinos(): void {
    this.dinosaurService.getDinos().subscribe((dinos) => (this.dinos = dinos));
  }

  onDeleteDino(dino: Dinos): void {
    this.dinos = this.dinos.filter((h) => h !== dino);
    this.dinosaurService.deleteDino(dino).subscribe();
  }

  addDino(dino: Dinos) {
    this.dinosaurService
      .addDino(dino)
      .subscribe((dino) => this.dinos.push(dino));
  }

  onToggleEditDino() {
    console.log('toggle edit');
  }
}
