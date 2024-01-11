import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DinosaurService } from '../../services/dinosaur.service';
import { Dinos } from '../../Dinos';
import { DinosaursComponent } from '../dinosaurs/dinosaurs.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, DinosaursComponent],
  templateUrl: './dinosaur-details.component.html',
  styleUrl: './dinosaur-details.component.css',
})
export class DinosaurDetailsComponent implements OnInit {
  dino!: Dinos;

  constructor(
    private route: ActivatedRoute,
    private dinosaurService: DinosaurService
  ) {}

  ngOnInit(): void {
    const dinoById = parseInt(this.route.snapshot.params['id'], 10);

    this.dinosaurService.getDinoById(dinoById).subscribe((dino) => {
      this.dino = dino;
    });
  }
}
