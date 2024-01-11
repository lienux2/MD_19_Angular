import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  showAddDino!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddDino = value));
  }

  ngOnInit(): void {}

  toggleAddDino() {
    this.uiService.toggleAddDino();
  }
}
