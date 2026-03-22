import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { viewChild, ElementRef, AfterViewInit } from '@angular/core';

type Task = {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks implements AfterViewInit  {

  @ViewChild('taskInput') taskInput!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    this.taskInput.nativeElement.focus();
  }

  newTaskTitle = '';

  tasks: Task[] = [
    { id: 1, title: 'Learn Angular Basics', done: false },
    { id: 2, title: 'Build Task Manager', done: false },
    { id: 3, title: 'Prepare for project work', done: false }
  ];

  toggle(task: Task) {
    task.done = !task.done;
  }

  addTask() {
    const title = this.newTaskTitle.trim();

    if (!title) {
      return;
    }

    this.tasks.push({
      id: Date.now(),
      title,
      done: false
    });

    this.newTaskTitle = '';
  }

  confirmDelete(task: Task) {
    const ok = confirm('Delete this task?');
    if (ok) {
      this.deleteTask(task.id);
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);

  }

  taskById(_index: number, task: Task) {
    return task.id;
  }

  get pendingCount() {
    return this.tasks.filter(task => !task.done).length;
  }

}
