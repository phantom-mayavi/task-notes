import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { viewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Task, TaskService } from '../../services/task.service';

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

  constructor(public taskService: TaskService) {}

  get tasks() {
    return this.taskService.getTasks();
  }

  toggle(task: Task) {
    this.taskService.toggleTask(task);
  }

  addTask() {
    const title = this.newTaskTitle.trim();
    if (!title) {
      return;
    }

    this.taskService.addTask(title);
    this.newTaskTitle = '';
  }
  

  confirmDelete(task: Task) {
    const ok = confirm('Delete this task?');
    if (ok) {
      this.taskService.deleteTask(task.id);
    }
  }

  get pendingCount() {
    return this.taskService.pendingCount;
  }
  

  trackById(_index: number, task: Task) {
    return task.id;
  }

  

}
