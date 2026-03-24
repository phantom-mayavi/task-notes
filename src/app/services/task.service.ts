import { Injectable } from '@angular/core';

export type Task = {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, title: 'Learn Angular Basics', done: false },
    { id: 2, title: 'Build Task Manager', done: false },
    { id: 3, title: 'Prepare for project work', done: false }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  toggleTask(task: Task): void {
    task.done = !task.done;
  }

  addTask(title: string): void {
    if (!title) {
      return;
    }

    this.tasks.push({
      id: Date.now(),
      title,
      done: false
    });

  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);

  }

  get pendingCount(): number {
    return this.tasks.filter(task => !task.done).length;
  }

  clearCompleted(): void {
    this.tasks = this.tasks.filter(task => !task.done);
  }
  
}
