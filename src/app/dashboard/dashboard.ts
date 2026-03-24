import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  evaluated: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  courses = signal<Course[]>([
    {
      id: 1,
      title: 'TAP Course',
      description: 'The core TAP certification course for Speccon Holdings.',
      instructor: 'Speccon Instructor',
      duration: 'Self-paced',
      evaluated: false
    },
    {
      id: 2,
      title: 'Advanced Leadership',
      description: 'Leadership training module',
      instructor: 'Jane Smith',
      duration: '4 weeks',
      evaluated: true
    }
  ]);

  stats = signal({
    totalCourses: 2,
    evaluatedCourses: 1,
    pendingEvaluations: 1
  });
}