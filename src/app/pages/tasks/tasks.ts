import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Task = {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  tasks: Task[] = [
    { id: 1, title: 'Learn Angular Basics', done: false },
    { id: 2, title: 'Build Task Manager', done: false },
    { id: 3, title: 'Prepare for project work', done: false }
  ];

  toggle(task: Task) {
    task.done = !task.done;
  }
}
