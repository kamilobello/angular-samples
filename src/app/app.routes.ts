import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ComponentComponent} from "./learning/component/component.component";
import {LearningComponent} from "./learning/learning.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'learning',
    component: LearningComponent,
    children: [
      {
        path: 'component',
        component: ComponentComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
