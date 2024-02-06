import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToDoComponent } from '../to-do/to-do.component';

@Component({
  selector: 'app-main-title',
  standalone: true,
  imports: [CommonModule, ToDoComponent],
  templateUrl: './main-title.component.html',
  styleUrl: './main-title.component.scss'
})
export class MainTitleComponent {

}
