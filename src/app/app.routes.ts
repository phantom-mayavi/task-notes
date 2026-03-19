import { Routes } from '@angular/router';
import { Tasks } from './pages/tasks/tasks';

export const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: 'tasks', component: Tasks },
    { path: '**', redirectTo: 'tasks' }
];
