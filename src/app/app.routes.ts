import { Routes } from '@angular/router';
import { DinosaursComponent } from './components/dinosaurs/dinosaurs.component';
import { AboutComponent } from './components/about/about.component';
import { DinosaurDetailsComponent } from './components/dinosaur-details/dinosaur-details.component';

export const routes: Routes = [
  {
    path: '',
    component: DinosaursComponent,
    title: 'Dino Hub',
  },
  {
    path: 'dinosaur/:id',
    component: DinosaurDetailsComponent,
    title: 'Dino Details',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Jurassic Insights',
  },
  //   {
  //     path: 'edit/:id',
  //     component: EditDinoComponent,
  //     title: 'Edit',
  //   },
];
